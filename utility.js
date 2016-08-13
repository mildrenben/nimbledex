"use strict";

const port = '6379';
const host = '127.0.0.1';

const redis = require("redis"),
      client = redis.createClient(port,host);

const request = require('request');
const _ = require('lodash');
const Promise = require('bluebird');

const tmHmLookup = require('./lookups/tmHmNumbers');

function getData() {
  for (let i = 1; i <= 721; i++) {
    setTimeout(function(){
      request('http://pokeapi.co/api/v2/pokemon/' + i, function (err, res, body) {
        if (!err && res.statusCode == 200) {
          var d = JSON.parse(body);
          var newD = {};
          // Id & Name
          if (d.id >= 100) {
            newD.id = d.id;
          } else if (d.id > 9 && d.id < 100) {
            newD.id = '0' + d.id;
          } else {
            newD.id = '00' + d.id;
          }

          newD.name = d.name;

          // Types
          newD.types = [];
          for(let i = 0; i < d.types.length; i++) {
            newD.types.unshift(d.types[i].type.name)
          }
          // Stats - HP, Atk, Def, SpAtk, SpDef, Spe
          newD.stats = [];
          newD.ev = {};
          for(let i = 0; i < d.stats.length; i++) {
            newD.stats.unshift(d.stats[i].base_stat);
            // EVs
            if (d.stats[i].effort > 0) {
              newD.ev[d.stats[i].stat.name] = d.stats[i].effort;
            }
          }

          // Abilities
          newD.abilities = [];
          for(let i = 0; i < d.abilities.length; i++) {
            let ability = {
              "name": d.abilities[i].ability.name,
              "hidden": d.abilities[i].is_hidden
            };
            setTimeout(function(){
              request(d.abilities[i].ability.url, function(err, res, body) {
                const data = JSON.parse(body);
                ability.description = data.effect_entries[0].short_effect;
                newD.abilities.unshift(ability);
              });
            }, 3000);
          }
          setTimeout(function(){
            client.set(newD.id, JSON.stringify(newD));
            console.log(newD.id + '   complete');
          }, 9000);

        }
        else {
          console.log('FAILURE ' + i);
        }
      });
    }, 11000 * i);
  }
}

function getId(url) {
  // Get id number. Can be '1', '22' or '333'
  let id = url.slice(url.indexOf('es/') + 3, url.length - 1);
  // Convert id's to triple digit
  let tripleId;
  if (id >= 100) {
    tripleId = id;
  }
  else if (id > 9 && id < 100) {
    tripleId = '0' + id;
  }
  else {
    tripleId = '00' + id;
  }
  return tripleId;
}

function evolDataPush(entry, exit, multi) {
  var set = {};
  set.id = getId(entry.species.url);
  set.other = {};

  // If multi
  if (multi) {
    set.multi = true;
  }

  function loopEvolDetails(details) {
    for (var x in details) {
      // For true statements
      if (!(details[x] == false) && !(details[x] === null)) {
        // For objects
        if (typeof details[x] === 'object') {
          if (x === 'trigger') {
            set[x] = details[x].name;
          } else {
            // If key has already been set, make array. For 'or' locations etc.
            if (set.other[x]) {
              const bank = set.other[x];
              set.other[x] = [details[x].name];
              set.other[x] = set.other[x].concat(bank);
            } else {
              set.other[x] = details[x].name;
            }
          }
        } else {
          if (x === 'trigger') {
            set[x] = details[x];
          } else {
            set.other[x] = details[x];
          }
        }
      }
    }
  }
  if (entry.evolution_details.constructor === Array) {
    for(let i = 0; i < entry.evolution_details.length; i++) {
      loopEvolDetails(entry.evolution_details[i]);
    }
  } else {
    loopEvolDetails(entry.evolution_details);
  }
  exit.push(set);
}

function evolFunc (entry, exit) {
  if (!(entry.length === 0)) {
    if (entry.length === 1) {
      evolDataPush(entry[0],exit);
    }
    else if (entry.length > 1) {
      for (var i in entry) {
        evolDataPush(entry[i], exit, true);
      }
    }
  }
}

function getOther() {
  console.log('getOther init');
  for (let j = 1; j <= 721; j++) {
    setTimeout(function(){
      request('http://pokeapi.co/api/v2/pokemon-species/' + j, function(err, res, body) {
        if (!err && res.statusCode == 200) {
          var bod = JSON.parse(body);
          var newD = {};
          newD.capture_rate = bod.capture_rate;
          newD.hatch_counter = bod.hatch_counter;
          // Triple digit ID
          let tripleId;
          if (j >= 100) {
            tripleId = j;
          }
          else if (j > 9 && j < 100) {
            tripleId = '0' + j;
          }
          else {
            tripleId = '00' + j;
          }

          client.get(tripleId, function(err, val) {
            var redisData = JSON.parse(val);
            redisData.capture_rate = newD.capture_rate;
            redisData.hatch_counter = newD.hatch_counter;
            client.set(tripleId, JSON.stringify(redisData));
            console.log(tripleId + ' | Complete extra info');
          });
          request(bod.evolution_chain.url, function (err, res, body) {
            if (!err && res.statusCode == 200) {
              var d = JSON.parse(body);
              var newD = {};

              newD.evol = [];

              newD.evol.push({id: getId(d.chain.species.url)});
              // If there is an evol
              evolFunc(d.chain.evolves_to, newD.evol);
              // If second evol. First line stops non evol entering the func
              if (!(d.chain.evolves_to.length === 0)) {
                if (d.chain.evolves_to && !(d.chain.evolves_to[0] === 0)) {
                  evolFunc(d.chain.evolves_to[0].evolves_to, newD.evol)
                }
              }
              client.get(tripleId, function(err, val) {
                var redisData = JSON.parse(val);
                redisData.evol = newD.evol;
                client.set(tripleId, JSON.stringify(redisData));
                console.log(tripleId + ' | Complete evol');
              });
            }
            else {
              console.log('FAILURE ' + tripleId + ' | err: ' + err + ' | res: ' + res.statusCode);
            }
          });
        }
        else {
          console.log('Failed on species req');
        }
      });
    }, 4000 * j);
  }
}

const types = [
  'bug',
  'dark',
  'dragon',
  'ice',
  'fairy',
  'fighting',
  'fire',
  'flying',
  'grass',
  'ghost',
  'ground',
  'electric',
  'normal',
  'poison',
  'psychic',
  'rock',
  'steel',
  'water',
];

function getTypeData() {
  for (let i = 1; i <= 18; i++) {
    setTimeout(function(){
      request('http://pokeapi.co/api/v2/type/' + i, function(err, res, body) {
        const data = JSON.parse(body);
        let not1 = [];
        let obj = {
          '2': data.damage_relations.double_damage_from.map(function(n){
            not1.push(n.name);
            return n.name;
          }),
          '0.5': data.damage_relations.half_damage_from.map(function(n){
            not1.push(n.name);
            return n.name;
          }),
          '0': data.damage_relations.no_damage_from.map(function(n){
            not1.push(n.name);
            return n.name;
          }),
        }
        obj['1'] = _.difference(types, not1);
        client.set(data.name, JSON.stringify(obj));
        console.log('Completed - ' + data.name);
      });
    }, 20 * i);
  }
}

function getMonData(i) {
  return new Promise((resolve, reject) => {
    client.get(i, function(err, val) {
      resolve(JSON.parse(val));
    });
  })
}

function getFirstType(mon) {
  return new Promise((resolve, reject) => {
    client.get(mon.types[0], function(err, val) {
      resolve(JSON.parse(val));
    });
  })
}

function getSecondType(mon) {
  return new Promise((resolve, reject) => {
    if (mon.types[1]) {
      client.get(mon.types[1], function(err, val) {
        resolve(JSON.parse(val));
      });
    } else {
      resolve();
    }
  })
}

function compareTypeDamage(monData, type1, type2) {
  if (!type2) {
    let dmgChart = {};
    Object.keys(type1).map(type1num => {
      type1[type1num].map(type1type => {
        dmgChart[type1type] = type1num;
      });
    })
    monData.dmgChart = dmgChart;
    client.set(monData.id, JSON.stringify(monData));
    console.log('1 Dmg chart complete - ' + monData.id);
  } else {
    let dmgChart = {};
    Object.keys(type2).map(type2num => {
      type2[type2num].map(type2type => {
        Object.keys(type1).map(type1num => {
          type1[type1num].map(type1type => {
            if(type1type === type2type) {
              const newMultiplier = parseFloat(type1num) * parseFloat(type2num);
              dmgChart[type1type] = newMultiplier;
            }
          });
        });
      });
    });
    monData.dmgChart = dmgChart;
    client.set(monData.id, JSON.stringify(monData));
    console.log('2 Dmg chart complete - ' + monData.id);
  }
}

const updateTypes = (num) => {
  getMonData(num)
    .then((monData) => {
      return getFirstType(monData)
      .then((typeData1) => {
        return getSecondType(monData)
        .then((typeData2) => {
          compareTypeDamage(monData, typeData1, typeData2);
        })
      })
    });
  }

const updateAllTypes = () => {
  for (let i = 719; i <= 721; i++) {
    let tripleId;
    if (i >= 100) {
      tripleId = i;
    }
    else if (i > 9 && i < 100) {
      tripleId = '0' + i;
    }
    else {
      tripleId = '00' + i;
    }
    updateTypes(tripleId);
  }
}

const getMove = (num) => {
  request('http://pokeapi.co/api/v2/move/' + num, function(err, res, body) {
    if (!err && res.statusCode == 200) {
      const data = JSON.parse(body);
      let obj = {};
      console.log(`${num} - started`);

      obj.name = data.name;
      obj.accuracy = data.accuracy;
      obj.type = data.type.name;
      obj.power = data.power;
      obj.category = data.damage_class.name;

      client.set(`_${obj.name}`, JSON.stringify(obj));
      console.log(`${num} - ${obj.name} - Completed`);
    } else {
      console.log('FAILURE' + ' | err: ' + err);
    }
  });
}

const getAllMoves = () => {
  for(let i = 1; i <= 621; i++) {
    setTimeout(() => {
      getMove(i);
    }, 3000 * i);
  }
}

const tripleId = (num) => {
  let tripleId;
  if (num >= 100) {
    tripleId = num;
  }
  else if (num > 9 && num < 100) {
    tripleId = '0' + num;
  }
  else {
    tripleId = '00' + num;
  }
  return tripleId;
}

const getMovesForMon = (num) => {
  request('http://pokeapi.co/api/v2/pokemon/' + num, function(err, res, body) {
    if (!err && res.statusCode == 200) {
      const data = JSON.parse(body);
      getMonData(tripleId(num))
      .then((monData) => {
        monData.moves = {
          level: [],
          egg: [],
          machine: [],
          tutor: [],
        };
        for(let i = 0; i < data.moves.length; i++) {
          for (let j = 0; j < data.moves[i].version_group_details.length; j++) {
            if (data.moves[i].version_group_details[j].version_group.name === 'omega-ruby-alpha-sapphire') {
              switch (data.moves[i].version_group_details[j].move_learn_method.name) {
                case 'level-up':
                  monData.moves.level.push({
                    name: data.moves[i].move.name,
                    level: data.moves[i].version_group_details[j].level_learned_at,
                  });
                  break;
                case 'egg':
                  monData.moves.egg.push({
                    name: data.moves[i].move.name,
                  });
                  break;
                case 'machine':
                  monData.moves.machine.push({
                    name: data.moves[i].move.name,
                  });
                  break;
                case 'tutor':
                  monData.moves.tutor.push({
                    name: data.moves[i].move.name,
                  });
                  break;
              }
            }
          }

        }
        setTimeout(function() {
          client.set(tripleId(num), JSON.stringify(monData));
          console.log(`${num} - Completed`);
        }, 5000);
      });
    } else {
      console.log(`FAILURE | err: ${err} - ${num}`);
    }
  });
}

const getMovesForAllMons = () => {
  for(let i = 1; i <= 721; i++) {
    setTimeout(() => {
      getMovesForMon(i);
    }, 5000 * i);
  }
};

const updateMachine = (num, machineType) => {
  let number = num.toString();
  if (num < 10) {
    number = '0' + num;
  }

  const machineName = tmHmLookup[machineType][number];
  const moveNameDashes = machineName.replace(' ', '-');
  const moveName = moveNameDashes.toLowerCase();
  client.get(`_${moveName}`, (err, val) => {
    let redisMove = JSON.parse(val);
    redisMove.machine = machineType + number;
    client.set(`_${moveName}`, JSON.stringify(redisMove));
    console.log(`${moveName} - completed`);
  });
}

const updateAllMachines = () => {
  for (let i = 1; i <= 100; i++) {
    updateMachine(i, 'tm');
  }
  for (let j = 1; j <= 7; j++) {
    updateMachine(j, 'hm');
  }
}

var promiseWhile = function(condition, action) {
    var resolver = Promise.defer();
    var loop = function() {
        if (!condition()) return resolver.resolve();
        return Promise.cast(action())
            .then(loop)
            .catch(resolver.reject);
    };
    process.nextTick(loop);
    return resolver.promise;
};

const getMovesOfCategory = (data, category) => {
  return new Promise ((resolve, reject) => {
      let arr = [];
      let sum = 0,
          stop = data.moves[category].length;

    promiseWhile(function() {
        return sum < stop;
    }, function() {
        return new Promise((resolve, reject) => {
          const moveName = data.moves[category][sum].name;
          const level = category === 'level' ? data.moves[category][sum].level : null;
          client.get(`_${moveName}`, function(err, val) {
            let moveObj = JSON.parse(val);
            moveObj.level = level;
            arr.push(moveObj);
            resolve();
          });
          sum++;
        })
    }).then(function() {
        resolve(arr);
    });
  });
}

const updateMoves = (num) => {
  client.get(tripleId(num), (err, val) => {
    const data = JSON.parse(val);
    let obj = {
      level: [],
      egg: [],
      tutor: [],
      machine: [],
    };

    getMovesOfCategory(data, 'level')
      .then((levelResult) => {
        obj.level = levelResult;
        getMovesOfCategory(data, 'egg')
          .then((eggResult) => {
            obj.egg = eggResult;
            getMovesOfCategory(data, 'tutor')
            .then((tutorResult) => {
              obj.tutor = tutorResult;
              getMovesOfCategory(data, 'machine')
              .then((machineResult) => {
                obj.machine = machineResult;
                data.moves = obj;
                client.set(tripleId(num), JSON.stringify(data));
                console.log(`${num} - completed`)
              });
            });
          });
      });
  });
}

const updateAllMoves = () => {
  for (let i = 1; i <= 721; i++) {
    updateMoves(i);
  }
}


// Add egg moves from the first mon in an
// evo line to the rest of the evo line
const updatePrevoEggMoves = (id) => {
  const num = tripleId(id);
  client.get(num, (err,val) => {
    const Val = JSON.parse(val);
    if (Val.evol.length !== 1 && Val.evol[0].id !== num) {
      client.get(Val.evol[0].id, (err2, val2) => {
        const Val2 = JSON.parse(val2);
        Val.moves.egg = Val2.moves.egg;
        client.set(num, JSON.stringify(Val));
      });
    }
  });
}

const updateAllPrevoEggMoves = () => {
  for (let i = 1; i <= 721; i++) {
    updatePrevoEggMoves(i);
  }
}

//updateAllPrevoEggMoves();
//updateAllMoves();
//updateAllMachines();
//getMovesForAllMons();
//updateAllTypes();
//getAllMoves();
//getTypeData();
//getOther();
//getData();

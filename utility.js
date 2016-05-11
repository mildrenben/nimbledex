"use strict";

const port = '6379';
const host = '127.0.0.1';

const redis = require("redis"),
      client = redis.createClient(port,host);

const request = require('request');

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
          }
          else if (d.id > 9 && d.id < 100) {
            newD.id = '0' + d.id;
          }
          else {
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
            newD.abilities.unshift(d.abilities[i].ability.name)
          }
          client.set(newD.id, JSON.stringify(newD));
          console.log(newD.id + '   complete');
        }
        else {
          console.log('FAILURE ' + i);
        }
      });
    }, 5000 * i);
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
    }, 5000 * j);
  }
}

//getData();
getOther();

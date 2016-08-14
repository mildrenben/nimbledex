"use strict"

const Promise = require('bluebird');

const Redis = {
  port: '6379',
  host: '127.0.0.1'
}

const redis = require("redis"),
      client = redis.createClient(Redis.port,Redis.host);

const lookup = require('../lookups/pokemonNumbers.js');

function renderData(res,data) {
  if (data === null || data === undefined) {
    res.render('404', '');
  } else {
    res.render('EntryPage', {
      name: data.name,
      types: data.types,
      id: data.id,
      evol: data.evol,
      ev: data.ev,
      abilities: data.abilities,
      captureRate: data.capture_rate,
      hatchCounter: data.hatch_counter,
      stats: data.stats,
      dmgChart: data.dmgChart,
      moves: data.moves,
     });
   }
};

function renderHomepage(res) {
  res.render('Homepage');
}

const promiseWhile = function(condition, action) {
    let resolver = Promise.defer();
    let loop = function() {
        if (!condition()) return resolver.resolve();
        return Promise.cast(action())
            .then(loop)
            .catch(resolver.reject);
    };
    process.nextTick(loop);
    return resolver.promise;
};

function renderAll(res) {
  return new Promise ((resolve, reject) => {
      let arr = [];
      let sum = 1,
          stop = 722;

    promiseWhile(function() {
        return sum < stop;
    }, function() {
        return new Promise((resolve, reject) => {
          let number;
          if (sum >= 100) {
            number = sum;
          } else if (sum > 9 && sum < 100) {
            number = '0' + sum;
          } else {
            number = '00' + sum;
          }
          client.get(number, function(err, val) {
            let data = JSON.parse(val);
            arr.push(data);
            resolve();
          });
          sum++;
        })
    }).then(function() {
      res.render('All', {arr});
    });
  });
  ;
}

function getDataForArrayOfMons (arr) {
  return new Promise ((resolve, reject) => {
    const monData = [];
    for (let i = 0; i < arr.length; i++) {
      client.get(arr[i], (err, val) => {
        const Val = JSON.parse(val);
        monData.push(Val);
        if (i === arr.length -1) {
          resolve(monData);
        }
      });
    }
  })
}

function renderAbility(res, ability) {
  client.get(`__${ability.toLowerCase()}`, (err, val) => {
    if (val === null) {
      res.render('404', '');
      return;
    }
    let data = JSON.parse(val);
    getDataForArrayOfMons(data.mons)
      .then((monData) => {
        data.monData = monData;
        res.render('AbilityPage',{data});
      });
  });
}

exports.index = function(req, res){
  let path = req.url.slice(1);

  if (req.url === '/') {
    renderHomepage(res);
    return;
  }

  if (path === 'all' || path === 'All') {
    renderAll(res);
    return;
  }

  if (path.toLowerCase().includes('ability/')) {
    const ability = path.substring(path.toLowerCase().indexOf('ability/') + 8, path.length);
    renderAbility(res, ability);
    return;
  }

  if (isNaN(path)) {
    path = path.charAt(0).toUpperCase() + path.slice(1);
    const lookupPath = lookup[path];
    client.get(lookupPath, function (err, val) {
      const data = JSON.parse(val);
      renderData(res,data);
    });
  }
  else {
    if (path >= 100 || path.length === 3) {
      path = path;
    }
    else if (path > 9 && path < 100 || path.length === 2) {
      path = '0' + path;
    }
    else {
      path = '00' + path;
    }
    client.get(path, function (err, val) {
      const data = JSON.parse(val);
      renderData(res,data);
    });
  }
};

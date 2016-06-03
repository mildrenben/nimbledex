"use strict"

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
  }
  else {
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

exports.index = function(req, res){
  let path = req.url.slice(1);

  if (req.url === '/') {
    renderHomepage(res);
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
    console.log(path);
    client.get(path, function (err, val) {
      const data = JSON.parse(val);
      renderData(res,data);
    });
  }
};

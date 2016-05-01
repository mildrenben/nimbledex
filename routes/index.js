var redis = {
  port: '6379',
  host: '127.0.0.1'
}

var redis = require("redis"),
    client = redis.createClient(redis.port,redis.host);

var lookup = require('../lookup.js');

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
     });
   }
};

exports.index = function(req, res){
  const path = req.url.slice(1);

  if (isNaN(path)) {
    const lookupPath = lookup[path];
    client.get(lookupPath, function (err, val) {
      const data = JSON.parse(val);
      renderData(res,data);
    });
  }
  else {
    client.get(path, function (err, val) {
      const data = JSON.parse(val);
      renderData(res,data);
    });
  }
};

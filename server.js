"use strict";

var port = '6379';
var host = '127.0.0.1';

var redis = require("redis"),
    client = redis.createClient(port,host);

var http = require('http');

const PORT = 8080;

//We need a function which handles requests and send response
function handleRequest(request, response){
    console.log(request.url.slice(1));
    var data;
    client.get(request.url.slice(1),function(err,val){
      data = JSON.parse(val);
      response.end('' + data);
      console.log(JSON.parse(val));
    });
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});

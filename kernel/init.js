var http = require("http");
var confs = require('../config');
var routing = require('./routing/routing');
var dumper = require('util');

var server = http.createServer(function (req, res) {
  res.write("It works!!");
  var router =  new routing.Routing(req);
  var 
  console.log(dumper.inspect(routing));
  res.end();
}).listen(confs.config.port,confs.config.host);

console.log('Starting server at '+confs.config.default_protocol+'://'+confs.config.server+':'+confs.config.port);
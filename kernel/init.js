var http = require("http");
var confs = require('../config');
var ModulesLoader = require('./modules_loader/loader');
var Routing = require('./routing/routing');
var ResponseDispatcher = require('./routing/response_dispatcher');
var util = require('util');

var server = http.createServer(function (req, res) {
  res.write("It works!!");
  var modules_loader = new ModulesLoader(confs.config.enabledModules);
  modules_loader.loadAll();
  var routing_params =  new Routing(req);
  var dispatcher = new ResponseDispatcher(req, res, routing_params);
  res.end();
}).listen(confs.config.port,confs.config.host);

console.log('Starting server at '+confs.config.default_protocol+'://'+confs.config.server+':'+confs.config.port);
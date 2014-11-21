var http = require('http');
var http_ip = '127.0.0.1';
var http_port = 8080;

var server = http.createServer(function (req, res) {

  require('./router').get(req, res);

});

server.listen(http_port,http_ip);
console.log("Running Osote v.0.1")
console.log('listening to http://' + http_ip + ':' + http_port)
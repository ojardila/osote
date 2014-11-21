require('../config');
console.log(config);
var server = http.createServer(function (req, res) {
  require('./router').get(req, res);
});

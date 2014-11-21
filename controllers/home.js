var base = require('./base-controller')
var util = require('util')

 

exports.get = function(req, res) {

 res.writeHead(200, {'Content-Type': 'text/html'});
 console.log(util.inspect(base))
 console.log(__dirname)
 //console.log("This is the result: "+ result);
 res.write(base.template.build(__dirname+"/../views/view.jade") );

 res.end();

}

var template = require('../views/template-main');

exports.get = function(req, res, path) {

 res.writeHead(404, {'Content-Type': 'text/html'});

 res.write(

 template.build("404 - Page not found","Oh noes, it's a 404","<p>This isn't the page you're looking for...</p> <p> And here your fucking path: "+ path + "</p>"));

 res.end();

}



var url=require('url');
var dumper = require('util');
var Routing = function(request)
{
  this.request = request;
  console.log(dumper.inspect(url.parse(this.request.url,true)));
  
}
exports.Routing = Routing;


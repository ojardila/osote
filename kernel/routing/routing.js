var url=require('url');

/* If we use module.exports instead of exports.something we will be able to instanciate the class only with the object name
 * check init.js to see how this one works
 * in this case var router = new Routing instead of var routing = new Routing.Routing();
 */
module.exports = function(request)
{
  this.request = request;
  this.partially_parsed_url = url.parse(this.request.url, true).pathname;
  var req_params = this.processRequestParams();
  return req_params;
}

module.exports.prototype.processRequestParams = function()
{
  var req_parts = this.partially_parsed_url.split("/");
  var module = req_parts[0];
  var action = req_parts[1];
  //get the rest of the parameters with an iterator, think about using flags (/ids:1:2:3:5)
  //for now I'm just returning the whole splitted param string
  return req_parts;
};


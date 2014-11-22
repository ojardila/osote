var ExampleController = function(request, response, params)
{
  this.request = request;
  this.response = response;
  this.params = params;
}

ExampleController.prototype.index = function()
{
  this.response.write("It works from andres_app, now please do it from jade! ");
}

exports.ExampleController = ExampleController;
exports.moduleName = 'andres_app';
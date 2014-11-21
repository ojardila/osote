var ExampleController = function(request, response)
{
  this.request = request;
}

controller.prototype.index = function()
{
  this.response.write("It works twice!");
}
exports.ExampleController = ExampleController;
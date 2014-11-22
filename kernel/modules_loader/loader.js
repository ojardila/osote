module.exports = function(enabledModules)
{
  this.enabledModules = enabledModules;
}

module.exports.prototype.loadAll = function()
{
  require('../../apps/example/controllers/example');
};
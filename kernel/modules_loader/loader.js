module.exports = function(enabledModules)
{
  this.enabledModules = enabledModules;
}

module.exports.prototype.loadAll = function()
{
	// Load all modules based upon the enabled modules array
  require('../../apps/example/controllers/example');
};
exports.build = function(template_file,vars){
   
   jade = require('jade')
   template = require('fs').readFileSync(template_file,'utf-8')
   jade_func =  jade.compile(template,{ filename: template_file, pretty: true })
   return jade_func()

} 


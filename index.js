var babel = require('babel-core');
var objectAssign = require('object-assign');

module.exports = {
  build: function(api, options) {
    api.addPreprocessor('.js', function(content, filename) {
      var result = babel.transform(content, objectAssign({
        filename: filename,
        compact: false
      }, options));

      return result.code;
    });
  },
 
  server: function(api, options){
    api.addPreprocessor('.js', function(content, filename, callback){
      content = String(content || '');

      try
      {
        var result = babel.transform(content, objectAssign({
          }, options));
  
        callback(null, result.code);
      }
      catch(e)
      {
        callback(e);
      }
    });
  }
};

require.config({
  paths: {
    'jquery': 'scripts/vendor/jquery/jquery',
    'underscore': 'scripts/vendor/underscore/underscore',
    'purebackbone': 'scripts/vendor/backbone/backbone.min',
    'bb-loc': 'scripts/vendor/backbone/backbone-localStorage',
    'backbone': 'scripts/vendor/backbone/backbone'
  },
  shim: {
  	underscore:
  	{
  	},
  	'bb-loc': ['purebackbone', 'underscore']
  }
});

require(['scripts/src/app'], function(App) {
  App.start();
});
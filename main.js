require.config({
  paths: {
    jquery: 'scripts/vendor/jquery/jquery',
    underscore: 'scripts/vendor/underscore/underscore',
    purebackbone: 'scripts/vendor/Backbone/purebackbone',
    jade: 'scripts/vendor/Jade/load_jade',
    backbone: 'scripts/vendor/Backbone/backbone',
    'backbone-localStorage': "scripts/vendor/backbone-localStorage/backbone-localStorage"
  },
  shim: {
    underscore:{
  		exports: "_"
  	},
  	purebackbone:{
  		deps: ['underscore', 'jquery'],
  		exports: 'Backbone'
  	},
  	'backbone-localStorage':["purebackbone", "underscore"]
  }
});

require(['scripts/src/app'], function(App) {
  App.initialize();
});
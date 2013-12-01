require.config({
  paths: {
    jquery: 'scripts/vendor/jquery/jquery',
    underscore: 'scripts/vendor/underscore/underscore',
    backbone: 'scripts/vendor/backbone/backbone',
    jade: 'scripts/vendor/Jade/load_jade',
    'backbone.localStorage': "scripts/vendor/Backbone/backbone-localStorage"
  },
  shim: {
  	underscore: {
  		exports: "_"
  	},
  	backbone: {
  		deps: ['underscore', 'jquery'],
  		exports: 'Backbone'
  	},
  	'backbone-localStorage': {
  		deps: ['backbone'],
  		exports: 'Backbone'
  	}
  }
});

require(['scripts/src/app'], function(App) {
  App.initialize();
});
require.config({
  paths: {
    'jquery': 'scripts/vendor/jquery/jquery',
    'underscore': 'scripts/vendor/underscore/underscore',
    'backbone': 'scripts/vendor/backbone/backbone',
  }
});

require(['scripts/src/app'], function(App) {
  App.start();
});
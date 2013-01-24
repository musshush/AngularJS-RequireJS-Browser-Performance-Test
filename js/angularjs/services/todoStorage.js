'use strict';

/**
 * Services that persists and retrieves TODOs from localStorage.
 */
define(['angularjs/app'], function (app) {

  var storage = [];

  app.factory( 'todoStorage', function() {
    var STORAGE_ID = 'todos-angularjs-requirejs';

    return {
      get: function() {
        return storage;
      },

      put: function( todos ) {
        storage = todos;
      }
    };
  });
});

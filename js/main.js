'use strict';

require.config({
    paths: {
        angular: 'http://ajax.googleapis.com/ajax/libs/angularjs/1.0.4/angular.min',
        jquery: 'http://code.jquery.com/jquery.min'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        jquery: {
            exports: '$'
        }
    }
});

require(['angular', 'jquery', 'angularjs/app', 'angularjs/controllers/todo', 'angularjs/directives/todoFocus', 'angularjs/directives/todoBlur'], function (angular, $) {
    angular.bootstrap($("#angular_todoapp"), ['angularTodo']);

    var ang_scope = angular.element($('#angular_todoapp')).scope();
    window.angular_clear = function(){
      ang_scope.reset();
      ang_scope.$digest();
    };
    window.angular_push = function(data){
      ang_scope.addTodo();
      ang_scope.$digest();
    };
});

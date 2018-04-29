console.log('client.js has been loaded');

var app = angular.module('TodoApp', []);

app.controller('TodoController', ['$http', function($http) {
    console.log('TodoController has been loaded');
    var self = this;

    self.newTask = {};
    self.taskList = [];

    
}]);
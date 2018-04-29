console.log('client.js has been loaded');

var app = angular.module('TodoApp', []);

app.controller('TodoController', ['$http', function ($http) {
    console.log('TodoController has been loaded');
    var self = this;

    self.newTask = {};
    self.taskList = [];

    self.completeTask = function(task) {
        task.completed = true;
        $http({
            method: 'PUT',
            url: '/task',
            data: task
        })
        .then(function(response) {
            console.log('PUT responded with: ', response);
            self.getAllTasks();
        })
        .catch(function(error){
            console.log('PUT responded with error: ', error);
        });
    }
    
    self.deleteTask = function(task) {
        $http({
            method: 'DELETE',
            url: '/task',
            params: task
        })
        .then(function(response) {
            console.log('DELETE responded with: ', response);
            self.getAllTasks();
        })
        .catch(function(error) {
            console.log('DELETE responded with error: ', error);
        })
    }

    self.getAllTasks = function () {
        $http({
            method: 'GET',
            url: '/task'
        })
            .then(function (response) {
                console.log('GET request succeeded');
                self.taskList = response.data;
            })
            .catch(function (error) {
                console.log('GET responded with error: ', error);
            });
    }

    self.postTask = function () {
        $http({
            method: 'POST',
            url: '/task',
            data: self.newTask
        })
            .then(function (response) {
                console.log('POST responded with: ', response);
                self.getAllTasks();
            })
            .catch(function (error) {
                console.log('POST responded with error: ', error);
            })
    }

    self.getAllTasks();
}]);
var app = angular.module("todo", []);
app.controller("todoCtrl", function($scope) {
    $scope.todoList = [{item:'Add A ToDo', status: false}]; 
    $scope.todoAdd = function() {
        $scope.todoList.push({item: $scope.todoInput, status: false});
        $scope.todoInput='';
    }; 
    $scope.todoClear = function() {
        $scope.todoList = [];
    };
});
var app = angular.module('myTodo', []);

app.controller('todo', ['$scope', function($scope){
    $scope.todoList = {};
    $scope.todoList.todos = [
        {
            text: 'drink coffee',
        completed: true
    },
        {
            text: 'eat breakfast',
        completed: false
    }
    ];


    $scope.addTodo = function(todo){
        var newTodo = {
            text: todo,
            completed:false
        }
        $scope.todoList.todos.push(newTodo)
        console.log($scope.todoList.todos, "scope.todoList.todos");
    };


}])

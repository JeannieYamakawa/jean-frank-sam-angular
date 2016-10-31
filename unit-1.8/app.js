var app = angular.module("unit8", []);


app.controller("myController", function($scope){
    $scope.view = {};
    $scope.view.number = 5;

    $scope.pickRandomNumber = function() {
    $scope.view.number = Math.floor(Math.random() * 10) + 1;
    }

    $scope.container = {};


    $scope.wordReverser = function(word){
        var reversed = word.split('').reverse().join('');
        $scope.container.myReversed = reversed;
        $scope.container.myWord = '';


    }
    $scope.pingPong = {};
    $scope.pingPong.player1score = 0;
    $scope.pingPong.player2score = 0;
    $scope.pingPong.totalPoints = 0;

    $scope.pingPong.player1serve = true;
    $scope.pingPong.player2serve = false;

    $scope.incrementPlayer1 = function(){
        $scope.pingPong.player1score++;
        $scope.pingPong.totalPoints++;

        if($scope.pingPong.totalPoints%2===0){
            $scope.pingPong.player1serve = !$scope.pingPong.player1serve ;
            $scope.pingPong.player2serve = !$scope.pingPong.player2serve ;
            $scope.pingPong.totalPoints = 0;
        }
    };

    $scope.incrementPlayer2 = function(){
        $scope.pingPong.player2score++;
        $scope.pingPong.totalPoints++;

        if($scope.pingPong.totalPoints%2===0){
            $scope.pingPong.player1serve = !$scope.pingPong.player1serve ;
            $scope.pingPong.player2serve = !$scope.pingPong.player2serve ;
            $scope.pingPong.totalPoints = 0
        }
    };


})

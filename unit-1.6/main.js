var app = angular.module("secondApp", []);


app.controller('newMadLib', function($scope){
    $scope.myValue = false;

    $scope.submitClicked = function(){
        $scope.myValue = true;
    }


    // $scope.allInputFields= {
    //     name: "whatever is typed in name box",
    //     adjective: 'whatever is typed in adjective box',
    //     plural1: "whatever is typed in that box"
    // };




    $scope.clearClicked = function(){
        $scope.allInputFields = {};
        $scope.myValue = false;
        
    }



})


//should include a button to generate the mad lib, and a button to start over (clear the fields and hide the generated mad lib).
//
// Start by adding an external JavaScript file, main.js, to create a module with a controller. Utilize ng-app and ng-controller to link both back to the HTML document. Then abstract out the all the logic from the HTML to the newly created controller.

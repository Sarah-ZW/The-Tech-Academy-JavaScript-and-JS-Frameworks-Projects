(function(){

    var app = angular.module("myApp", []);

    app.controller("appController", function($scope) {
       var quantity = 1;
       var price = 1;
       
        $scope.firstName = "John";
        $scope.lastName = "Doe";
        $scope.quantity = quantity;
        $scope.price = price;
        
    });


}());
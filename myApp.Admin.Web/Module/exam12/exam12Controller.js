var app = angular.module('myApp');

app.controller('SomeController', function ($scope) {

});

app.controller('SecondController', function ($scope) {

});

app.controller('HomeController', function ($scope) {

});
app.controller('LoginController', function ($scope, $routeParams, $location) {

    var loginName = $routeParams.name;
    var age = $routeParams.age;
    $scope.person = { "name": loginName, "age": age };
    var path = $location.path();

});

app.controller('exam12Controller', function ($scope) {

});

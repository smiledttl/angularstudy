'use strict';
var app = angular.module('myApp', ['ngRoute', 'ui.router', 'ngDialog', 'tableKillModule'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
        $urlRouterProvider.otherwise('/roomManage');
    })
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl: "view/home.html",
            controller: "HomeController"
        })
        .when("/login", {
             templateUrl: "view/login.html",
             controller: "LoginController"
         })
        .otherwise({
             redirectTo:"/"
         });
    }]);

app.run(['$rootScope', function ($rootScope) {
   


    $rootScope.$on('$stateChangeStart', function (event, current, previous) {

       $rootScope.rootShow = true;
       
    });
}]);



app.controller('MainCtrl', function ($scope, UserInformation) {
    $scope.message = "world";
    $scope.show = false;
    $scope.user = UserInformation;
    $scope.person = {name:"", greeted: false };
    $scope.developers = [{ "name": "mike", "age": 26, "salary": 2000 }, { "name": "bill", "age": 32, "salary": 5000 }, { "name": "sami", "age": 29, "salary": 4000 }];
    $scope.greet=function()
    {
        $scope.message = "hello ," + $scope.user.name;
    }
});

app.controller('SecondCtrl', function ($scope, UserInformation) {
    $scope.user = UserInformation;
    
 
});

app.controller('ParentController', function ($scope,$timeout) {
    $scope.pageUrl = "";
    $scope.email1 = "";
    $scope.signup = { name: '', username: '', email: '' };
    $scope.isDisabled = true;
    
    $timeout(function () {
        $scope.isDisabled = false;
        $scope.myHref = "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1893699162,13335324&fm=173&s=9903F9175912EECC56F405E203009032&w=400&h=287&img.JPEG";
    },5000)

    $scope.signupForm = function () {
        if ($scope.signup_form.$valid) {
            alert("name:" + $scope.signup.name + ";email" + $scope.signup.email + ";")
        } else {
            //$scope.signup_form.submitted = true;
        }
    }

    $scope.someModel={
        someProperty: "hello computer"
    };
    $scope.someAction = function () {
        $scope.someModel.someProperty = "hello human from Parent";
    };

});

app.controller('ChildController', function ($scope/*, UserInformation*/) {
    
    //$scope.sayHello = function () {
    //    $scope.person.name = "Ari lerner";
    //    $scope.user = UserInformation;
    //}

    $scope.childAction = function () {
        $scope.someModel.someProperty = "hello human from child";
    };

});

app.controller('PeopleController', function ($scope) {
    $scope.people = [
    { name: "Ari", city: "San Francisco" },
    { name: "Erik", city: "Seattle" },
    { name: "Erik2", city: "Seattle2" },
    { name: "Erik3", city: "Seattle3" },
    { name: "Ari2", city: "San Francisco2" },
    ];
});

app.controller('FormController', function ($scope) {
    $scope.fields = [
        { code: 'username',placeholder: 'Username', isRequired: true },
        { code: 'password', placeholder: 'Password', isRequired: true },
        { code: 'email', placeholder: 'Email (optional)', isRequired: false }
    ];
    $scope.optData = [{
        id: 10001,
        MainCategory: '男',
        ProductName: '水洗',
        ProductColor: '白'
    }, {
        id: 10002,
        MainCategory: '女',
        ProductName: '圓領短袖',
        ProductColor: '黃'
    }, {
        id: 10003,
        MainCategory: '女',
        ProductName: '圓領短袖',
        ProductColor: '黃'
    }];

    $scope.people = [
                    {
                        id: 0,
                        name: '张三',
                        interest: [
                        '爬山',
                        '游泳',
                        '旅游',
                        '美食'
                        ]
                    },
                    {
                        id: 1,
                        name: '李四',
                        interest: [
                            '音乐',
                            '美食',
                            'Coffee',
                            '看书'
                        ]
                    },
                    {
                        id: 2,
                        name: '王五',
                        interest: [
                            '音乐',
                            '电影',
                            '中国好声音',
                            '爸爸去哪了',
                            '非常静距离'
                        ]
                    },
                    {
                        id: 3,
                        name: '小白',
                        interest: [
                            '游泳',
                            '游戏',
                            '宅家里'
                        ]
                    }
    ];

    $scope.selectedOption = "";
    $scope.signupForm = function () {
        if ($scope.signup_form.$valid) {
            alert("name:" + $scope)
        } else {
            //$scope.signup_form.submitted = true;
        }
    }

});

app.controller('SomeController', function ($scope) {

});

app.controller('SecondController', function ($scope) {

});

app.controller('HomeController', function ($scope) {

});
app.controller('LoginController', function ($scope) {

});

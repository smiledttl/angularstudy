'use strict';
var version = "20170319";
angular.module('myApp').config(function ($stateProvider) {
    $stateProvider
        .state('examManage', {
            url: '/examManage',
            templateUrl: "./Module/main/managerment.html?v=" + version
        })
        //分页测试
        .state('examManage.pagingTestList', {
            url: '/pagingTestList',
            params: { entity: {} },
            templateUrl: "./Module/pagingTest/pagingTestList.html?v=" + version,
            controller: "pagingTestController"
        })
        //12章示例程序
        .state('examManage.exam12', {
            url: '/exam12',
            params: { entity: {} },
            templateUrl: "./Module/exam12/exam12.html?v=" + version,
            controller: "exam12Controller"
        })

});
'use strict';
var version = "20170319";
angular.module('myApp').config(function ($stateProvider) {
    $stateProvider
        .state('roomManage', {
            url: '/roomManage',
            templateUrl: "./Module/main/managerment.html?v=" + version
        })
        //公众账号管理
        .state('roomManage.pagingTestList', {
            url: '/pagingTestList',
            params: { entity: {} },
            templateUrl: "./Module/pagingTest/pagingTestList.html?v=" + version,
            controller: "pagingTestController"
        })
        

});
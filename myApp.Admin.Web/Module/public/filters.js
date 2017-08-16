﻿'use strict';
angular.module('myApp.filters', [])
    .filter('capitalize', function () {
        return function (input) {
            if (input) {
                return input[0].toUpperCase() + input.slice(1);
            }
        };

});
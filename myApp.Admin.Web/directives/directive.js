'use strict';
app.directive('focus', function () {
    return {
        link: function (scope,element,attrs) {
            element[0].focus();
        }
    }
});

app.directive('myHello', function () {
    return {
        restrict: "A",
        replace: true,
        scope: {
            myUrl: "=someAttr",
            myLinkText: "@"
        },

        template: "\
        <div><label>My Url Field:</label>\
            <input type=\"text\" ng-model=\"myUrl\" />\
            <a href=\"http://{{myUrl}}\">{{myLinkText}}</a>\
        </div>\
        ",
        
       
    }
});

app.directive('myDirective', function () {
    return {
        restrict: 'A',
        scope: {
            myProperty:"=myPro"
        },
        priority: 100,
        template: "\
            <input type=\"text\" ng-model=\"myProperty\" />                \
            <div>Inside myDirective, isolate: {{ myProperty }}</div>\
        "

    }
});

app.directive('myInheritScopeDirective', function () {
    return {
        restrict: 'A',
        template: 'Inside myDirective, Inherit scope: {{ myProperty }}',
        scope: true
    };
});

app.directive('slidBox', function () {
    return {
        restrict: 'EA',
        scope: {
            title: "@"
        },
        transclude:true,
        priority: 100,
        template: '<div class="sidebox">\
                        <div class="content">\
                            <h2 class="header">{{ title }}</h2>\
                            <span class="content" ng-transclude>\
                            </span>\
                        </div>\
                    </div>',
        controller: function ($scope,$element,$attrs,$transclude) {

        },

    }
});


app.directive('myLink', function () {
    return {
        restrict: 'EA',       
        transclude: true,
        controller: function ($scope, $element, $attrs, $transclude,$log) {
            $transclude(function (clone) {
                var a = angular.element("<a>");
                a.attr("href", clone.text());
                a.text(clone.text());
                $log.info("Created new a tag in link directive");
                $element.append(a);
            });
        },

    }
});

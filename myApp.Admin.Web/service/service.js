angular.module('myApp.services',[])
.factory('githubService', function ($http) {
    
    var gitHubUrl = "https://api.github.com";
    var githubUsername = "";
    var runUserRequest = function( path) {
        // 从使用JSONP调用Github API的$http服务中返回promise
        return $http({
            method: 'JSONP',
            url: gitHubUrl + '/users/' +
            githubUsername + '/' +
            path + '?callback=JSON_CALLBACK'
        });
    };
    // 返回带有一个events函数的服务对象
    return {
        events: function () { return runUserRequest( 'events'); },
        setUserName: function (username) { githubUsername = username;}
    };

})
.factory('xmlParser', function () {
    var x2js = new X2JS();
    return {
        xml2json: x2js.xml2json,
        json2xml: x2js.json2xml_str
    };
});


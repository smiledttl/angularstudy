app.controller('pagingTestController', function ($scope, $http) {
    $scope.title = '';
    $scope.tasks = [];
    $scope.addItem = function () {
        $scope.tasks.push($scope.task);
    }

    $scope.getlist = function () {
        //debugger;
        $http.get('http://localhost:8010/Album/GetList?title=').success(function (data, status, headers, config) {
            // data contains the response  
            // status is the HTTP status  
            // headers is the header getter function  
            // config is the object that was used to create the HTTP request
            //debugger;
            //alert(data);
            $scope.tasks = data;
        }).error(function (data, status, headers, config) {
            alert("data:" + data);
        });
    }

    function click(item) {
        alert(item.id);
    }

    function change(item, elId) {
        $("#" + elId.$id).html("<span style='color:red;'>" + item.AlbumId + "</span>");
    }
 
    $scope.map = [
        { key: "AlbumId", val: "专辑编号", show: true, action: { key: "convert", convert: change, operation: detail } },
        { key: "Title", val: "专辑名称", show: true, action: { key: "exist", operation: detail } },
        { key: "Genre", val: "流派", show: true, action: { key: "exist", operation: detail } },
        { key: "Artist", val: "歌手", show: true },
        { key: "Price", val: "价格", show: true }    

    ];

    //function change(item, elId) {
    //    $("#" + elId.$id).html("<span style='color:red;'>" + item.userid.val + "</span>");
    //}


    //$scope.map = [
    //       { key: "createTime", val: "开始时间", show: true },
    //       { key: "t_shopName", val: "描述", show: true },
    //       { key: "name", val: "名称", show: true, action: { key: "exist", operation: detail } },          
    //       { key: "updateTime", val: "结束时间", show: true },
    //       { key: "id", val: "id", show: true },
    //       { key: "email", val: "email", show: true, action: { key: "exist", operation: detail } },
    //       { key: "userid", val: "userid", show: true, action: { key: "convert", convert: change, operation: detail } }
    //];

    $scope.pagingOpton = {
        size: 5,
        index: 1,
        SizeKey: "pagesize",
        IndexKey: "pagenum"
    };

    $scope.analysis = function (data) {
        var tmp = { data: [], totalCount: 0, totalPage: -1 };
        tmp.data = data.data.datas;
        tmp.totalCount = data.data.totalCount;
        return tmp;
    }

    $scope.getSelectedItems = function (items) {
        //debugger;
    }

    $scope.getUrl = function () {
        //return "directives/Publicc/tableList/data.json";
        return "/Album/GetList?title="+$scope.title;
    }

    $scope.search = function () {
        $scope.$broadcast("doSearch");
        //debugger
        //$scope.search01();
    }

    function detail(item) {
        alert("action detail" + item.AlbumId);
    }
    function price(item) {
        alert("price " + item.AlbumId);
    }

    $scope.renderCb = function () {
        console.log("列表渲染完毕后执行的callback!");
    }

    $scope.detail = function (item) {
        alert("action detail" + item.AlbumId);
    }

    $scope.actionOne = function (item) {
        alert("action one " + item.AlbumId);
    }

    $scope.actionTwo = function (item) {
        alert("action two " + item.AlbumId);
    }

    $scope.actionThree = function (item) {
        alert("action three " + item.AlbumId);
    }
    $scope.actions = [
        { key: "edit", val: "修改", action: $scope.actionOne },
        { key: "detail", val: "详情", action: $scope.actionTwo },
        { key: "delete", val: "删除", action: $scope.actionThree },
        { key: "other", val: "other", action: $scope.actionThree }
    ];
});
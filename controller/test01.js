/**
 * Created by Administrator on 2018/11/5.
 */

var myApp = angular.module("myApp",[]);
myApp.controller("myCtrl", function($scope, $parse){
    $scope.name = "ddd";
    //手动解析表达式$parse
    $scope.$watch("name", function(newValue, oldValue, scope){
        if(newValue !== oldValue){
            //用该表达式设置parseFun
            var parseFun = $parse("name");
            //获取经过解析后表达式的值
            $scope.parseValue = parseFun(scope);
        }
    });
});
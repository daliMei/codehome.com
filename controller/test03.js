/**
 * Created by Administrator on 2018/11/5.
 */
//插值字符串
/*
使用到的服务$interpolate(text, mustHaveExpress, trustedContext)
text: 必选参数，一个包含字符插值标记的字符串
nustHaveExpress: boolean类型 非必选参数， true：当传入的字符串不含有表达式时返回null
trustedContext: 字符串 对已经进行过字符串插值操作的字符串通过$sec.getTrusted()方法进行严格的上下文转义

*/
var myApp = angular.module("myApp",[]);
myApp.config(["$interpolateProvider" , function($interpolateProvider){
    $interpolateProvider.startSymbol("__");
    $interpolateProvider.endSymbol("__");
}]);
myApp.factory("emailParse", ["$interpolate", function($interpolate){
    return {
        parse: function(text, context){
            var tempalte = $interpolate(text);
            return tempalte(context);
        }
    }
}]);
myApp.controller("myCtrl", ["$scope","emailParse", function($scope, emailParse){
    //插值字符串
    $scope.$watch("emailbody", function(body){
        if(body){
            $scope.previewText = emailParse.parse(body, {to: $scope.to});
        }
    });
}]);
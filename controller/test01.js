/**
 * Created by Administrator on 2018/11/5.
 */

var myApp = angular.module("myApp",[]);
myApp.controller("myCtrl", function($scope, $parse){
    $scope.name = "ddd";
    //�ֶ��������ʽ$parse
    $scope.$watch("name", function(newValue, oldValue, scope){
        if(newValue !== oldValue){
            //�øñ��ʽ����parseFun
            var parseFun = $parse("name");
            //��ȡ������������ʽ��ֵ
            $scope.parseValue = parseFun(scope);
        }
    });
});
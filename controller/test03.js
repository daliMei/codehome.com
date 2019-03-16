/**
 * Created by Administrator on 2018/11/5.
 */
//��ֵ�ַ���
/*
ʹ�õ��ķ���$interpolate(text, mustHaveExpress, trustedContext)
text: ��ѡ������һ�������ַ���ֵ��ǵ��ַ���
nustHaveExpress: boolean���� �Ǳ�ѡ������ true����������ַ��������б��ʽʱ����null
trustedContext: �ַ��� ���Ѿ����й��ַ�����ֵ�������ַ���ͨ��$sec.getTrusted()���������ϸ��������ת��

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
    //��ֵ�ַ���
    $scope.$watch("emailbody", function(body){
        if(body){
            $scope.previewText = emailParse.parse(body, {to: $scope.to});
        }
    });
}]);
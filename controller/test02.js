/**
 * Created by Administrator on 2018/11/6.
 */
require(["underscore", "jquery"], function(_, $){
    console.log(_);
    console.log($);
    $(function(){
        _.each([1,2,3], alert);
    });
});
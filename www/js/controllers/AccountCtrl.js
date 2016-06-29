/**
 * Created by Administrator on 2016/6/28.
 */
define([], function () {
    'use strict';
    function ctrl($scope) {
        $scope.setting = {
            enableFriends: true
        };
    };
    ctrl.$inject=['$scope'];
    return ctrl;
});
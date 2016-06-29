/**
 * Created by Administrator on 2016/6/28.
 */
define([],function () {
    'use strict';
    function ctrl($scope, $stateParams, Charts) {
        $scope.chat = Charts.get($stateParams.chatId);
    };
    ctrl.$inject(['$scope', '$stateParams', 'Chats']);
    return ctrl;
});
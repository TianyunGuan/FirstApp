/**
 * Created by Administrator on 2016/6/28.
 */
//.controller('DashCtrl', function($scope,$ionicPopover,$timeout) {
//  $scope.popover = $ionicPopover.fromTemplateUrl('my-popover.html', {
//    scope: $scope
//  });
//
//  // .fromTemplateUrl() ����
//  $ionicPopover.fromTemplateUrl('my-popover.html', {
//    scope: $scope
//  }).then(function(popover) {
//    $scope.popover = popover;
//  });
//
//
//  $scope.openPopover = function($event) {
//    $scope.popover.show($event);
//  };
//  $scope.closePopover = function() {
//    $scope.popover.hide();
//  };
//  // ���������
//  $scope.$on('$destroy', function() {
//    $scope.popover.remove();
//  });
//  // �����ظ������ִ��
//  $scope.$on('popover.hidden', function() {
//    // ִ�д���
//  });
//  // �Ƴ��������ִ��
//  $scope.$on('popover.removed', function() {
//    // ִ�д���
//  });
//})
//�޸ĺ���ļ�����
define([], function () {
    'use strict';
    function ctrl($scope,$ionicPopover,$timeout) {
        $scope.popover = $ionicPopover.fromTemplateUrl('my-popover.html', {
            scope: $scope
        });

        // .fromTemplateUrl() ����
        $ionicPopover.fromTemplateUrl('my-popover.html', {
            scope: $scope
        }).then(function(popover) {
            $scope.popover = popover;
        });


        $scope.openPopover = function($event) {
            $scope.popover.show($event);
        };
        $scope.closePopover = function() {
            $scope.popover.hide();
        };
        // ���������
        $scope.$on('$destroy', function() {
            $scope.popover.remove();
        });
        // �����ظ������ִ��
        $scope.$on('popover.hidden', function() {
            // ִ�д���
        });
        // �Ƴ��������ִ��
        $scope.$on('popover.removed', function() {
            // ִ�д���
        });
    }
    ctrl.$inject = ['$scope','$ionicPopover','$timeout'];
    return ctrl;
});

'use strict';
require('./_scorecardDash.scss');

const angular = require('angular');
const appShooter = angular.module('appShooter');
appShooter.directive('appScorecardDash', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./scorecardDash.html'),
    controller: 'ScorecardController',
    controllerAs: 'scorecardCtrl',
    bindToController: true,
    scope: {
      compToDisplay: '=',
    }
  };
});

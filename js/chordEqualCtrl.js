'use strict';

(function () {
    angular.module("chordEqualApp").controller("chordEqualCtrl", function($scope) {
        $scope.rootNote = "C";
        $scope.alteration = "";
        $scope.chordType = "m7";
        $scope.equalChord = "Eb";
    });
})();
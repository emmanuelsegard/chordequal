'use strict';

(function () {
    angular.module("chordEqualApp").controller("chordEqualCtrl", function($scope) {
        var semitones = ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"];

        $scope.notes = ["C", "D", "E", "F", "G", "A", "B"];
        $scope.alterations = ["","b","#"]
        $scope.chordTypes= ["m7","Maj7","m7/9", "Maj7/9"];
        $scope.rootNote = "C";
        $scope.alteration = "";
        $scope.chordType = "m7";
        $scope.equalChord = "Eb";

        Number.prototype.mod = function(n) {
            var m = (( this % n) + n) % n;
            return m < 0 ? m + Math.abs(n) : m;
        };

        $scope.onChordChanged = function () {
            var root = $scope.rootNote;
            var alt = $scope.alteration;
            var type = $scope.chordType;
            var semitone = (alt === "b") ?
                semitones[parseInt(semitones.indexOf(root) - 1).mod(11)] : (alt === "#") ?
                    semitones[parseInt(semitones.indexOf(root) + 1).mod(11)] : root;

            switch (type) {
                case "m7":
                    $scope.equalChord = semitones[parseInt(semitones.indexOf(semitone) + 3).mod(11)];
                    break;
                case "m7/9":
                    $scope.equalChord = semitones[parseInt(semitones.indexOf(semitone) + 3).mod(11)] + "Maj7";
                    break;
                case "Maj7":
                    $scope.equalChord = semitones[parseInt(semitones.indexOf(semitone) + 4).mod(11)] + "m";
                    break;
                case "Maj7/9":
                    $scope.equalChord = semitones[parseInt(semitones.indexOf(semitone) + 4).mod(11)] + "m7";
                    break;
                default:
                    $scope.equalChord = root + alt + type;
                    break;
            }
        }
    });
})();
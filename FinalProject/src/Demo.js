/* global describe beforeEach expect it */
(function tester(global) {
    var Demo = function () {
        if (!this instanceof Demo) {
            return new Demo();
        }
        var makeBoolean = function makeBoolean(bool) {

            },
            roundDown = function roundDown(number) {

            },
            getNameToUpper = function (first, last) {

            },
            getArray = function getArray(arr, item, offset) {


            },
            getFizzBuzz = function getFizzBuzz(array) {

            },
            sortByLengthAndAlphabet = function (arr) {

            },
            objectProperty;

        /**
         * Insert return objects here
         */
        return {
            makeBoolean: makeBoolean,
            roundDown: roundDown,
            getNameToUpper: getNameToUpper,
            objectProperty: objectProperty,
            getArray: getArray,
            getFizzBuzz: getFizzBuzz,
            sortByLengthAndAlphabet: sortByLengthAndAlphabet
        };
    };
    global.Demo = Demo;

}(this));

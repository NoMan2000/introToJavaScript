/* global describe beforeEach expect it */
(function tester(global) {
    var Demo = function () {
        if (!this instanceof Demo) {
            return new Demo();
        }
        var makeBoolean = function makeBoolean(bool) {
            return Boolean(bool);
        },
            roundDown = function roundDown(number) {
                return Math.floor(Number(number));
            },
            getNameToUpper = function (first, last) {
                var firstCharUpper = first[0].toUpperCase(),
                    lastCharUpper = last[0].toUpperCase(),
                    firstName = firstCharUpper + first.substr(1),
                    lastName = lastCharUpper + last.substr(1);
                return firstName + ' ' + lastName;
            },
            objectProperty = 'demo';

        /**
         * Insert return objects here
         */
        return {
            makeBoolean: makeBoolean,
            roundDown: roundDown,
            getNameToUpper: getNameToUpper,
            objectProperty: objectProperty
        };
    };
    global.Demo = Demo;

}(this));

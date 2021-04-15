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
            getArray = function getArray(arr, item, offset) {
                offset = offset || 0;
                var failCode = -1;
                if (!Array.isArray(arr)) {
                    return new Error("Object not array");
                }
                var inArray = arr.indexOf(item, offset);
                if (inArray !== failCode) {
                    return item;
                }
                return new Error("Item does not exist in Array");

            },
            getFizzBuzz = function getFizzBuzz(array) {
                var obj = {},
                    getFizz = function getFizz(value) {
                        return value % 3 === 0;
                    },
                    getBuzz = function getBuzz(value) {
                        return value % 5 === 0;
                    },
                    getFizzAndBuzz = function getFizzAndBuzz(value) {
                        return getFizz(value) && getBuzz(value);
                    };

                obj.fizz = array.filter(function (value) {
                    return getFizz(value) && !getFizzAndBuzz(value);
                });
                obj.buzz = array.filter(function (value) {
                    return getBuzz(value) && !getFizzAndBuzz(value);
                });
                obj.fizzBuzz = array.filter(function (value) {
                    return getFizzAndBuzz(value);
                });
                obj.numbers = array.filter(function (value) {
                    return !getBuzz(value) && !getFizz(value);
                });
                return obj;
            },
            sortByLengthAndAlphabet = function (arr) {
                return arr.sort(function (a, b) {
                    return a.length - b.length || // sort by length, if equal then
                        a.localeCompare(b);    // sort by dictionary order, localeCompare for special characters
                });
            },
            objectProperty = 'demo';

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

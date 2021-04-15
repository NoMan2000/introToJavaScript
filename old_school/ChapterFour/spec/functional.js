/* global describe beforeEach expect it */
describe("Functional Programming Basics", function () {
    it("Can use map to transform every item in an array", function () {
        var newArr = [1, 2, 3].map(function (value) {
            return value * 2;
        });
        expect(newArr).toEqual([2, 4, 6]);
    });

    it("Can use filter to remove portions of an array that do not match", function () {
        // This will remove all odd members of an array
        var newArr = [1, 2, 3, 4].filter(function (value) {
            return value % 2 === 0;
        });
        expect(newArr).toEqual([2, 4]);
    });

    it("Can use the every method to see if every element passes a test", function () {
        var areAllEven = [2, 4, 6].every(function (value) {
            return value % 2 === 0;
        });
        expect(areAllEven).toBe(true);
    });

    it("Can use the some method to see if any element passes a test", function () {
        var isAtLeastOneEven = [1, 2, 3].some(function (value) {
            return value % 2 === 0;
        });
        expect(isAtLeastOneEven).toBe(true);
    });

    it("Can use the reduce function to turn an array into a scalar type", function () {
        var startValue = 0,
            addedElements = [1, 2, 3, 5, 6, 9].reduce(function (previousValue, currentValue) {
                return previousValue + currentValue;
            }, startValue);
        expect(addedElements).toBe(26);
    });

    it("Can combine all the different methods to chain together", function () {
        var result = [1, 2, 5, 3, 5, 10, 22, 55, 24, 22, 11, 9808, 21].filter(function removeOddValues(value) {
            return value % 2 === 0;
        }).map(function multiplyValuesByTwo(value) {
            return value * 2;
        }).reduce(function addAllValues(previousValue, currentValue) {
            return previousValue + currentValue;
        }, 0);
        expect(result).toBe(19776);
    });
});

/* global describe beforeEach expect it */
describe("The final project is to rewrite the Demo file so that all of these tests pass", function () {
    var demo,
        createRange = function createRange(range) {
            return Array.apply(null, {length: range}).map(Number.call, Number).map(function (value) {
                return value + 1;
            });
        };
    /**
     * This is used to ensure that after each test, the demo object is reset to new so a change in one place
     * does not affect a test in another.
     */
    beforeEach(function getNewDemo() {
        demo = new Demo();
    });

    it("Can create a property", function () {
        expect(demo.objectProperty).toEqual('demo');
    });
    /**
     * Booleans
     */
    it("Can create a function which returns true or false based on the value passed in", function () {
        expect(demo.makeBoolean(true)).toEqual(true);
        expect(demo.makeBoolean(false)).toEqual(false);
    });
    /**
     * Numbers and math
     */
    it("Can round down the result of a number", function () {
        var a = 3.9999;
        expect(demo.roundDown(a)).toBe(3);
    });
    /**
     * Objects and methods
     */
    it("Can create a method that will return the first and last name to title case, the first and last name's first character uppercased", function () {
        var first = "jimmy",
            last = "jones";
        expect(demo.getNameToUpper(first, last)).toEqual('Jimmy Jones');
    });
    /**
     * Array
     */
    it("Can get an element from an array and return an error if not found", function () {
        var arr = ['one', 'two', 'three', 'one'];
        expect(demo.getArray(arr, 'one')).toBe('one');
        expect(demo.getArray(arr, 'four') instanceof Error).toBe(true);
        expect(demo.getArray('notArray', 'one') instanceof Error).toBe(true);
    });
    /**
     * loops
     */
    it("Can solve fizz buzz.  For multiples of 3, get 'Fizz' instead of the number. " +
        "For multiples of 5, get 'Buzz' instead of the number " +
        "For multiples of 3 and 5, get 'FizzBuzz' instead of the number " +
        "return an object with numbers, fizz, buzz, and fizzBuzz as properties", function () {
        var list = createRange(100); // 1 - 100
        var returnedNumbers = demo.getFizzBuzz(list);
        expect(returnedNumbers.buzz).toEqual([5, 10, 20, 25, 35, 40, 50, 55, 65, 70, 80, 85, 95, 100]);
        expect(returnedNumbers.fizz).toEqual([3, 6, 9, 12, 18, 21, 24, 27, 33, 36, 39, 42, 48, 51, 54, 57, 63, 66, 69, 72, 78, 81, 84, 87, 93, 96, 99]);
        expect(returnedNumbers.numbers).toEqual([1, 2, 4, 7, 8, 11, 13, 14, 16, 17, 19, 22, 23, 26, 28, 29, 31, 32, 34, 37, 38, 41, 43, 44, 46, 47, 49, 52, 53, 56, 58, 59, 61, 62, 64, 67, 68, 71, 73, 74, 76, 77, 79, 82, 83, 86, 88, 89, 91, 92, 94, 97, 98]);
        expect(returnedNumbers.fizzBuzz).toEqual([15, 30, 45, 60, 75, 90]);
    });
    /**
     * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
     * See the JavaScript Array sort method
     */
    it("Can sort an array of strings from shortest to longest and return the ", function () {
        var arr = ['a', 'c', 'b', 'da', 'mom', 'dad', 'some', 'none','every', 'other'];
        expect(demo.sortByLengthAndAlphabet(arr)).toEqual(["a", "b", "c", "da", "dad", "mom", "none", "some", "every", "other"]);
    });
});

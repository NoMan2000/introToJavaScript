/* global describe beforeEach expect it */
describe("The final project is to rewrite the Demo file so that all of these tests pass", function () {
    var demo;
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

    it("Can ", function () {

    });

});

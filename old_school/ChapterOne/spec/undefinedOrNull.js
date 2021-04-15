/* global describe beforeEach expect it */
describe("Show how undefined or null is used", function () {

    it("Can be weakly compare undefined to null", function () {
        expect(null == undefined).toBe(true)
    });

    it("Cannot use strict equality comparison", function () {
        expect(null === undefined).not.toBe(true);
    });

});

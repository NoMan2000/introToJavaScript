/* global describe beforeEach expect it */
describe("Reading errors is a critical programming skill", function () {
    it("Can create an error", function () {
        var x = new Error("If you do not throw an error, it does nothing");
        expect(x).toEqual(jasmine.any(Error));
    });

    it("Can throw anything as an error, but will not contain useful information", function () {
        try {
            throw "This will throw an error";
        } catch (err) {
            expect(err).toEqual(jasmine.any(String));
        }
    });

    it("Can throw a more useful error message", function () {
        var errorThrower = function () {
            throw new Error("This function only throws errors");
        };
        expect(errorThrower).toThrow();
    });

    it("Can use a finally block to always perform an action", function () {
        var res;
        try {
            throw new Error("We throw an error");
        } catch (ignore) {
            // ignore isn't necessary, but if you plan on not doing anything with an error
            // This lets yourself and other programmers know that.
        } finally {
            res = 1;
        }
        expect(res).toBe(1);
        try {

        } catch (ignore) {

        } finally {
            res = 2;
        }
        expect(res).toBe(2);
    });

    it("Using finally in a function can have an unintended side effect", function () {
        var finallyFunc = function (value) {
            try { } catch (ignore) {} finally {
                return value;
            }
            return 1; // This is unreachable.
        };
        expect(finallyFunc(2)).toBe(2);
    });

});

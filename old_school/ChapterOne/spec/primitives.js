/* global describe beforeEach expect it */
describe("Primitives vs Complex DataTypes.", function() {

    describe("JavaScript has no true primitives, but it has weird quasi-primitives", function () {
        it("Can use typeof to determine if something is primitives.  Kind of.", function () {
            var primString = "This is a primitive string",
                primNumber = 1,
                primBoolean = true,
                primNull = null,
                primUndefined = undefined;
            expect(typeof primString).toEqual("string");
            expect(typeof primNumber).toEqual("number");
            expect(typeof primBoolean).toEqual("boolean");
            expect(typeof primNull).toEqual('object'); // This is a bug according to Brendan Eich, the inventor of JavaScript.
            expect(typeof primUndefined).toEqual("undefined");
        });

        it("Cannot determine type with typeof when the Constructor version is used", function () {
            var objString = new String("This is a String Object"),
                objNumber = new Number(1),
                objBoolean = new Boolean(true);
            expect(typeof objString).toEqual("object");
            expect(typeof objNumber).toEqual("object");
            expect(typeof objBoolean).toEqual("object");
        });

        it("Cannot compare between primitives and the Constructor version with strict equality checks", function () {
            var primString = "This is a string",
                primNumber = 1,
                primBoolean = true,
                objString = new String("This is a string"),
                objNumber = new Number(1),
                objBoolean = new Boolean(true);

            expect(primString).not.toBe(objString);
            expect(primNumber).not.toBe(objNumber);
            expect(primBoolean).not.toBe(objBoolean);
        });

    });
});

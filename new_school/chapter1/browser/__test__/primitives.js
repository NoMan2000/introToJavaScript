/* global describe beforeEach expect it */
(function (g) {
    "use strict";

    var run = g.globalRunner.run;
    var describe = g.globalRunner.describe;
    var it = g.globalRunner.it;
    var assert = g.globalRunner.assert;

    run('primitives', function () {
        describe("Primitives vs Complex DataTypes.", function() {

            describe("JavaScript has no true primitives, but it has weird quasi-primitives", function () {
                it("Can use typeof to determine if something is primitives.  Kind of.", function () {
                    var primString = "This is a primitive string",
                        primNumber = 1,
                        primBoolean = true,
                        primNull = null,
                        primUndefined = undefined;
                    assert.strictEqual(typeof primString, "string");
                    assert.strictEqual(typeof primNumber, "number");
                    assert.strictEqual(typeof primBoolean, "boolean");
                    assert.strictEqual(typeof primNull, 'object'); // This is a bug according to Brendan Eich, the inventor of JavaScript.
                    assert.strictEqual(typeof primUndefined, "undefined");
                });

                it("Cannot determine type with typeof when the Constructor version is used", function () {
                    var objString = new String("This is a String Object"),
                        objNumber = new Number(1),
                        objBoolean = new Boolean(true);
                    assert.strictEqual(typeof objString, "object");
                    assert.strictEqual(typeof objNumber, "object");
                    assert.strictEqual(typeof objBoolean, "object");
                });

                it("Cannot compare between primitives and the Constructor version with strict equality checks", function () {
                    var primString = "This is a string",
                        primNumber = 1,
                        primBoolean = true,
                        objString = new String("This is a string"),
                        objNumber = new Number(1),
                        objBoolean = new Boolean(true);

                    assert.notStrictEqual(primString, objString);
                    assert.notStrictEqual(primNumber, objNumber);
                    assert.notStrictEqual(primBoolean, objBoolean);
                });
            });
        });
    });
})(globalThis);

/* global describe beforeEach expect it */
/**
 * This is old school javaScript.  The top portion is for JSLint, which used to be the
 * stanadard for JavaScript linting.  Linting is a set of static checkers that look at your
 * code and deliver warnings about certain things that are considered bad practices.
 */

var assert = require('assert');
var common = require('./common');

var run = common.run;
var describe = common.describe;
var it = common.it;

var getIsMain = function () {
    return (
        typeof module !== 'undefined' && !module.parent
    ) || (
        typeof require !== 'undefined' && require.main === module
    );
};

run(getIsMain(), function () {
    describe("Show how JavaScript handles Booleans", function () {
        var x;
        describe("Truthy is a value that can be coerced into being true, but fails a strict equality check", function () {
            /**
             * Generally, I prefer explicit conversion with Boolean, Number, String, etc.
             */
            it("Shows how explicit type-coercion works converting to true", function () {
                var a = Boolean(true),
                    b = Boolean(1),
                    c = Boolean("string"),
                    d = Boolean({}),
                    e = Boolean(function () {
                    }),
                    f = Boolean([]);
                assert.strictEqual(a, true);
                assert.strictEqual(b, true);
                assert.strictEqual(c, true);
                assert.strictEqual(d, true);
                assert.strictEqual(e, true);
                assert.strictEqual(f, true);
            });

            it("Shows alternative syntaxes for type coercion", function () {
                var a = !!1,
                    b = !!{};
                assert.strictEqual(a, true);
                assert.strictEqual(b, true);
            });

            /**
             * The difference between strict equals and ok is one tests with the triple equals `===`
             * and one tests with the loose equals `==`.  The difference is strict equals checks the
             * type and the value, while loose values only checks the value.
             */

            it("Thinks true is coercible to true", function () {
                x = true;
                assert.ok(x);
            });

            it("Thinks one is coercible", function () {
                x = 1;
                assert.ok(x);
            });

            it("Thinks a non-empty string is truthy", function () {
                x = 'a string';
                assert.ok(x);
            });

            it("Thinks an object is truthy", function () {
                x = {};
                assert.ok(x);
            });

            it("Thinks a function is truthy", function () {
                x = function () {
                };
                assert.ok(x);
            });

            it("Thinks an empty array is truthy", function () {
                x = [];
                assert.ok(x);
            });
        });

        describe("Falsy is a value that can be coerced into being false, but will fail a strict equality check", function () {

            it("Thinks that false equals false", function () {
                x = false;
                assert.strictEqual(x, false);
            });

            it("Thinks that 0 is falsy", function () {
                x = 0;
                assert.ok(!x);
            });

            it("Thinks that an empty string is falsy", function () {
                x = '';
                assert.ok(!x);
            });

        });
    });


});

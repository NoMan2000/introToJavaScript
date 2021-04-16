/* global describe beforeEach expect it */
(function (g) {
    "use strict";

    var run = g.globalRunner.run;
    var describe = g.globalRunner.describe;
    var it = g.globalRunner.it;
    var assert = g.globalRunner.assert;

    run("variables", function () {
        describe("A description of allowed and then good variable names.", function() {

            describe("This is a basic demonstration of creating variables", function() {
                it("A very basic variable", function createBasicObject() {
                    var basic = '';
                    assert.ok(basic != null);
                });
                /**
                 * This test cannot actually be demonstrated.  SyntaxErrors are compile-time errors.
                 * Only run-time errors can be caught in a try-catch block.  To fix this,
                 * running eval will turn compile-time code into run-time code.  eval can cause security problems and
                 * is computationally expensive, so only in rare cases should it be used in production code.
                 */
                it("Cannot create a variable starting with a number.", function() {
                    // var 1a;
                    assert.throws(
                        function() {
                            eval("var 1a = 1;");
                        });
                });

                it("Can create a variable name with a number anywhere other than the beginning", function() {
                    var a1 = 'hey';
                    assert.ok(a1);
                });

                /**
                 * $ and _ are special characters that are allowed.  $ is most often used with jQuery, while the
                 * _ is a notation that means you are using a private variable.
                 */
                it("Can create a variable with $ or _ as valid names", function() {
                    var _a = 'a';
                    var $a = 'a';
                    assert.ok(_a);
                    assert.ok($a);
                });

                /**
                 * The square brackets notation can dynamically get values from an object.  The dot notation,
                 * though far more common, is limited.
                 */
                it("Can access an object's methods or properties dynamically with the square brackets", function () {
                    var obj = {
                        firstName: 'Brad',
                        greeting: function () {
                            return "Hi " + this.firstName;
                        }
                    },
                        accessFirstName = 'firstName';
                    assert.deepStrictEqual(obj['firstName'], 'Brad');
                    assert.deepStrictEqual(obj[accessFirstName], 'Brad');
                });

                it("Can access special character names with square brackets, but please never do this", function () {
                    var obj = {
                        "^[Hey]": 'There'
                    };
                    assert.deepStrictEqual(obj["^[Hey]"], "There");
                });
                /**
                 * Variable hoisting is what happens if you use the var keyword anywhere in the function, or if you
                 * use a function without var.  It gets 'hoisted' to
                 * the top of the function.
                 */
                it("Can 'hoist' a function value", function () {
                    var x;
                    x = getName();
                    function getName() {
                        return "Bob";
                    }

                    assert.deepStrictEqual(x, "Bob");
                });
                /**
                 * The only part of this variable that gets 'hoisted' up is the var x portion, the assignment
                 * does not occur yet.  So attempting to use X will result in it being undefined.
                 */
                it("Can cause unexpected behavior when dealing with variables", function () {
                    assert.deepStrictEqual(x, undefined);
                    var x = 10;
                    assert.deepStrictEqual(x, 10);
                });
            });
        });
    });


})(globalThis);

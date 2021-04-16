/* global describe beforeEach expect it */
(function (g) {
    "use strict";

    var run = g.globalRunner.run;
    var describe = g.globalRunner.describe;
    var it = g.globalRunner.it;
    var assert = g.globalRunner.assert;
    run("number-and-math", function () {
        describe("Show how the Number primitive works and how Math is used", function () {
            describe("Show how Number works", function () {
                it("A number will have a precision value", function () {
                    var randomNumber = 1.365,
                        zeroBased = 0.00111,
                        precisionTwoOnZero = zeroBased.toPrecision(2),
                        precisionTwo = randomNumber.toPrecision(2),
                        precisionThree = randomNumber.toPrecision(3); // Note that this will convert it to a string.
                    assert.strictEqual(precisionTwo, '1.4');
                    assert.strictEqual(precisionThree, '1.36');
                    assert.strictEqual(precisionTwoOnZero, '0.0011');
                });

                it("Can return a fixed number of decimals", function () {
                    var randomNumber = 1.3422,
                        fixedNum = randomNumber.toFixed(2);
                    assert.strictEqual(fixedNum, '1.34');
                });

                it("Can add two numbers", function () {
                    var one = 1,
                        two = 2,
                        result = one + two;
                    assert.strictEqual(result, 3);
                });

                it("Can perform mathematical equations", function () {
                    assert.strictEqual(1 / 2, .5);
                    assert.strictEqual(2 * 2, 4);
                });
                /**
                 * Modulus is a fancy name for remainder
                 */
                it("Can give a modulus", function () {
                    var result = 3 % 2;
                    assert.strictEqual(result, 1);
                });
                /**
                 * JavaScript is very imprecise with numbers.
                 * There is a new BigDecimal type that solves this problem.
                 */
                it("Gives unexpected results without precision or fixed operations", function () {
                    var result = .1 + .2;
                    assert.notStrictEqual(result, .3);
                });

                it("Shows how explicit type-coercion can be performed", function () {
                    var numberOne = Number('1'),
                        numberTwo = parseInt('1', 10),
                        numberThree = parseFloat('1');
                    assert.strictEqual(numberOne, 1);
                    assert.strictEqual(numberTwo, 1);
                    assert.strictEqual(numberThree, 1);
                });
            });
            /**
             * The Math class is used for complex math expressions.
             * This is considered a weird thing because JavaScript only has one type of Number (two now, but both have modulus),
             * so this could all have been added to the Number class.
             */
            describe("The Math Class is used for mathematical operations", function () {
                it("Can perform power operations", function () {
                    // You would expect something like this, 3.pow(2), but that does not work.
                    var result = Math.pow(3,2);
                    var result2 = 3 ** 2;
                    assert.strictEqual(result, 9);
                    assert.strictEqual(result2, 9);
                });

                it("Can use floor to limit a result", function () {
                    var result = Math.floor(3.9999);
                    assert.strictEqual(result, 3);
                });

                it("Can use ceiling to increase a limit", function () {
                    var result = Math.ceil(3.999);
                    assert.strictEqual(result, 4);
                });

                it("Can perform short-hand mathematical operations", function () {
                    var a = 0;
                    a++; // Same as a = a + 1
                    assert.strictEqual(a, 1);
                    a += 1;
                    assert.strictEqual(a, 2);
                    a--; // Same as a = a - 1
                    assert.strictEqual(a, 1);
                    a -= 1;
                    assert.strictEqual(a, 0);
                    a += 3; // same as a = a + 3
                    assert.strictEqual(a, 3);
                    a *= 3; // same as a = a * 3
                    assert.strictEqual(a, 9);
                    a /= 3; // same as a = a / 3
                    assert.strictEqual(a, 3);
                });

                it("Can perform mathematical comparisons", function () {
                    assert.ok(4 < 5);
                    assert.ok(5 > 4);
                    assert.ok(5 == 5);
                    assert.ok(5 === 5);
                    assert.ok(4 <= 5);
                    assert.ok(5 >= 5);
                });

            });
        });
    });
})(globalThis);

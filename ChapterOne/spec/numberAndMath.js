/* global describe beforeEach expect it */
describe("Show how the Number primitive works and how Math is used", function () {
    describe("Show how Number works", function () {
        it("A number will have a precision value", function () {
            var randomNumber = 1.365,
                zeroBased = 0.00111,
                precisionTwoOnZero = zeroBased.toPrecision(2),
                precisionTwo = randomNumber.toPrecision(2),
                precisionThree = randomNumber.toPrecision(3); // Note that this will convert it to a string.
            expect(precisionTwo).toEqual('1.4');
            expect(precisionThree).toEqual('1.36');
            expect(precisionTwoOnZero).toEqual('0.0011');

        });

        it("Can return a fixed number of decimals", function () {
            var randomNumber = 1.3422,
                fixedNum = randomNumber.toFixed(2);
            expect(fixedNum).toEqual('1.34');
        });

        it("Can add two numbers", function () {
            var one = 1,
                two = 2,
                result = one + two;
            expect(result).toEqual(3);
        });

        it("Can perform mathematical equations", function () {
            expect(1 / 2).toBe(.5);
            expect(2 * 2).toBe(4);
        });
        /**
         * Modulus is a fancy name for remainder
         */
        it("Can give a modulus", function () {
            var result = 3 % 2;
            expect(result).toEqual(1);
        });
        /**
         * JavaScript is very imprecise with numbers
         */
        it("Gives unexpected results without precision or fixed operations", function () {
            var result = .1 + .2;
            expect(result).not.toEqual(.3);
        });

        it("Shows how explicit type-coercion can be performed", function () {
            var numberOne = Number('1'),
                numberTwo = parseInt('1', 10),
                numberThree = parseFloat('1');
            expect(numberOne).toEqual(1);
            expect(numberTwo).toEqual(1);
            expect(numberThree).toEqual(1);
        });
    });
    /**
     * The Math class is used for complex math expressions.
     * This is considered a weird thing because JavaScript only has one type of Number,
     * so this could all have been added to the Number class.
     */
    describe("The Math Class is used for mathematical operations", function () {
        it("Can perform power operations", function () {
            // You would expect something like this, 3.pow(2), but that does not work.
            var result = Math.pow(3,2);
            expect(result).toBe(9);
        });

        it("Can use floor to limit a result", function () {
            var result = Math.floor(3.9999);
            expect(result).toBe(3);
        });

        it("Can use ceiling to increase a limit", function () {
            var result = Math.ceil(3.999);
            expect(result).toBe(4);
        });

        it("Can perform short-hand mathematical operations", function () {
            var a = 0;
            a++; // Same as a = a + 1
            expect(a).toBe(1);
            a += 1;
            expect(a).toBe(2);
            a--; // Same as a = a - 1
            expect(a).toBe(1);
            a -= 1;
            expect(a).toBe(0);
            a += 3; // same as a = a + 3
            expect(a).toBe(3);
            a *= 3; // same as a = a * 3
            expect(a).toBe(9);
            a /= 3; // same as a = a / 3
            expect(a).toBe(3);
        });

        it("Can perform mathematical comparisons", function () {
            expect(4 < 5).toBe(true);
            expect(5 > 4).toBe(true);
            expect(5 == 5).toBe(true);
            expect(5 === 5).toBe(true);
            expect(4 <= 5).toBe(true);
            expect(5 >= 5).toBe(true);
        });

    });
});

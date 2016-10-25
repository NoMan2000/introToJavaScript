/* global describe beforeEach expect it */
describe("Conditionals in JavaScript", function () {
    describe("Conditionals in JavaScript control logic flow.  Certain statements only execute if fulfill certain conditions", function () {

        describe("The if condition is the most common way to control the logic flow", function () {

            it("Can evaluate simple true Comparisons", function () {
                expect(3 === 3).toEqual(true);
                expect(3 == 3).toEqual(true);
                expect('3' == 3).toEqual(true);
                expect(4 < 5).toEqual(true);
                expect(5 > 4).toEqual(true);
            });

            it("Can demonstrate a simple true statement", function () {
                var bool = false;
                if (3 === 3) {
                    bool = true;
                }
                expect(bool).toEqual(true);
            });

            it("Can demonstrate that elseif is used as an alternative fallback to test more specific conditions", function () {
                var x = 10,
                    bool;
                if (x === 9) {
                    bool = false;
                } else if (x == 7) {
                    bool = false;
                } else if (x === 10) {
                    bool = true;
                }
                expect(bool).toBe(true);
            });

            it("Can demonstrate the else condition is a fallback for failing the if condition", function () {
                var bool;
                if (4 === 5) {
                    bool = false;
                } else if (5 === 4) {
                    bool = false;
                } else {
                    // Since the two above conditions fail the else condition runs
                    bool = true;
                }
                expect(bool).toBe(true);
            });

            it("Can simplify an if/else clause by using a terniary comparison", function () {
                var string = "",
                    errorMessage = string.length >= 8 ? false : "String must be at least 8 characters long";
                expect(errorMessage).toBe("String must be at least 8 characters long");

            });
        });

        describe("The switch statement is used when you have to test large amounts of conditions", function () {
            it("Can use Switch statement when dealing with complex ", function () {
                var x = 1,
                    conditionalOne = false,
                    conditionalTwo = false;
                switch (x) {
                    case 1:
                        conditionalOne = true;
                        break;
                    case 2:
                        conditionalTwo = true;
                        break;
                }
                expect(conditionalOne).toBe(true);
                expect(conditionalTwo).toBe(false);
            });

            it("Can use fall-through to test multiple conditions", function () {
                var x = 2,
                    conditional = false;
                switch (x) {
                    // This is considered the "good" fall-through, it tests a range of conditions.
                    // the Switch statement cannot evaluate an expression like
                    case 1:
                    case 2:
                    case 3:
                        conditional = true;
                        break;
                }
                expect(conditional).toBe(true);
            });

            it("Can use bad fallthrough to chain side-effects", function () {
                var x = 2,
                    conditionalOne = false,
                    conditionalTwo = false;
                switch(x) {
                    case 1:
                    case 2:
                        conditionalOne = true;
                    case 3:
                        // Even though this is not true, because the previous statement did not stop, it will execute this block of code.
                        // You should avoid doing this.  It is a common source of bugs.
                        conditionalTwo = true;
                        break;
                }
                expect(conditionalOne).toBe(true);
                expect(conditionalTwo).toBe(true);
            });

            it("Can use default as a version of the else block", function () {
                var x = 1,
                    conditionalOne = false,
                    conditionalTwo = false;
                switch (x) {
                    case 0:
                        conditionalOne = true;
                        break;
                    default:
                        conditionalTwo = true;
                        // Break is not technically needed here since this is always the last statement.
                        break;
                }
                expect(conditionalOne).toBe(false);
                expect(conditionalTwo).toBe(true);
            });

        });


    });
});

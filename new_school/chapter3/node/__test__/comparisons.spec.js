/* global describe beforeEach expect it */
describe("Comparisons are statements which evaluate to either true or false", function () {

    describe("Associativity is whether an expression is evaluated left-to-right or right-to-left", function () {
        describe("Right-to-left associative expressions", function () {
            it("Can assign multiple values at once", function () {
                /**
                 * The assignment operator evaluates from right-to-left.  First 90 is assigned to c.  Then c is assigned to b.
                 * Then b to a.
                 * @type {number}
                 */
                var a = b = c = 90;
                expect(a).toEqual(b);
                expect(b).toEqual(c);
                expect(c).toEqual(90);
            });
            /**
             * The variable bool is evaluated first, then the negation is performed.
             */
            it("Can negate a statement", function () {
                var bool = true;
                expect(!bool).toBe(false);
            });
            /**
             * Bitwise negation ~ is rare in most code.  One place you might see it is in the indexOf method,
             * which will return -1 if it cannot find a value, since 0 is the first index.  The bitwise negation
             * will flip -1 to 0, which will evaluate as false.
             */
            it("Can perform a bitwise negation", function () {
                var arr = [1, 2],
                    hasIndex = Boolean(~arr.indexOf(3));
                expect(hasIndex).toEqual(false);
            });
            /**
             * Unary plus just means to make sure a number is positive.
             */
            it("Can perform a unary plus operation", function () {
                var a = 1;
                expect(+a).toEqual(1);
            });

            it("Can perform a unary negation", function () {
                var a = 1;
                expect(-a).toEqual(-1);
            });
            /**
             * A prefix increment will perform the increment first, as opposed to a postfix increment,
             * which will perform the increment afterwards.  It is generally recommended to avoid the prefix increment as
             * it is confusing.  It is also recommend to avoid the postfix increment, though it is more common.
             */
            it("Can perform a prefix increment", function () {
                var i = 0,
                    j = 0;
                expect(++i).toEqual(1); // in this scenario,  one is added to i's value, then it is evaluated to it.
                expect(j++).toEqual(0); // in this scenario, j is evaluated at zero, the expression runs, then one is added to it.
                expect(j).toEqual(1);
            });

            it("Can perform a prefix decrement", function () {
                var i = 1,
                    j = 1;
                expect(--i).toEqual(0);
                expect(j--).toEqual(1);
                expect(j).toEqual(0);
            });

        });
        /**
         * JavaScript uses short-circuit evaluation.  This means as soon as the result is guaranteed to be either true or
         * false, then it will stop evaluating the rest of the expression.
         */
        describe("Left to right expressions", function () {

            it("Can evaluate a logical or statement ||", function () {
                var name = null || 'bob', // Since null is false, the name will be assigned to bob.
                    nameTwo = 'tim' || 'john',
                    longTrue = false || null || 0 || '' || true; // Since tim is a truthy statement, the value tim will be assigned to nameTwo
                expect(name).toBe('bob');
                expect(nameTwo).toBe('tim');
                expect(longTrue).toBe(true);
            });
            /**
             * Note that evaluating the result is true for and expressions as well
             */
            it("Can evaluate a logical and &&", function () {
                var isTrue = true && true,
                    isFalse = true && false,
                    isTrueTwo = 1 && true && '1',
                    isFalseTwo = 1 && 0,
                    longFalse = true && 1 && 'Bill' && false;

                expect(isTrue).toBe(true);
                expect(isTrueTwo).toBe('1');
                expect(isTrueTwo).toBeTruthy();

                expect(isFalse).toBe(false);
                expect(isFalseTwo).toBe(0);
                expect(isFalseTwo).toBeFalsy();
                expect(longFalse).toBe(false);
            });

            it("Can evaluate math by PMDAS", function () {
                var a = 1 + 2 * 10;
                expect(a).toEqual(21);
            });

            it("Can change order of operations by using the grouping operation ()", function () {
                var a = (1 + 2) * 10;
                expect(a).toEqual(30);
            });
        });


    });



});

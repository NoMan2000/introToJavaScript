/* global describe beforeEach expect it */
describe("Looping structures", function () {
    describe("The for loop is one of the common ways to iterate over values", function () {
        it("Can loop over an array", function () {
            var arr = ['one', 2, '3'];
            // The first value is known as the initializer, traditionally the character i is used.
            // For a deeply nested loop, the letter j is used.
            // The second value is the comparison or condition value.
            // The final value is the afterthought, which is what you want to do afterwards.
            // Note that the semi-colon is used
            for (var i = 0; i < arr.length; i += 1) {
                if (i === 0) {
                    expect(arr[i]).toBe(arr[0]);
                }
                if (i === 1) {
                    expect(arr[i]).toBe(arr[1]);
                }
                if (i === 2) {
                    expect(arr[i]).toBe(arr[2]);
                }
            }

            for (i = 0; i < arr.length; i += 1) {
                if (i === 1) {
                    // Continue will keep iterating over the loop, but skip the first one.
                    continue;
                }
                // You will not see 1 in the output.
                console.log(i);
                if (i === 2) {
                    // Break will completely exit the loop, similar to the switch statement.
                    break;
                }

            }

        });

        /**
         * While loops are probably the second most common type of loop.  A while loop is easy to get wrong though since
         * it requires you to change the afterthought manually.  A common mistake with the while loop is to leave the
         * afterthought off and create an infinite loop.
         */
        it("Can run a while loop", function () {
            var sentinelValue = 3,
                valueToCheck = 0; // A sentinel value in programming is a value to watch for and perform an action.
            while (valueToCheck !== sentinelValue) {
                valueToCheck += 1;
            }
            expect(valueToCheck).toBe(sentinelValue);
        });

    });
});

/* global describe beforeEach expect it */
describe("Looping structures: While, For, Do-While, ForEach", function () {
    it("Can loop over an array with the for loop", function () {
        var arr = ['one', 2, '3'],
            testArray = [];
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
            testArray.push(i);
            if (i === 2) {
                // Break will completely exit the loop, similar to the switch statement.
                break;
            }
        }
        expect(testArray).toContain(0);
        expect(testArray).not.toContain(1);
    });

    /**
     * This is very rare to actually see.  I have yet to see it in production code.
     * This is something you see more in SQL languages, which do not have certain data structures like
     * objects and arrays and require some creative thinking to overcome the limitations of not having those structures.
     */
    it("Can use the label construct to only exit a portion of a loop", function () {
        var i = 0,
            j = 0,
            iArr = [],
            jArr = [];
        firstLoop:
            for (; i < 3; i += 1) {
                iArr.push(i);
                loopTwo:
                    for (; j < 2; j += 1) {
                        if (j === 1) {
                            continue firstLoop;
                        }
                        jArr.push(j);
                    }

            }
        expect(iArr).toContain(2);
        expect(jArr).toContain(0);
        expect(jArr).not.toContain(1);
    });

    /**
     * While loops are probably the second most common type of loop.  A while loop is easy to get wrong though since
     * it requires you to change the afterthought manually.  A common mistake with the while loop is to leave the
     * afterthought off and create an infinite loop.
     */
    it("Can run a while loop", function () {
        var sentinelValue = 3,  // A sentinel value in programming is a value to watch for and perform an action.
            valueToCheck = 0;
        while (valueToCheck !== sentinelValue) {
            valueToCheck += 1;
        }
        expect(valueToCheck).toBe(sentinelValue);
    });

    /**
     * A do-while loop is a loop that will always run at least once.  This is useful if you want to generate a
     * unique username for example.  Run the username generator, then check if it exists in the database.  If it
     * doesn't, then create that username.
     */
    it("Can run a do-while loop", function () {
        var i;
        do {
            i = 'randomString';
        } while (i === undefined);
        expect(i).toBe('randomString');
    });

    /**
     * A forEach loop is the easiest loop to write, but it only works on true arrays.  JavaScript in the DOM
     * has "array-like structures", which are values that have a length property, but lack the methods of an array.
     * ForEach is one array method.
     */
    it("Can run a forEach loop", function () {
        newArr = [];
        [1, 2, 3].forEach(function (value) {
            newArr.push(value);
        });
        expect(newArr).toContain(1);
        expect(newArr).toContain(2);
        expect(newArr).toContain(3);
    });

});

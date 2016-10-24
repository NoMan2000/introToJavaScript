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
        });


    });
});

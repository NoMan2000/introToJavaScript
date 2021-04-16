/* global describe beforeEach expect it */

(function (g) {
    "use strict";

    var run = g.globalRunner.run;
    var describe = g.globalRunner.describe;
    var it = g.globalRunner.it;
    var assert = g.globalRunner.assert;

    run("undefined-or-null", function () {
        describe("Show how undefined or null is used", function () {

            it("Can be weakly compare undefined to null", function () {
                assert.ok(null == undefined);
            });

            it("Cannot use strict equality comparison", function () {
                assert.notStrictEqual(null, undefined);
            });

            it("Acts weird with respect to null", function () {
                assert.deepStrictEqual(typeof null, 'object');
            });

            it("Acts how you expect with undefined", function () {
                assert.deepStrictEqual(typeof undefined, 'undefined');
            });
        });
    });
})(globalThis);

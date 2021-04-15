/* global describe beforeEach expect it */

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

run(getIsMain, describe("Show how undefined or null is used", function () {

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
    })

}));

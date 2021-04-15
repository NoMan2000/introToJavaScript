/**
 * @type {number} This is a little counter to tab over.
 */
 var counter = 0;
 var assertions = 0;
 var passed = 0;
 var failed = 0;

/**
 * @param {string} description The console output you want to see.
 * @param {Function} func An invoked function.
 */
function describe(description, func) {
    console.info("\x1b[32m", '-'.repeat(40));
    console.group("\x1b[37m", description, '\r\n');
    counter += 1;
    // console.info("\x1b[36m", 'Begin describe: ' + description);
    try {

        func();
        console.info("\x1b[32m", 'Passed describe: ' + description);
        console.info('-'.repeat(40) + '\r\n');
        counter -= 1;
    } catch (err) {
        console.info("\x1b[31m", 'Failed describe: ' + description);
        console.info('-'.repeat(40) + '\r\n');
        console.error("\x1b[31m", err, "\r\n");
    } finally {
        console.groupEnd();
    }
}
/**
 * @param {string} description
 * @param {Function} func
 */
function it(description, func) {
    assertions += 1;
    console.group("\x1b[37m", description + ':', '\r\n');
    console.info("\x1b[36m", '-'.repeat(40));
    console.info("\x1b[36m", 'Begin it: ' + description);
    try {
        func();
        passed += 1;
        console.info("\x1b[32m", 'Passed it: ' + description);
        console.info("\x1b[36m", '-'.repeat(40) + '\r\n');
        console.info('-'.repeat(40) + '\r\n');
    } catch (err) {
        failed += 1;
        console.info("\x1b[31m", 'Failed it: ' + description + ' failed.');
        console.info('-'.repeat(40) + '\r\n')
        console.error("\x1b[31m", err, "\r\n");
    } finally {
        console.groupEnd();
    }
}
/**
 * This is just a script function.  You have to run this in the actual module itself,
 * otherwise, it just returns false each time it is invoked.
 *
 * @internal
 * @private
 * @returns {boolean}
 */
var getIsMain = function () {
    return (
        typeof module !== 'undefined' && !module.parent
    ) || (
        typeof require !== 'undefined' && require.main === module
    );
}

var run = function (isMain, func) {
    if (func) {
        func();
    }
    if (isMain) {
        console.log("\x1b[37m", 'Assertions made: ', assertions);
        console.log("\x1b[37m", 'Assertions passed: ' + passed);
        console.log("\x1b[31m", 'Assertions failed: ' + failed);
    }
}

module.exports = {
    describe,
    it,
    run
 }

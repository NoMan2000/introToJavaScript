/**
 * @param {window} g
 * @param {document} doc
 */
(function (g, doc) {
    "use strict";
    g.globalRunner = g.globalRunner || {};
    /**
     * @type {number} This is a little counter to tab over.
     */
    var counter = 0;
    var assertions = 0;
    var passed = 0;
    var failed = 0;
    var runners = {};

    var inner = document.querySelector('#inner');
    var alternatively = document.getElementById('inner');
    var append = document.createElement('div');
    /**
     * @param {boolean} assertion This is the actual assertion that must be true to pass.
     * @param {...*} otherAssertions
     * @throws {Error}
     */
    var assert = function () {
        var upperErr;
        var didPass = false;
        var allArgs = Array.from(arguments);
        var assertion = allArgs[0];
        var otherAssertions = allArgs.slice(1);
        try {
            console.assert(assertion, otherAssertions);
            didPass = true;
            passed += 1;
        } catch (err) {
            failed += 1;
            didPass = false;
            upperErr = err;
        } finally {
            assertions += 1;
        }
        if (upperErr) {
            throw upperErr;
        }
    }
    assert.strictEqual = function(valueOne, valueTwo) {
        assert(valueOne === valueTwo);
    }

    function deepEqual(object1, object2) {
        var isObjOne = isObject(object1);
        var isObjTwo = isObject(object2);

        if ((!isObjOne || !isObjTwo) && (object1 !== object2)) {
            return false;
        } else if (!isObjOne || !isObjTwo) {
            return object1 === object2;
        }

        const keys1 = isObjOne && Object.keys(object1);
        const keys2 = isObjTwo && Object.keys(object2);

        if (isObjOne && isObjTwo && keys1.length !== keys2.length) {
          return false;
        }

        for (const key of keys1) {
          const val1 = object1[key];
          const val2 = object2[key];
          const areObjects = isObject(val1) && isObject(val2);
          if (
            areObjects && !deepEqual(val1, val2) ||
            !areObjects && val1 !== val2
          ) {
            return false;
          }
        }
        return true;
    }

    assert.deepStrictEqual = function deepStrictEqual(object1, object2) {
        assert(deepEqual(object1, object2));
    }

    assert.notDeepStrictEqual = function notDeepStrictEqual(object1, object2) {
        assert(!deepEqual(object1, object2));
    }

    assert.notStrictEqual = function(valueOne, valueTwo) {
        assert(valueOne !== valueTwo);
    }
    assert.ok = assert;
    assert.throws = function (errorFunc, message) {
        var didNotFail = false;
        try {
            errorFunc();
            didNotFail = true;
        } catch (err) {
            didNotFail = false;
            assert(true);
        }
        if (didNotFail) {
            assert(false);
        }
    }

    function isObject(object) {
        return object != null && typeof object === 'object';
    }


    append.classList.add('col-12');

    function clear() {
        var inner = document.querySelector('#inner');
        inner.innerHTML = '';
    }

    inner.innerHTML = '';

    /**
     * @param {string} description The console output you want to see.
     * @param {Function} func An invoked function.
     */
    function describe(description, func) {
        var headerEl = document.createElement('header');
        var headerTwo = document.createElement('h2');
        var innerDiv = document.createElement('div');
        append = document.createElement('div');
        append.classList.add('card', 'describe');
        var innerContent = '';

        headerEl.classList.add('col');
        headerTwo.textContent = description;
        counter += 1;
        // console.info("\x1b[36m", 'Begin describe: ' + description);
        try {
            func();
            innerDiv.classList.add('alert', 'alert-info');
            innerContent += 'Passed describe: ' + description;
            counter -= 1;
        } catch (err) {
            innerDiv.classList.add('alert', 'alert-danger');
            innerContent += 'Failed describe: ' + description;
            innerContent += err.message;
        } finally {
            innerDiv.textContent = innerContent;
            headerEl.appendChild(headerTwo);
            append.prepend(innerDiv);
            append.prepend(headerEl);
            inner.appendChild(append);
        }
    }
    /**
     * @param {string} description
     * @param {Function} func
     */
    function it(description, func) {
        assertions += 1;
        var cardContainer = document.createElement('div');
        var headerEl = document.createElement('header');
        var headerFive = document.createElement('h5');
        var innerDiv = document.createElement('div');
        var innerContent = '';

        headerEl.classList.add('col');
        cardContainer.classList.add('it');
        headerFive.textContent = description;
        counter += 1;
        // console.info("\x1b[36m", 'Begin describe: ' + description);
        try {
            func();
            innerDiv.classList.add('alert', 'alert-primary');
            innerContent += 'Passed it: ' + description;
            counter -= 1;
        } catch (err) {
            innerDiv.classList.add('alert', 'alert-danger');
            innerContent += 'Failed it: ' + description;
            innerContent += err.message;
        } finally {
            innerDiv.textContent = innerContent;
            headerEl.appendChild(headerFive);
            cardContainer.append(headerEl);
            cardContainer.append(innerDiv);
            // innerDiv.appendChild(cardContainer);
            append.appendChild(cardContainer);
            // inner.appendChild(append);
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
        return typeof window !== 'undefined' || (
            typeof module !== 'undefined' && !module.parent
        ) || (
            typeof require !== 'undefined' && require.main === module
        );
    }
    /**
     *
     * @param {string} label
     * @param {Function} func
     * @returns {Function} A function which accepts a label param, and runs whatever that label is.
     */
    var run = function (label, func) {
        var infoEl = document.createElement('div');
        var primaryEl = document.createElement('div');
        var dangerEl = document.createElement('div');
        if (func) {
            runners[label] = func;
        }
    }

    var browserRun = function (runLabel) {
        return runners[runLabel]();
    }

    g.globalRunner = {
        describe,
        it,
        run,
        assert,
        browserRun,
        runners,
        clear
    }
})(globalThis, typeof document !== 'undefined' ? document : {});

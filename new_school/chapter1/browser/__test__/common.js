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
    assert.ok = assert;

    append.classList.add('col-12');

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
        runners
    }
})(globalThis, typeof document !== 'undefined' ? document : {});

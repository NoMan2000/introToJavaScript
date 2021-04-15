/**
 * @param {window} g
 * @param {document} doc
 */
(function (g, doc) {
    /**
     * @type {number} This is a little counter to tab over.
     */
    var counter = 0;
    var assertions = 0;
    var passed = 0;
    var failed = 0;

    var inner = document.querySelector('#inner');
    var alternatively = document.getElementById('inner');
    var append = document.createElement('div');
    append.classList.add('col-12');

    /**
     * @param {string} description The console output you want to see.
     * @param {Function} func An invoked function.
     */
    function describe(description, func) {
        var headerEl = document.createElement('header');
        var headerTwo = document.createElement('h2');
        var innerDiv = document.createElement('div');
        var innerContent = '';

        headerEl.classList.add('col', 'card');
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
            innerContent += err.mesage;
        } finally {
            innerDiv.textContent = innerContent;
            append.append(headerEl);
            append.appendChild(innerDiv);
        }
    }
    /**
     * @param {string} description
     * @param {Function} func
     */
    function it(description, func) {
        assertions += 1;

        var headerEl = document.createElement('header');
        var headerTwo = document.createElement('h2');
        var innerDiv = document.createElement('div');
        var innerContent = '';

        headerEl.classList.add('col', 'card');
        headerTwo.textContent = description;
        counter += 1;
        // console.info("\x1b[36m", 'Begin describe: ' + description);
        try {
            func();
            passed += 1;
            innerDiv.classList.add('alert', 'alert-info');
            innerContent += 'Passed describe: ' + description;
            counter -= 1;
        } catch (err) {
            failed += 1;
            innerDiv.classList.add('alert', 'alert-danger');
            innerContent += 'Failed describe: ' + description;
            innerContent += err.mesage;
        } finally {
            innerDiv.textContent = innerContent;
            append.append(headerEl);
            append.appendChild(innerDiv);
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

    var run = function (isMain, func) {
        var infoEl = document.createElement('div');
        var primaryEl = document.createElement('div');
        var dangerEl = document.createElement('div');
        if (func) {
            func();
        }

        if (isMain) {
            console.log("\x1b[37m", 'Assertions made: ', assertions);
            console.log("\x1b[37m", 'Assertions passed: ' + passed);
            console.log("\x1b[31m", 'Assertions failed: ' + failed);
        }
    }

    g.globalRunner = {
        describe,
        it,
        run,
    }
})(globalThis, typeof document !== 'undefined' ? document : {});

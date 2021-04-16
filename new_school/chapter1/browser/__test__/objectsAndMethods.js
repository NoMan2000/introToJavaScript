/* global describe beforeEach Truthiness Falsiness globalVariable public expect it variables Variable */

(function (g) {
    "use strict";

    var run = g.globalRunner.run;
    var describe = g.globalRunner.describe;
    var it = g.globalRunner.it;
    var assert = g.globalRunner.assert;

    run('objects-and-methods', function () {
        describe("A demonstration of how methods and properties work.", function() {

            describe("This is a basic demonstration of creating variables", function() {
                it("Can create a basic object", function createBasicObject() {
                    var obj = {};
                    assert.ok(typeof obj !== 'undefined');
                    assert.ok(obj);
                });

                it("Can create a basic object and assign a property to it.", function() {
                    var obj = {};
                    obj.name = "Ryan";
                    assert.strictEqual(obj.name, "Ryan");
                });

                it("Can create a basic object and assign a method on it", function() {
                    var obj = {},
                    nameOne,
                    nameTwo,
                    nameThree;
                    /**
                     * In ES5, JavaScript does not have default parameter options.
                     * Using the or symbol || is a common practice to make sure a value does exist.
                     * @param {String} first
                     * @param {String} last
                     * @return String
                     */
                    obj.sayName = function(first, last) {
                        first = first || "Ryan"; // Lazy Evaluation
                        last = last || "Michael";
                        return "Hello " + first + " " + last;
                    };
                    /**
                     * The different variations on parameter arguments are often called 'permutations' in programming.
                     * The first is no arguments, the second is a one argument permutation, and the final one is a two
                     * argument permutation.
                     */
                    nameOne = obj.sayName();
                    nameTwo = obj.sayName('Bill');
                    nameThree = obj.sayName('john', 'doe');
                    assert.strictEqual(nameOne, "Hello Ryan Michael");
                    assert.strictEqual(nameTwo, "Hello Bill Michael");
                    assert.strictEqual(nameThree, "Hello john doe");
                });

                /**
                 * The square brackets notation can dynamically get values from an object.  The dot notation,
                 * though far more common, is limited.
                 */
                it("Can access an object's methods or properties dynamically with the square brackets", function () {
                    var obj = {
                        firstName: 'Brad',
                        greeting: function () {
                            return "Hi " + this.firstName;
                        }
                    },
                        accessFirstName = 'firstName';
                    assert.strictEqual(obj['firstName'], 'Brad');
                    assert.strictEqual(obj[accessFirstName], 'Brad');

                });
            });

            describe("JavaScript often has multiple ways of doing the same thing", function () {
                /**
                 * This is the 'simple' way to create an object, useful if you just need to create a new object quickly.
                 */
                it("Can use the object literal syntax", function () {
                    var obj = {
                        firstName: 'John',
                        lastName: 'Doe',
                        greeting: function greeting() {
                            return "Hello " + this.firstName + " " + this.lastName;
                        }
                    };
                    assert.strictEqual(obj.greeting(), "Hello John Doe");
                    obj.firstName = "Bill";
                    assert.strictEqual(obj.greeting(), "Hello Bill Doe");
                });
                /**
                 * This is the more complex way to create an object.  You first create a function, and then the
                 * values are part of an object created with the 'new' keyword.
                 */
                it("Can use the Constructor Syntax", function () {
                    /**
                     *
                     * @param {String} firstName
                     * @param {String} lastName
                     * @constructor
                     */
                    var PersonCreator = function (firstName, lastName) {
                        this.firstName = firstName || "John";
                        this.lastName = lastName || "Doe";
                        this.greeting = function () {
                            return "Hello " + this.firstName + " " + this.lastName;
                        }
                    };
                    var johnDoe = new PersonCreator();
                    assert.strictEqual(johnDoe.greeting(), "Hello John Doe");
                    johnDoe.firstName = "Bill";
                    assert.strictEqual(johnDoe.greeting(), "Hello Bill Doe");
                });
                /**
                 * This is the most verbose way to create a new object.  The advantage is you can define special properties.
                 * The downside is that the verbosity of it makes it very difficult to read.
                 */
                it("Can use the Object.create method to create an object", function () {
                    var johnDoe = Object.create(null, {
                        firstName: {
                            value: "John",
                            writable: true
                        },
                        lastName: {
                            value: "Doe",
                            writable: true
                        },
                        greeting: {
                            value: function () {
                                return "Hello " + this.firstName + " " + this.lastName;
                            }
                        }
                    });
                    assert.strictEqual(johnDoe.greeting(), "Hello John Doe");
                    johnDoe.firstName = "Bill";
                    assert.strictEqual(johnDoe.greeting(), "Hello Bill Doe");

                });
            });
        });
    });
})(globalThis);

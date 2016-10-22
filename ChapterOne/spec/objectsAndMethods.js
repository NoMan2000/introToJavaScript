/* global describe beforeEach Truthiness Falsiness globalVariable public expect it variables Variable */
describe("A demonstration of how methods and properties work.", function() {

    describe("This is a basic demonstration of creating variables", function(){
        it("Can create a basic object", function createBasicObject() {
            var obj = {};
            expect(obj).not.toBeUndefined();

        });
        it("Can create a basic object and assign a property to it.", function() {
            var obj = {};
            obj.name = "Ryan";
            expect(obj.name).toEqual("Ryan");
        });

        it("Can create a basic object and assign a method on it", function() {
            var obj = {};
            /**
             * In ES5, JavaScript does not have default parameter options.
             * Using the or symbol || is a common practice to make sure a value does exist.
             * @param {String} first
             * @param {String} last
             * @return String
             */
            obj.sayName = function(first, last) {
                first = first || "Ryan";
                last = last || "Michael";
                return "Hello " + first + " " + last;
            };
            /**
             * The different variations on parameter arguments are often called 'permutations' in programming.
             * The first is no arguments, the second is a one argument permutation, and the final one is a two
             * argument permutation.
             */
            expect(obj.sayName()).toEqual("Hello Ryan Michael");
            expect(obj.sayName('Bill')).toEqual("Hello Bill Michael");
            expect(obj.sayName('john', 'doe')).toEqual("Hello john doe");
        });
    });







});

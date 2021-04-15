/* global describe beforeEach expect it */
describe("A description of allowed and then good variable names.", function() {

    describe("This is a basic demonstration of creating variables", function(){
        it("A very basic variable", function createBasicObject() {
            var basic = '';
            expect(basic).not.toBeUndefined();
        });
        /**
         * This test cannot actually be demonstrated.  SyntaxErrors are compile-time errors.
         * Only run-time errors can be caught in a try-catch block.  To fix this,
         * running eval will turn compile-time code into run-time code.  eval can cause security problems and
         * is computationally expensive, so only in rare cases should it be used in production code.
         */
        it("Cannot create a variable starting with a number.", function() {
            // var 1a;
            try {
                eval("var 1a = 1;");
            } catch(ignore){
                expect(ignore).toEqual(jasmine.any(Error));
            }
        });

        it("Can create a variable name with a number anywhere other than the beginning", function() {
            var a1 = 'hey';
            expect(a1).toBeDefined();
        });

        /**
         * $ and _ are special characters that are allowed.  $ is most often used with jQuery, while the
         * _ is a notation that means you are using a private variable.
         */
        it("Can create a variable with $ or _ as valid names", function() {
            var _a = 'a';
            var $a = 'a';
            expect(_a).not.toBeUndefined();
            expect($a).not.toBeUndefined();
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
            expect(obj['firstName']).toEqual('Brad');
            expect(obj[accessFirstName]).toEqual('Brad');
        });

        it("Can access special character names with square brackets, but please never do this", function () {
            var obj = {
                "^[Hey]": 'There'
            };
            expect(obj["^[Hey]"]).toEqual("There");
        });
        /**
         * Variable hoisting is what happens if you use the var keyword anywhere in the function, or if you
         * use a function without var.  It gets 'hoisted' to
         * the top of the function.
         */
        it("Can 'hoist' a function value", function () {
            var x;
            x = getName();
            function getName() {
                return "Bob";
            }

            expect(x).toEqual("Bob");
        });
        /**
         * The only part of this variable that gets 'hoisted' up is the var x portion, the assignment
         * does not occur yet.  So attempting to use X will result in it being undefined.
         */
        it("Can cause unexpected behavior when dealing with variables", function () {
            expect(x).toBeUndefined();
            var x = 10;
            expect(x).toEqual(10);
        });


    });
});

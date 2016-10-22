/* global describe beforeEach Truthiness Falsiness globalVariable public expect it variables Variable */
describe("variables", function() {
    var variable,
      truthy,
      falsy;

    beforeEach(function() {
      variable = Object.create(Variable);
      truthy = Object.create(Truthiness);
      falsy = Object.create(Falsiness);
    });

    describe("This is a basic demonstration of creating variables", function(){
        it("Creates a global variable when the var keyword is not used", function() {
            expect(globalVariable).not.toBeUndefined();
            expect(globalVariable).toBeDefined();
            expect(globalVariable).toBe(globalVariable);
        });
        it("Creates a global variable on the window object when the keyword is not used", function() {
            expect(globalVariable).toEqual(window.globalVariable);
        });

        it("Does not create a global Variable when using the var keyword", function() {
            var nonGlobalPrivate = nonGlobalPrivate ? nonGlobalPrivate : null;
            expect(nonGlobalPrivate).toBe(null);
        });
    });
    describe("This is all about the truthy nature of Javascript", function(){
        it("Thinks true is equal to true", function(){
          expect(truthy.true).toBeTruthy();
        });
        it("Thinks one is truthy", function (){
          expect(truthy.trueOne).toBeTruthy();
        });
        it("Thinks a string is truthy", function(){
          expect(truthy.trueString).toBeTruthy();
        });
        it("Thinks an object is truthy", function (){
          expect(truthy.trueObj).toBeTruthy();
        });
        it("Thinks a function is truthy", function(){
          expect(truthy.trueFunction).toBeTruthy();
        });
    });

    describe("This is about the conditional operators in Javascript", function(){
        it("Thinks Five is Greater Than Four", function(){
          var x;
          if (5 > 4) {
            x = true;
          }
          expect(x).toBeTruthy();
          expect(5 > 4).toBe(true);
        });
        it("Thinks an else statement is used when an if condition fails", function (){
          if (4 === 5) {
              //body.innerHTML = "There is no way that four is equal to five.<br/>" + body.innerHTML;
            console.log("There is no way that four is equal to five.");
          } else {
              console.log("Four does not equal five.");
          }
          expect(4===5).toBe(false);
        });
        it("Uses an else if statement if you want to test multiple conditions", function() {
          var x = 10;
          if (x === 9) {
            console.log("x is equal to " + x);
          } else if(x == 7) {
            console.log("x is equal to 7");
          } else if (x === 10) {
            console.log("X equals 10");
          }
          expect(x).toBe(10);
        });
        it("Thinks the first argument in a terniary operator is what we compare", function () {
          var x = 1 ? true : false,
            y = "some string";
          expect(x).toBe(true);
          x = typeof y === 'string' ? true: false;
          expect(x).toBe(true);
          x = typeof y === 'number' ? true: false;
          expect(x).toBe(false);

        });
        it("Thinks the second argument is called if the condition tested is false", function(){
          var x = 0 ? true: false;
          expect(x).toBe(false);
        });
        it("Thinks the second argument is called if the condition tested is false", function(){
          var x = 12 > 13;
          expect(x).toBe(false);

        });

    });

    describe("This is a basic demonstration of scope", function() {
       it("contains spec with an expectation", function() {
            expect(true).toBe(true);
        });
        it("Should not expose the private variable private", function() {
            expect(variable.private).toBe(undefined);
            expect(variable.private).toBeUndefined();
        });
        it("Should expose the Variable public variable", function() {
            expect(variable.innerPublic).not.toBeUndefined();
            expect(variable.innerPublic).toBe(true);
        });
        it("Should expose the global public variable", function(){
            expect(public).not.toBeUndefined();
            expect(public).toBeDefined();
            expect(public).toBe(true);
        });
    });
    describe("This is a basic demonstration of javaScript getters and setters", function(){
       it("Should be able to be set", function(){
          variable.inner = 'foo';
          expect(variable.value).toBe('foo');
       });
       it("Should have a default value if none is set", function(){
         expect(variable.value).toBe('Unknown');
       });
       it("Should use the better syntax", function(){
          variable.postProperty = 'better';
          expect(variable.postProperty).toBe("better");
       });
    });





});

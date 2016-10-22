/* global describe beforeEach Truthiness Falsiness globalVariable public expect it variables Variable */
describe("conditional Statements", function() {
    var x;
    beforeEach(function(){
      x = null;
    })
    describe("This is about the conditional operators in Javascript", function(){
        it("Thinks Five is Greater Than Four", function(){
          x = 5 > 4;
          expect(x).toBeTruthy();
          
          expect(x).toBe(true);
        });
        it("Thinks an else statement is used when an if condition fails", function (){
          x = 5 < 4;
          if (x) {
            expect(x).toBe(true);
          } else {
            expect(x).toBe(false);
          }
          if (!x) {
            expect(x).toBe(false);
          }
        });
        it("Uses an else if statement if you want to test multiple conditions", function() {
          x = 10;
          if (typeof x === "string") {
            expect(typeof x).toBe('string');
          } else if (typeof x === 'number') {
            expect(typeof x).toBe("number");
          } else {
            x = new Error("You did not enter a number or string");
            expect(x).toThrow();
          }
          expect(x).toBe(10);
        });
        it("Thinks the first argument in a terniary operator is what we compare", function () {
          x = 10 === 10 ? true : false;
          expect(x).toBe(true);
          x = 15 > 10 ? true : false;
          expect(x).toBe(true);
          x = 200;
          x = (isFinite(x) && !isNaN(x)) ? true : false;
          expect(x).toBe(true);
          
        });
        it("Thinks the second argument is called if the condition tested is false", function(){
          x = (1000 < 1) ? true : false;
          
          expect(x).toBe(false);          
        });
        
        
        
    });
});
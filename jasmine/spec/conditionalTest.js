/* global describe beforeEach Truthiness Falsiness globalVariable public expect it variables Variable */
describe("conditional Statements", function() {
    var x;
    describe("This is about the conditional operators in Javascript", function(){
        it("Thinks Five is Greater Than Four", function(){
          expect(x).toBeTruthy();
          
          expect(x).toBe(true);
        });
        it("Thinks an else statement is used when an if condition fails", function (){
          
          expect(x).toBe(false);
        });
        it("Uses an else if statement if you want to test multiple conditions", function() {
          
          expect(x).toBe(10);
        });
        it("Thinks the first argument in a terniary operator is what we compare", function () {
          
          expect(x).toBe(true);
          
          expect(x).toBe(true);
         
          expect(x).toBe(false);
          
        });
        it("Thinks the second argument is called if the condition tested is false", function(){
          
          expect(x).toBe(false);          
        });
        it("Thinks the second argument is called if the condition tested is false", function(){
          
          expect(x).toBe(false);
        });
        
        
    });
});
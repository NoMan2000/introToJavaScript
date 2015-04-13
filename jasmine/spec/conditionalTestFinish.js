/* global describe beforeEach Truthiness Falsiness globalVariable public expect it variables Variable */
describe("conditional Statements", function() {
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
          var x = 12 > 13 ? true : false;
          expect(x).toBe(false);
        });
        
        
    });
});
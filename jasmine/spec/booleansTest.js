/* global describe beforeEach Truthiness Falsiness globalVariable public expect it variables Variable */
describe("True / False", function() {
    var x;
    describe("This is all about the truthy nature of Javascript", function() {
        it("Thinks true is equal to true", function(){
          expect(x).toBeTruthy();
        });
        it("Thinks one is truthy", function() {
          expect(x).toBeTruthy();
        });
        it("Thinks a string is truthy", function() {
          expect(x).toBeTruthy();
        });
        it("Thinks an object is truthy", function () {
          expect(x).toBeTruthy();
        });
        it("Thinks a function is truthy", function() {
          expect(x).toBeTruthy();          
        });
        it("Thinks an empty array is truthy", function() {
          expect(x).toBeTruthy();
        });
    });
    describe("This is all about the falsy nature of JavaScript", function() {
       it("Thinks that false equals false", function() {
          expect(x).toBe(false);
          expect(x).toBeFalsy();
       });
       it("Thinks that 0 falsy", function() {
          expect(x).toBe(0);
          expect(x).toBeFalsy();
       });
       it("Thinks that an empty string is falsy", function() {
          expect(x).toBe('');
          expect(x).toBeFalsy();
       });
       
    });
});
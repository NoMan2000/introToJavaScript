/* global describe beforeEach Truthiness Falsiness globalVariable public expect it variables Variable */
describe("True / False", function() {
    describe("This is all about the truthy nature of Javascript", function() {
        it("Thinks true is equal to true", function(){
          var x = true;
          expect(x).toBeTruthy();
        });
        it("Thinks one is truthy", function() {
          var x = 1;
          expect(x).toBeTruthy();
        });
        it("Thinks a string is truthy", function() {
          var x = 'foo';
          expect(x).toBeTruthy();
        });
        it("Thinks an object is truthy", function () {
          var x = {};
          expect(x).toBeTruthy();
        });
        it("Thinks a function is truthy", function() {
          var x = function x(){};
          expect(x).toBeTruthy();          
        });
        it("Thinks an empty array is truthy", function() {
          var x = [];
          expect(x).toBeTruthy();
        });
    });
    describe("This is all about the falsy nature of JavaScript", function() {
       it("Thinks that false equals false", function() {
          var x = false;
          expect(x).toBe(false);
          expect(x).toBeFalsy();
       });
       it("Thinks that 0 falsy", function() {
          var x = 0;
          expect(x).toBe(0);
          expect(x).toBeFalsy();
       });
       it("Thinks that an empty string is falsy", function() {
          var x = '';
          expect(x).toBe('');
          expect(x).toBeFalsy();
       });
       
    });
});
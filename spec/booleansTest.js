/* global describe beforeEach Truthiness Falsiness globalVariable public expect it variables Variable */
describe("True / False", function() {
    var x;
    beforeEach(function(){
      x = null;
    });
    describe("This is all about the truthy nature of Javascript", function() {
        it("Thinks true is equal to true", function(){
          x = true;
          expect(x).toBe(true);
          expect(x).toBeTruthy();
        });
        it("Thinks one is truthy", function() {
          x = 1;
          expect(x).toBe(1);
          expect(x).toBeTruthy();
        });
        it("Thinks a non-empty string is truthy", function() {
          x = 'a string';
          expect(typeof x).toBe("string");
          expect(x).toBeTruthy();
        });
        it("Thinks an object is truthy", function () {
          x = {};
          expect(typeof x).toBe("object");
          expect(x).toBeTruthy();
        });
        it("Thinks a function is truthy", function() {
          x = function(){};
          expect(typeof x).toBe('function');
          expect(x).toBeTruthy();          
        });
        it("Thinks an empty array is truthy", function() {
          x = [];
          expect(Array.isArray(x)).toBe(true);
          expect(x).toBeTruthy();
        });
    });
    describe("This is all about the falsy nature of JavaScript", function() {
       it("Thinks that false equals false", function() {
          x = false;
          expect(x).toBe(false);
          expect(x).toBeFalsy();
       });
       it("Thinks that 0 falsy", function() {
          x = 0;
          expect(x).toBe(0);
          expect(x).toBeFalsy();
       });
       it("Thinks that an empty string is falsy", function() {
          x = '';
          expect(x).toBe('');
          expect(x).toBeFalsy();
       });
       
    });
});
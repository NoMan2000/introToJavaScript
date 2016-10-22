/* global i arr arr2 len describe beforeEach Truthiness Falsiness globalVariable public expect it variables Variable */
describe("While, for, for in, forEach, do-while and other loops", function() {
    var i,
        arr = [],
        arr2 = [],
        len,
        element,
        obj,
        prop,
        x;
    
    beforeEach(function() {
        i = 0,
        arr = ['one','two','three'],
        arr2 = ['three', 'four', 'five'],
        len = arr.length;
    });
    
    describe("This is the basic for loop", function() {
        it("Should push items to the end of an array", function () {
          arr = ['this', 'that', 'the other'];
          len = arr.length;
          var arr3 = [];
          for (i = 0; i < len; i += 1) {
            if (i === 0) {
                expect(arr[i]).toEqual('this');
            }
            if (i === 1) {
                expect(arr[i]).toEqual('that');
            }
            if (i === 2) {
                expect(arr[i]).toEqual('the other');
            }
          }
          for (i = 0; i < len; i += 1) {
            arr3.push(arr[i]);
          }
          
          expect(arr).toContain("that");
          expect(arr3).toContain("that");
          expect(arr).not.toContain("baz");
        });
        it("Should loop for the amount of times that it takes to complete", function (){
          
            for (i = 0; i < len; i += 1) {
              x = i;
              // 0, 1, 2
            }
            x = len - 1;
            var y = arr[len-1];
            // Objective-C
            
            expect(x).toEqual(2);
        });
    });
    describe("The while loop is more terse, but more prone to infinite loops", function (){
        it("Should loop until the object is complete", function () {
            i = 0;
            while (arr[i]) {
                expect(i).toBe(i);
                i += 1;
            }
            expect(i).toBe(len);
        }); 
    });
    describe("The do-while loop is rare in JavaScript, but it makes sure a condition executes at least once", function (){
       it("Should execute at least once", function(){
          var someExpectedAnswer = 0;
          do {
              someExpectedAnswer += 1;
          } while (someExpectedAnswer === 0);
           expect(someExpectedAnswer).toBe(1);
       });
    });
    
    describe("The for in loop is meant for testing objects", function() {
       it("Should loop through all enumerable properties of an object", function () {
          var obj = {
           a: 1,
           b: 'foo',
           c: 'blah'
         },
         prop;
         // protected, private;
         // defineProperties.
         // writable: false
         for (prop in obj) {
             if (obj.hasOwnProperty(prop)) {
                expect(obj[prop]).toBeDefined(); 
             }
         }
         
       });
    });
    describe("The forEach loop is very handy, but it must be run on an actual Array object", function (){
       it("Should loop through the elements of an array", function (){
            arr.forEach(function (value, index, array) {
              expect(value).toBe(array[index]);
            });
           
       }); 
    });
    
    
    
});
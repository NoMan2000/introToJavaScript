/* global describe beforeEach Truthiness Falsiness globalVariable public expect it variables Variable */
describe("variables", function() {
    'use strict';
    var foo = 'other foo',
        nonGlobal = 1000;
    window.foo = 123;
    // foo = 123;
    // window.foo = 123;
    
    describe("This is a basic demonstration of creating variables", function(){
        it("Creates a global variable when the var keyword is not used", function() {
            expect(window.foo).not.toBeUndefined();
            expect(window.foo).toBeDefined();
            expect(window.foo).toBe(123);
            
            expect(foo).not.toBeUndefined();
            expect(foo).toBeDefined();
            expect(foo).toBe('other foo');
        });

        it("Does not create a global Variable when using the var keyword", function() {
           window.nonGlobal;
            
            expect(window.nonGlobal).not.toBeDefined();
            expect(window.nonGlobal).toBeUndefined();
            expect(window.nonGlobal).toBe(undefined);
            
            expect(nonGlobal).not.toBeUndefined();
            expect(nonGlobal).toBeDefined();
            expect(nonGlobal).toBe(1000);
            
        });
    });
    
});

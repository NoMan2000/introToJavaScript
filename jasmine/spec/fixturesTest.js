/* global describe it expect readFixtures MouseEvent setFixtures beforeEach loadFixtures CustomEvent jasmine*/

jasmine.getFixtures().fixturesPath = 'fixtures';
describe("Fixtures", function(){
   beforeEach(function() {
    loadFixtures('kitchen.html');
   });
   describe("Fixture tests", function() {
      it("Offers three functions", function(){
         expect(readFixtures).toBeDefined();  
          expect(setFixtures).toBeDefined();
          expect(loadFixtures).toBeDefined(); 
       }); 
       it("Can get elements on the page", function(){
        var ul = document.getElementsByTagName('ul')[0];
        expect(ul).toExist();
       });
       it("Throws errors when something does not exist and you try to access a property of it.", function () {
          var foo = document.getElementsByTagName('foo')[0];
          function throwError() {
           foo.innerHTML = 'baz';
          }
          expect(throwError).toThrow();
       });
       it("Error can be stopped by checking.", function () {
          var foo = document.getElementsByTagName('foo'),
           x;
          function throwError() {
            if (foo.innerHTML) {
              foo.innerHTML = 'baz';
            }
          }
          x = throwError();
          expect(x).toBe(undefined);
       });
       it("Can trigger regular events in JavaScript", function(){
          
          var button = document.getElementsByTagName('button')[0];
          var event = new MouseEvent('click', {
          'view': window,
          'bubbles': true,
          'cancelable': true
         });
         button.addEventListener('click', function (e) {
          e.preventDefault();
          button.innerHTML = 'click has been triggered';
         },false);
         
         button.dispatchEvent(event);
         expect(button.innerHTML).toMatch("click has been triggered");
       });
       
       it("Can be more terse to use jQuery", function() {
        var button = $("button").eq(0);
        $(button).on('click', function(e) {
           e.preventDefault();
           $(button).html("click has been triggered again");
        });
        $(button).trigger('click');
        expect(button.html()).toMatch("click has been triggered again");
       });
       
       it("Can trigger custom events", function(){
        var mainH1 = document.getElementsByClassName('h1Begin')[0];
        
        document.addEventListener("testEvent", function(e) {
          console.log(e.detail); // Prints "Example of an event"
          mainH1.innerHTML = e.detail;
          
        });
    
         // Create the event
         var event = new CustomEvent("testEvent", { "detail": "Example of an event" });
      
         // Dispatch/Trigger/Fire the event
         document.dispatchEvent(event);
         expect(mainH1.innerHTML).toMatch("Example of an event");
       }); 
   });

   
   
});
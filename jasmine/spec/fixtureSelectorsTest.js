/* global describe it expect readFixtures MouseEvent node setFixtures beforeEach afterEach Node loadFixtures CustomEvent jasmine*/

jasmine.getFixtures().fixturesPath = 'fixtures';
describe("DOM Node Traversal", function() {
   var bodyEl,
        childEl,
        nextEl,
        prevEl;
   beforeEach(function() {
        loadFixtures('kitchen.html');
        var newDiv = document.createElement('div'),
            body = document.getElementsByTagName('body')[0];
        newDiv.setAttribute('id', 'newDiv');
        newDiv.innerHTML = "<p class='testClass'>This is a test class.</p>" +
                           "<p class='testClass'>As is this</p>" +
                           "<span class='testClass'>This is just to test the DOM</span>";
        body.appendChild(newDiv);
   });
   afterEach(function(){
       var newDiv = document.getElementById('newDiv');
       newDiv.parentNode.removeChild(newDiv);
   });
   
   describe("DOM Selectors", function() {
       it("Should be able to get all child nodes", function() {
            bodyEl = document.getElementsByTagName('body')[0];
            childEl = bodyEl.childNodes;
            expect(childEl.length).toBeDefined();
       });
       it("Should be able to get all children", function() {
            var len;
            bodyEl = document.getElementsByTagName('body')[0];
            childEl = bodyEl.children;
            len = childEl.length;
            expect(len).toEqual(bodyEl.childElementCount);
       });
       it("Should be able to get the first Node", function() {
           bodyEl = document.getElementsByTagName('body')[0];
           childEl = bodyEl.firstChild;
           expect(childEl.nodeType).toEqual(Node.TEXT_NODE);
       });
       it("Should be able to get the first Element", function() {
           bodyEl = document.getElementsByTagName('body')[0];
           childEl = bodyEl.firstElementChild;
           expect(childEl.nodeType).toEqual(Node.ELEMENT_NODE);
       });
       it("Should be able to get the last Node", function() {
           bodyEl = document.getElementsByTagName('body')[0];
           childEl = bodyEl.lastChild;
           expect(childEl.nodeType).toBeDefined();
       });
       it("Should be able to get the last Element", function() {
           bodyEl = document.getElementsByTagName('body')[0];
           childEl = bodyEl.lastElementChild;
           expect(childEl.nodeType).toEqual(Node.ELEMENT_NODE);
       });
       it("Should be able to get the next Sibling Node", function() {
           bodyEl = document.getElementsByTagName('body')[0];
           nextEl = bodyEl.nextSibling;
           expect(nextEl).toBe(null);
       });
       it("Should be able to get the next Sibling Element", function() {
           bodyEl = document.getElementsByTagName('body')[0];
           nextEl = bodyEl.nextElementSibling;
           expect(nextEl).toBe(null);
       });
   });
   
});
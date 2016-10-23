/* global describe beforeEach expect it */
describe("An array is a placeholder for sequential data in JavaScript.  JavaScript only has one type of array, an indexed array", function () {

    it("Can create a basic array", function () {
        var arr = [1, 2, 3, 4];
        expect(arr[2]).toEqual(3);
    });

    it("Can add values to the end of an array", function () {
        var arr = [1, 2, 3, 4];
        arr.push(5);
        expect(arr[4]).toEqual(5);
        expect(arr.length).toEqual(5);
    });

    /**
     * Operations like array.pop and array.push are known as destructive modifications.
     * Instead of returning a new copy of the array, they modify the current array.
     */
    it("Can remove values from the end of an array", function () {
        var arr = [1, 2, 3, 4],
            removedVal = arr.pop();
        expect(arr.length).toEqual(3);
        expect(removedVal).toEqual(4);
    });

    /**
     * Adding items to the front of an array is less common than adding them to the end.
     */
    it("Can add values to the front of an array", function () {
        var arr = [1, 2, 3, 4];
        arr.unshift(3);
        expect(arr[0]).toEqual(3);
        expect(arr.length).toEqual(5);
    });

    it("Can remove values from the front of an array", function () {
        var arr = [1, 2, 3, 4],
            valueFromFront =  arr.shift();
        expect(valueFromFront).toEqual(1);
        expect(arr.length).toEqual(3);
    });

    /**
     * Demonstrate the difference between slice and splice.
     * Splice is a destructive modification, it changes the original array.
     * Slice is a non-destructive modification, it returns a "shallow" copy.
     * A shallow copy means only the first-level of items are copied over.  If those first-level items are
     * pointing to an object, that object will still be linked by reference.
     */
    it("Can remove elements from a particular point in an array", function () {
        var arr = [1, 'hey', 2, 3],
            heyLocation = arr.indexOf('hey'),
            removeHey = arr.splice(heyLocation, 1);
        expect(heyLocation).toEqual(1);
        expect(arr.length).toEqual(3);
        expect(removeHey[0]).toEqual('hey');
        expect(removeHey.length).toEqual(1);
        expect(arr.indexOf('hey')).toEqual(-1); // Note that "hey" has been removed.
    });

    it("Can copy elements from a particular point in an array", function () {
        var arr = [1, 'hey', 2, 3],
            heyLocation = arr.indexOf('hey'),
            // Notice that slice requires a starting point and an ending point
            // Also note that it returns a new array
            copyHey = arr.slice(heyLocation, heyLocation + 1);
        expect(heyLocation).toEqual(1);
        expect(arr.length).toEqual(4);
        expect(copyHey[0]).toEqual('hey');
        expect(copyHey.length).toEqual(1);
        expect(arr.indexOf('hey')).toEqual(heyLocation); // Note that "hey" is still in the original element.
    })

});

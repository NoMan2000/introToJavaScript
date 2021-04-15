/* global describe beforeEach expect it */
describe("How Strings work and the methods available", function () {
    it("Can uppercase a string", function () {
        var testString = "a lowercased string",
            transformedString = testString.toUpperCase();
        expect(transformedString).toEqual("A LOWERCASED STRING");
    });

    it("Can lowercase a string", function () {
        var testString = "AN UPPERCASED STRING",
            transformed = testString.toLowerCase();
        expect(transformed).toEqual("an uppercased string");
    });
    /**
     * Note that the beginning index is always 0.
     */
    it("Can reference a single character", function () {
        var testString = 'a random string',
            char = testString[0];
        expect(char).toEqual('a');
    });

    it("Can find the position of a set of characters", function () {
        var testString = "Hey there",
            therePosition = testString.indexOf("there");
        expect(therePosition).toEqual(4);
    });

    it("Will show -1 for values that are not found in a set of characters", function () {
        var testString = "Hey there",
            nonExistentPosition = testString.indexOf("unknown");
        expect(nonExistentPosition).toEqual(-1);
    });

    it("Can get a substring of characters", function () {
        var testString = "Hey there",
            tPosition = testString.indexOf("t"),
            thereSubString = testString.substr(tPosition);
        expect(thereSubString).toEqual("there");
    });

    it("Can show the length of characters in a string", function () {
        var testString = '1234',
            testLen = testString.length;
        expect(testLen).toEqual(4);
    });

    it("Can concatenate two strings", function (){
        var string1 = "Hello ",
            string2 = "World",
            newString = string1 + string2;
        expect(newString).toEqual("Hello World");
    });
    /**
     * This is the source of many JavaScript errors
     */
    it("Will give an unexpected result if you concatenate a string and a number", function () {
        var stringOne = '1',
            numberOne = 1,
            combinedString = stringOne + numberOne;
        expect(combinedString).toEqual('11');
    });

    it("Shows how to explicitly coerce values into strings", function () {
        var stringOne = String(1),
            stringTwo = 1 + '';
        expect(stringOne).toEqual('1');
        expect(stringTwo).toEqual('1');
    });

    it("Can convert a string to an array", function () {
        var string = 'one two three four',
            arr = string.split(' ');
        expect(arr[0]).toEqual('one');
        expect(arr.length).toEqual(4);
    });
    /**
     * Trimming whitespace is often used when you have users enter their username or other information
     * where they may accidentally press the spacebar.
     * JavaScript has no rTrim or lTrim methods, these are usually added in libraries.
     */
    it("Can trim leading whitespace", function () {
        var whitespace = " This is an example of unnecessary whitespace ";
        expect(whitespace.trim()).toEqual("This is an example of unnecessary whitespace");
    });

    /**
     * String replace will replace either a string or a regular expression.  Regular expressions are covered in
     * Chapter Two.
     */
    it("Can replace a string", function () {
        var newString = "cat".replace("cat", "dog");
        expect(newString).toEqual("dog");
    });

    it("Can do multi-line strings", function () {
        var string = "One and two " +
                "three and four",
            secondString = "One and two \
                three and four";
            /* This works because the backslash key will escape the empty space.
             * It will also add whitespace as part of the string
             * It is not recommended to do this.
             * The second string is very fragile, adding one space will make the test fail.
             */
        expect(string).toEqual("One and two three and four");
        expect(secondString).toEqual("One and two                 three and four");
    });


});

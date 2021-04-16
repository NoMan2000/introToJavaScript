/* global describe beforeEach expect it */
describe("Regular Expressions are powerful ways to check strings for specific patterns", function () {
    /**
     * The literal version does not support dynamic lookup.  This is more efficient, but also limits uses if you do not
     * know what value is going to be passed in to check against.
     */
    it("Can validate an expression only contains alpha characters with the literal version", function () {
        var charactersOnlyRegex = /^[a-zA-Z]+$/,
            characterString = 'aDog',
            numString = '11',
            resultCharacters = charactersOnlyRegex.test(characterString),
            resultNumbers = charactersOnlyRegex.test(numString);
        expect(resultCharacters).toEqual(true);
        expect(resultNumbers).toEqual(false);
    });
    /**
     * If you need to perform dynamic checks where a string is passed in as an argument, then this is your version.
     */
    it("Can validate an expression only contains alpha characters with the Constructor version", function () {
        var charactersOnlyRegex = new RegExp("^[a-zA-Z]+$"),
            characterString = 'aDog',
            numString = '11',
            resultCharacters = charactersOnlyRegex.test(characterString),
            resultNumbers = charactersOnlyRegex.test(numString);
        expect(resultCharacters).toEqual(true);
        expect(resultNumbers).toEqual(false);
    });
    /**
     * The exec option allows you to group multiple matches, which is why it returns as an array.
     * This is one of the most powerful features of regexs, but it's an advanced topic.
     */
    it("Can find a string and will return it as an array", function () {
        var reg = /john/,
            foo = reg.exec("foo"),
            john = reg.exec("john");
        expect(foo).toEqual(null);
        expect(john).toEqual(jasmine.any(Array));
        expect(john[0]).toEqual('john');
    });
});

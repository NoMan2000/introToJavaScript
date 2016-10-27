describe("Chapter one tests", function () {
    /**
     * If the name throws an error, the variable will be undefined
     */
    it("Can display valid variable names", function () {
        var x = eval(1);
        var y = eval(z = 2);
        expect(x).toEqual(1);
        expect(y).toEqual(2);
        try {
            var numberFirst = eval("1Name = 1");
        } catch (ignore) {}
        expect(numberFirst).toBeUndefined();

        try {
            var $name = 1;
        } catch (ignore) {}

        expect($name).toEqual(1);

        try {
            var exclamation = eval("name! = 1");
        } catch (ignore) {}
        expect(exclamation).toBeUndefined();

        try {
            var questionMark = eval("name? = 1");
        } catch (ignore){}
        expect(questionMark).toBeUndefined();
        try {
            var nameUnderscore = eval("name_$ = 1");
        } catch(ignore) {}
        expect(nameUnderscore).toEqual(1);

    });
});

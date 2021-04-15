/* global describe beforeEach expect it */
describe("The Date Object", function () {
    /**
     * JavaScript's Date and Time functions are awful.  It's recommended to use moment.js if you need to work with time.
     */
    it("Only has a Constructor version", function () {
        var x = new Date();
        expect(x).toEqual(jasmine.any(Date));
    });

    it("Can constructor a date from parameters", function () {
        var d = new Date("1970/3/22"),
            yr = d.getYear(),
            day = d.getDate(), // getDay doesn't do what it sounds like it does.  It gets the day of the week 0 - 6
            month = d.getMonth();
        expect(yr).toEqual(70);
        expect(day).toEqual(22);
        expect(month).toEqual(2); // 0 is the first day of the month
    });
});

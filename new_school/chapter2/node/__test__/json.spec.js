/* global describe beforeEach expect it */
describe("JSON is a data format meant to share information between servers and clients.  It is the most popular data exchange format currently", function () {
    // Note that JSON is a utility class

    it("Can encode JavaScript objects to JSON", function () {
        var obj = {name: "Bob"},
            json = JSON.stringify(obj);
        expect(json).toEqual('{"name":"Bob"}');
    });

    it("Can decode JSON to Javascript", function() {
        var json = '{"name":"Bob"}',
            parse = JSON.parse(json);
        expect(parse.name).toEqual("Bob");
    });


    it("Can perform a special operation to transform or remove values", function () {
        var obj = {
            one: 1,
            innerObj: {
                two: 2,
                four: 4
            },
            two: 2,
            three: 3,
            four: 4
        },
            b,
            json = JSON.stringify(obj);
        /**
         * Even though it says differently in the documentation, returning undefined or not returning a value at all
         * can cause the entire object to become undefined.
         */
        b = JSON.parse(json, function (name, value) {
            if (value % 2 === 0) {
                return -value;
            }
            return value;
        });
        expect(b.two).toEqual(-2);


    });

    it("Will throw an error if JSON cannot be parsed", function () {
        var json = {};
        try {
            JSON.parse(json);
        } catch (err) {
            expect(err).toEqual(jasmine.any(Error));
        }
    });
});

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

    it("Can perform a special parsing operation", function () {

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

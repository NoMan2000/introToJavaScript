/* global describe beforeEach expect it */
describe("Show how JavaScript handles Booleans", function () {
    var x;
    describe("Truthy is a value that can be coerced into being true, but fails a strict equality check", function () {
        it("Shows how explicit type-coercion works", function () {
            var a = Boolean(true),
                b = Boolean(1),
                c = Boolean("string"),
                d = Boolean({}),
                e = Boolean(function () {
                }),
                f = Boolean([]);
            expect(a).toEqual(true);
            expect(b).toEqual(true);
            expect(c).toEqual(true);
            expect(d).toEqual(true);
            expect(e).toEqual(true);
            expect(f).toEqual(true);
        });

        it("Shows alternative syntax for type coercion", function () {
            var a = !!1,
                b = !!{};
            expect(a).toEqual(true);
            expect(b).toEqual(true);
        });

        it("Thinks true is coercible to true", function () {
            x = true;
            expect(x).toBeTruthy();
        });

        it("Thinks one is coercible", function () {
            x = 1;
            expect(x).toBeTruthy();
        });

        it("Thinks a non-empty string is truthy", function () {
            x = 'a string';
            expect(x).toBeTruthy();
        });

        it("Thinks an object is truthy", function () {
            x = {};
            expect(x).toBeTruthy();
        });

        it("Thinks a function is truthy", function () {
            x = function () {
            };
            expect(x).toBeTruthy();
        });

        it("Thinks an empty array is truthy", function () {
            x = [];
            expect(x).toBeTruthy();
        });
    });

    describe("Falsy is a value that can be coerced into being false, but will fail a strict equality check", function () {

        it("Thinks that false equals false", function () {
            x = false;
            expect(x).toBeFalsy();
        });

        it("Thinks that 0 is falsy", function () {
            x = 0;
            expect(x).toBeFalsy();
        });

        it("Thinks that an empty string is falsy", function () {
            x = '';
            expect(x).toBeFalsy();
        });

    });
});

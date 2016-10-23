/* global describe beforeEach expect it */describe("Functions are one of the most powerful feature of JavaScript", function () {
    it("Can return a value passed in", function () {
        var addFunction = function(a, b) {
            return Number(a) + Number(b);
        };
        expect(addFunction(1, 2)).toEqual(3);
    });
    /**
     * It's common practice for a function to use an outer value.  Referencing an outer value is known as creating a
     * closure.
     */
    it("Can return a value in the outerScope", function () {
        var a = 1,
            addFunction = function(b) {
                return Number(a) + Number(b);
            };
        expect(addFunction(2)).toEqual(3);
    });

    /**
     * Objects are copied by reference, so setting a variable equal to an object will make the object
     * point to the same object, so changing one will automatically change the other.
     * To prevent this, you need to clone an object.
     *
     * In this example, we will first point to the same object, then we will create a new object by calling the function.
     */
    it("A function must be invoked to return a new object, otherwise the object gets copied by reference", function () {
        var a = function () {
            return {
                firstName: "Bob"
            }
        },
            b = a(),
            c = b,
            d = c;
        expect(b.firstName).toEqual("Bob");
        b.firstName = "Bill";
        expect(b.firstName).toEqual("Bill");
        expect(d.firstName).toEqual("Bill");

        b = a();
        c = a();
        d = a();
        b.firstName = "Bill";
        expect(b.firstName).toEqual("Bill");
        expect(c.firstName).toEqual("Bob");
        expect(d.firstName).toEqual("Bob");
    });

    it("Can be used to create 'private' variables", function () {
        var Person = function () {
            /**
             * This is a common way to make sure people either use the new keyword or
             * it happens automatically
             */
            if (!this instanceof Person) {
                return new Person();
            }
            var firstName,
                lastName,
                getFirstName = function () {
                    return firstName;
                },
                setFirstName = function (name) {
                    firstName = name;
                },
                setLastName = function (name) {
                    lastName = name;
                },
                getLastName = function () {
                    return lastName;
                };
            return {
                getFirstName: getFirstName,
                getLastName: getLastName,
                setFirstName: setFirstName,
                setLastName: setLastName
            };
        },
            Bob = new Person();
        Bob.setFirstName("Bob");
        Bob.firstName = "Bill";
        // Note that trying to set the property directly will still result in the version from the setter to be used.
        expect(Bob.getFirstName()).toEqual("Bob");
    });


});

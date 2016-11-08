/* global describe beforeEach expect it */
describe("Functions are one of the most powerful feature of JavaScript", function () {

  /**
   * Don't worry if this seems weird.
   */
  var cloneObject = function cloneObject(obj) {
      return JSON.parse(JSON.stringify(obj));
  };

  it("Can return a value passed in", function () {
        debugger;
        var addFunction = function(a, b) { // parameters
            return Number(a) + Number(b);
        };
        expect(addFunction(1, 2)).toEqual(3); // arguments
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
        expect(d.firstName).toEqual("Bill"); // Notice that d.firstName is equal to Bill and not to Bob.

        b = a();
        c = a();
        d = a();
        b.firstName = "Bill";
        expect(b.firstName).toEqual("Bill");
        expect(c.firstName).toEqual("Bob");
        expect(d.firstName).toEqual("Bob"); // Notice here that d.firstName is equal to Bob and not Bill.
    });

    it("Can show a demo of cloning an object", function () {
        var Person = function (firstName, lastName) {
          this.firstName = firstName;
          this.lastName = lastName;
        },
        bob = new Person('bob', 'doe'),
        bill = bob;

        expect(bob.firstName).toEqual('bob');
        expect(bill.firstName).toEqual('bob');
        expect(bill).toBe(bob); // Both bill and bob are the same object.

        bill = cloneObject(bob);
        expect(bill).not.toBe(bob);
        expect(bill.firstName).toEqual('bob');
        expect(bill.lastName).toEqual('doe');

        bob.firstName = 'Bobby';
        expect(bob.firstName).toEqual('Bobby');
        expect(bill.firstName).toEqual('bob');

    });

    it("Can show how primitive values are assigned by value", function () {
       var a = 'john';
       b = a;
       b = 'bill'; // a will be 'john' and b will be 'bill'
       expect(a).not.toEqual(b);
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
                    return this; // Returning "this" is called "method-chaining" or "fluent modeling".  It requires the new keyword to work properly, hence the instanceof setting above.
                },
                setLastName = function (name) {
                    lastName = name;
                    return this;
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
            bob = new Person(),
            jane = Person();
        bob.setFirstName("Bob");
        bob.firstName = "Bill";

        jane.setFirstName("Jane")
          .setLastName('Doe');
        // Note that trying to set the property directly will still result in the version from the setter to be used.
        expect(bob.getFirstName()).toEqual("Bob");
        expect(jane.getFirstName()).toEqual('Jane');
        expect(jane.getLastName()).toEqual('Doe');
    });


});

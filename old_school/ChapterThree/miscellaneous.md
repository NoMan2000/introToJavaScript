# Logical Expressions

[Logical Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)

[Operator Precedence and Associativity](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

# Comparisons

## The if statement

The if statement evaluates an expression and executes the code in the `block` or between the opening and curly braces.

    if (true) {
      // Do everything inside of here.
    }

The `else if` statement executes if the first statement is true.  Notice that the `else if` **does not** fall-through.  The code will stop execution when the first block is true.

    if (true) {
      // do something
    } else if (true) {
      // this block of code will never execute
    }

The `else` statement executes if nothing in the `if` or `else if` chain is executed.

    if (false) {
      // this does not execute
    } else {
      // this executes
    }

## Switch statement

The `switch` statement executes on a `truthy` comparison.  The `switch` statement, at least in JavaScript, does allow for fall-through.  There is the "good" fall-through, which essentially acts as a `logical or` statement, and the bad fall-through, which executes multiple blocks of code.

    switch (variable) {
      case 1:
        // do something
        break;
      case 2:
        // do something
        // Bad fall-through
      case 3:
      case 4:
        // do something
        // The good fall-through
        break;
    }

JavaScript can compare either strings, numbers, or booleans.  If you want to compare a more interesting result.

var x = 20;

    switch (true) {
      case (x > 20):
         // do something
         break;
      case (x <= 20):
        // this code executes.
        break;
      default:
        // do something else.
        break;
    }

However, this is what's known as `non-idiomatic programming`.  Even though you can do this to execute more interesting code, the syntax is not what another programmer would expect, leading to difficulty understanding your intent.

## Loops

The semi-colon is used to terminate a part of the `for` loop.  You can have multiple conditions inside of a for loop as in the following example:

    for (var i = 0, j = 0; i < 1 && j < 10; i += 1, j += 1) {
      // Do something here
    }

In this version, both i and j will be set to 0, then the condition will execute so long as i is less than one and j is less than 10, and finally, each pass through the loop will increment both j and i by one.  You can also decrement by any arbitrary number as well.

You can also run a forever loop like this:

    for (;;) {
      // This will never end.
    }

If you run a break statement inside of an inner loop, it will not exit the entire loop.  To do that, you must use a label.

    for (var i = 0; i < 100; i += 1) {
       for (var j = 0; j < 100; j += 1) {
         break;
       }
       console.log("I am still going to be hit");
    }

The console statement will run 100 times.

    outer:
    for (var i = 0; i < 100; i += 1) {
       inner:
       for (var j = 0; j < 100; j += 1) {
         break outer;
       }
       console.log("I am never going to be hit");
    }

The console.log statement will never execute.

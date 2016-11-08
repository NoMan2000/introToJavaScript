# Miscellaneous Notes

## Dealing with Types

Python uses what's known as `duck-typing` to understand a value passed in.  Unlike Java, that requires an explicit declaration:

  public String function getGraduationDateToString(Calendar yourGraduationDate)
  {
    String gradString = String.valueOf(yourGraduation.YEAR);
    return gradString;
  }

Python will not check what type of object gets passed in.  There are ways to create `Interfaces` in Python, but they are generally rare.  Equivalent Python:

  def get_graduation_date_to_string(yourGraduation)
    return str(yourGraduation.YEAR)

So long as a method exists or property exists, Python will invoke it.  The term `duck-typing` means so long as whatever is passed to the method has the method or property the function is invoking, Python will not raise an error.

We do not have to specify that we are expecting an object of type Calendar, but we do have to explicitly cast it as a string using `str` to get the correct value back.

If there is no `YEAR` property on the object passed in, Python will throw an error, or raise an exception to use Python's terminology.

The equivalent JavaScript:

  function getGraduationDateToString(yourGraduation) {
    return String(yourGraduation.YEAR);
  }

JavaScript will not throw an error and will return `"undefined"` as a string.

## The Window object

In the browser, trying to create a variable without using the keyword `var` attaches a variable to the global object.  The `use strict` statement is a way of turning that off, and NodeJS does this by default.

## Variables

Literally anything that can vary.  This is opposed to `constants`, which cannot change.

# Scoping

## Lexical Scoping

JavaScript uses `lexical scoping` to understand the `scope` of a value.  `Scope` refers to the `lifetime` and `visibility` of a variable.  `Lexical` refers to each variable being visible at the function level.  Each inner function maintains a reference to variables in the outer function, known as a `closure`.  But variables in the inner scope are not accessible to the outer scope.  It is considered best practice to make your variables as local as possible and to avoid passing around large numbers of references.

## Block Scoping

In ES6, JavaScript introduced the keyword `let`, which creates a block scope.  A block-scoped variable is delimited by a set of braces `{}` instead of by a function scope `function newfunction () {}`

# Hoisting

Functions can be written as `function expressions`.

    var func = function () { // Do something here. };

Or they can be written as `function declarations`.

    func doSomething() {}

When using `function declarations`, the code is hoisted to the enclosing function, or to the global object (`window`).  This means you can use a function before it's been defined.  The reason for this is because of what's known as `mutually recursive function calls`, where `function a` needs to call `function b`, and `function b` needs to call `function a`.  Since both functions call each other, there needs to be a way to load these functions into memory before they are actually invoked in the code.

Generally, it is recommended to use `function expressions`, since they make the code easier to reason about, although some people like being able to call functions at the top of the code.

# Strings and character arrays.

Many languages do not have strings as a primitive value.  Rather, they implement strings as an array of characters.  This is what JavaScript does, and you can test it by doing this:

    var x = "string";
    x[0]; // Will output 's'

This is why `var x = new String("string");` will look strange in the console, it's showing the array of characters.

# Jasmine syntax

- `.toEqual` is equivalent to `==`
- `.toBe` is equivalent to `===`
- `.not` is equivalent to `!`

# Whitespace Insensitive

These two lines of code are equivalent:

  var x = function () {
    return "Some value";
  }

  var x=function(){return "some value";}

Some languages like Python use whitespace for significant markers.  Because JavaScript can strip white space and not change the meaning, there are `minifiers` that will strip out everything they can to make the code smaller, since JavaScript on the web has to be downloaded, and the smaller the download size the faster the page will load.

# Escape Sequence

`\n` means "New Line."
`\r` means "carriage return"
`\t` means 'tab key'

There are a few others, but you may occassionally come across these in code.

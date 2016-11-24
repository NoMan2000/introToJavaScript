# Functions

- Functions are the most powerful feature of JavaScript.  The most important feature of JavaScript functions is that they are closures.  Each function in JavaScript retains access to any variable in the outer scope.  
- JavaScript uses lexical scoping rules when using the `var` keyword.  This means that when using `var`, the variable is only bound to the current function.  Any inner function can access this variable.
- Using `var` outside of a function results in the variable being attached to the window.  In Node, this doesn't happen.
- Functions can either be directly invoked or invoked with the `new` keyword.  If the `new` keyword is required, then the variable name begins with an uppercase letter.  I.e. `Person = function (firstname){}` instead of `person = function (firstname){}`.
- JavaScript uses the `this` keyword to reference the current execution context.  Unfortunately, it is confusing, even advanced JavaScript programmers get it wrong.  In ES6, they added a `class` constructor to help make it more similar to other OOP languages.
- Fortunately, there are numerous JavaScript design patterns like the `module pattern` that make it easier to deal with JavaScript objects than attempting to implement a classic OOP (Object-Oriented Programming) paradigm on a language.  It is beyond the scope of this course to talk about JavaScript design patterns.
- If the same variable name is used in both the outer scope and the inner scope, then the variable in the inner scope will temporarily `shadow` the variable.  Consider the following two pieces of code.
```
var outerVariable = 1,
  a = function () {
     var x = outerVariable; // x will equal 1
  },
  otherVariable = outerVariable + 1, // otherVariable will equal 2

```
Because the outer variable is not redeclared in the inner function, it is used.  However in this code:
```
var outerVariable = 1,
  a = function () {
    var outerVariable = 'new variable';
    x = outerVariable; // x will equal 'new variable'
  },
  otherVariable = outerVariable + 1, // otherVariable will still equal 2, the inner scope has no affect on the outer scope
```

The value of the first outerVariable is shadowed for as long the a function runs.  When the function is finished, the scope is changed back to the outer scope and the original outerVariable is referred to again.

# Arrays

- Arrays in JavaScript are numerically indexed and sequential.  
- JavaScript arrays begin with an index of 0.  A common programming error is an "Off by one" error, because it can be confusing to start counting at 0.
- Arrays in JavaScript can hold any data type and can be mixed with any other data type.  In many languages, you can only create an array of one type, i.e. an array of numbers, but not mix numbers and strings.
- Arrays can nest themselves many levels deep, but nesting more than two levels is generally considered bad practice.

# JSON

- JSON, (JavaScript Object Notation) is one of the most popular data exchange formats due to the small size, flexibility, and native browser support.
- JSON requires that all keys are quoted.  Only double-quotes are valid.

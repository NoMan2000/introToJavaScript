# Functional Programming

- JavaScript does not support true functional programming, but it can be made to imitate some of the features.
- Functional programming involves minimizing "chainable" side effects, meaning that as a variable changes throughout the program, it can affect other portions of the code that it was not intended to.
- Code with side-effects are also harder to test.  Notice that in all the code demonstrated, there are very few to no variables that are used in the global or outer scope, most variables only exist inside of the function they are needed.
- This corresponds to the mathematical definition of a function, where the same input will always return the same output.  Every domain must return the same range.  This is a `pure` function. 
- In an `impure` function, the same function can potentially return multiple ranges.

## Filter, map
- Filter and map are the two most common functional methods used.
- Filter will remove any values that do not return true, while map will transform every value.

## Every, Some
- Every will return true if every value passes a particular check, while some will return true if at least one passes a particular check.

## Reduce
- Reduce takes an array and reduces it down to a single value.  It optionally takes a first value.

# Errors

- JavaScript errors are not as well-developed as many other languages.
- You can use the keyword `throw` with any type.  This does not generate a `stacktrace`, which shows where the error was thrown from the innermost section of code to the outermost.
- Most stacktraces will show you the error at the top or near the top.  The deeper the stacktrace, the less likely it is to be the source of your error.
- You do not have to throw an error.  You can create an error with `new Error` and return it.  NodeJS does this often, returning an error and allowing the user to decide whether or not they should throw the error or continue executing the program.
- Runtime errors can be caught in a try-catch block.  Compile-time errors are **not** catchable in a try-catch block.
- The keyword `finally` can be used to **always** execute a line of code.  This code will execute regardless of whether or not a try/catch block generates an error.
- If the `return` keyword is used in a `finally` block of code, anything afterwards will not execute.
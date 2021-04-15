# Control Structures

- Control Structures are ways of organizing the flow of code.  This is similar to a flow chart and UML (Universal Modeling Language) is a programming-language agnostic way of showing how certain conditions will make the code take different paths and perform different actions.

## Conditionals

- Conditionals are pieces of logic that should only execute under certain conditions.

		if(condition){}

- The `if` condition will only execute if the condition being evaluated is true.
- Use the unary negation operator `!` to evaluate the condition as false.
- The `if` condition is the most common check because it reads well, is terse, and can perform complex checks.

		condition ? true : false;
		
- The terniary comparison is a simplified if/else check.  If the condition is true, then the statement after the question mark `?` is evaluated. If the statement is false, then the statement after the colon `:` is evaluated.
- JavaScript doesn't often use terniary statements like in other languages. Most languages use the terniary operator to check if a value has been assigned to a varialbe, and then assigning a default value if it does not have one.

		function(prop) {
			prop = prop ? prop : "A default value";
		}
 
- JavaScript's version of the or operator `||` evaluates the values inside, whereas most languages only return true or false.  Combined with JavaScript's short-circuit evaluation, meaning it will stop evaluating a statement as soon as it is guaranteed to be true or false, it allows a simple check to set default values.	

		function (prop) {
			prop = prop || "A default value";
		}
-----

		switch (conditon){case condition1:}

- The switch statement is another common control pattern.  The switch statement passes the argument in and evaluates it.
- More verbose than the if statement and not capable of performing complex conditional checks.
- Also more error-prone since accidentally forgetting to call the `break` statement after evaluating a condition can lead to fall-through, where additional actions are accidentally performed.


## For Loops

	for (var i = 0; i < arr.length; i += 1)

- The first value is known as the initializer, traditionally the character i is used.
- For a multi-dimensional nested loop, the letter j is traditionally used.
- The second value is the comparison or condition value. This is the condition that has to be fulfilled to make the loop stop.
- The third value is the afterthought, which is what you want to do after each iteration of the array.
- Note that the semi-colon is used for the first two values, not the third value.
- All of the values are optional.  A Forever/Infinite loop can be created using this construct:

	    for (;;){}
	    
- The `continue` keyword will make the loop skip the current iteration, but continue to evaluate the expression.
- The `break` keyword will exit the expression.
- A label can be used to state where an expression should continue or break to, if multiple loops are being used.    
## While Loops

- While loops are the second most common type of loop that you will see.
- While loops are more commonly used when you do not know the condition that will halt execution ahead of time.
- While loops require manually checking the condition that needs to be exited, either by assigning a value that will make the condition in the while statement false, or by using the `break` keyword to exit the loop.

## Do-while loops

- Do-while loops are different than other loop structures because they terminate with a semi-colon and the comparison condition is at the end.
- All do-while loops will run at least once, which makes them ideal for executing code like generating a unique value and testing that value.

## ForEach Loops
- ForEach loops are very terse and easy to read, but they only work on true arrays.  There are many `array-like` structures in the DOM, which are values that have a length property but do not have JavaScript methods or properties.
- When dealing with arrays, the forEach loop is looked up as inferior to other functional control structures like `filter` `map` and `reduce`.  Nonetheless, there are certain conditions where a loop works where none of the others do, particularly when you need to transform an object and not an array, or other non-standard uses.
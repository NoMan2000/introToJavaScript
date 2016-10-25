# JavaScript Objects

JavaScript is composed of two types of objects.
  
  1. Built-in objects are shared across all versions of JavaScript like Object, Array, Boolean, Number, RegExp, etc.
  
  2. The Host Objects are unique to each environment JavaScript is running within.  In the case of the browser, this is window, document, console, etc.  Node and Electron have different host objects than the browser.
  
  Since this is meant to demonstrate JavaScript at its most common and simplest, we will be using the Browser to demonstrate JavaScript.  

## Variables.  

* A variable is literally something which can change or vary.  JavaScript in ES5 supports var as the keyword for declaring a variable.  In ES6, let is supported for block-scoped variables and const is supported for constants.
* Variables cannot begin with a number, but can use one anywhere else.
* Can use special characters and even Unicode valid characters, but you will be cursed by every other programmer after you.
* The $ sign and the _ are valid anywhere in the variable names, but when used in the beginning, they tend to have special meaning.

### Common Variable Idioms

* Functions with a constructor, those that require the new keyword, are generally capitalized.
* Everything else is generally lower-cased for the first word.
* There are two common conventions, snake-casing and camel-casing.  Snake casing looks like this `var my_new_variable` whereas camel casing looks like this `var myNewVariable`.  Camel casing is generally used because that's how the DOM expects JavaScript variables to work.

## Primitives vs. Complex Types

1. JavaScript has what it calls Primitives, but they are not true primitives.  In programming, a true primitive has no methods or properties on it.  The closest thing JavaScript has to a true primitive is `NULL` AND `UNDEFINED`, which are known as bottom-values.
2. `UNDEFINED` means that a variable has been declared, but has not had any value assigned to it.  `var x;` would declare that x exists, but it would not give it any value.  The value would be undefined.  `y;` would be undefined, since there is no `var` declaration before it.  This will throw an error, so you have to check this by using the `typeof` language construct.  `typeof thing` will show `undefined`.  You must assign null for it to show up as a value.
3. All JavaScript functions without an explicitly declared return value will return `undefined` as well.
4. A primitive type will not be strictly equal to a string created with a Constructor.  Also, the typeof check will fail for a string created with a constructor.  It is also unnecessarily verbose.  For this reason, it is advised to avoid using the Constructor version of creating primitive types.

## Objects

- Objects are key-value stores.  The key is the name used to access a value.  The value is what is stored.
- Properties of an object are values.  Methods of an object are functions.
- Object keys can be accessed with one of two notations, the dot notation or the square bracket notation.
- The dot notation is more commonly used, but it can only access string properties.
 
		 object.dotnotation
		 object[squareNotation]
		 
- The square notation can access dynamic properties or properties with non-standard names.  It is highly recommended that you do not attempt to create non-standard variable names.
## Arguments vs. Parameters

These two things are usually used interchangeably, but the parameters of a function or method call are the names given to a variable in the function declaration:

    function addTwoNumbers(parameterOne, parameterTwo) {
      return parameterOne + parameterTwo;
    }

The argument passed to the function are what the actual values of the statements are.

    addTwoNumbers(1, 2);

## Pass by Reference or value

[Discussion of how JavaScript works when passing values](http://stackoverflow.com/questions/16880418/javascript-pass-object-as-reference)

Even though you can modify the values of the object, you cannot reassign it.  This is technically "Call by Sharing".

[Wikipedia on it](https://en.wikipedia.org/wiki/Evaluation_strategy#Call_by_sharing)

## Automatic Semi-Colon Insertion

[Automatic Semi-Colon Insertion](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-automatic-semicolon-insertion)

Reading EcmaScript can be difficult, so a user-friendly version is here:

[Understanding ASI](http://www.bradoncode.com/blog/2015/08/26/javascript-semi-colon-insertion/)

## Deep vs. Shallow Cloning/Copying

Most forms of cloning are known as `shallow clones`.  A shallow clone will only clone the first level of objects, but if those objects are also pointing to other objects, it will not clone the new pointers.  A `deep clone` occurs when everything that points to an object is cloned, making sure that there are no lingering references left over.  Deep clones are generally much slower than shallow clones, so most languages that a clone feature implement shallow clones.

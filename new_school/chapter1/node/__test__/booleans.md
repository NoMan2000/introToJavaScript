# Booleans

Booleans are values that can evaluate to one of two things:  `true` or `false`.

JavaScript has a concept called `truthy` and `falsy` that doesn't exist in static typed languages.  `Truthy` or `falsy` means an expression which can be coerced to either `true` or `false`.  We will look at many examples of this.  In general, it's considered a best practice to use

```js
if (!someValue) {
    // do something
}
```

and

```js
if (someValue === someOtherValue) {

}
```

but not:

```js
if (someValue == someOtherValue) {

}
```

As that can produce strange results.  There is one exception, which is a quirk of JavaScript.

```js
if (value == null) {

}
```

JavaScript has two bottom values, `null` and `undefined`.  `null === undefined` is false, but `null == undefined` is true, so that's the one exception.

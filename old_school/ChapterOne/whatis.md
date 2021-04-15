#JavaScript Non-Technical Definition

I divide languages into two types, pragmatic languages and opinionated languages.  Pragmatic languages are languages like PHP, JavaScript, C, and C++.  These are languages programmers love to complain about.  Pragmatic languages don't care how you write your code or about internal consistency, they just attempt to solve a problem and leave the details up to you.  The downside is that these languages tend to have wildly different coding standards, conventions, and jumping to new projects can be difficult because the code can be radically different.

In contrast, opinionated languages have a particular way they want you to write code and strive to maintain internal consistency.  They often follow a mantra of `convention over configuration`, meaning that there should be well-designed patterns to solve problems and not lots of configuration options.  Examples of languages like this are Ruby, Java, and Python.  These languages tend to be consistent from one code base to the next and tend to be easier to maintain over time.  The downside is that if you disagree with a convention, you cannot change it.  For example, Java has a reputation for being extremely verbose for writing even minor bits of code.

JavaScript is a pragmatic language.  As an example of configuration, ESLint, a coding standards for JavaScript, has dozens of options for how you can define JavaScript styles.  Because it lacks internal consistency, several technical definitions have to be clarified.

#JavaScript Technical Definition

JavaScript is a high-level, dynamic, untyped, coercive, single-threaded, synchronous, and interpreted programming language.

- High-level: Doesn't deal with pushing bits into and out of memory.  Higher-level languages are more human-readable, whereas low-level languages like Assembly are often cryptic.  The more the code deals with machine-level instructions, the 'lower-level' the language is considered.
- Dynamic:  Some programming languages require that you declare what type of object you want before you are allowed to create it.  An example of this is standard Java:

  `String myString = new String("My String");
   Integer myInt = new Integer(1);`

Same thing written in JavaScript:

  `var myString = "My String";
   var myInt = 1;`

The reserved word `var` tells the compiler that you intend to create a variable, but it doesn't ask what type of variable it is.

- Untyped:  JavaScript has no support for type-hinting.  Some languages which compile into JavaScript, such as TypeScript, do support type-hinting.
- Coercive:  JavaScript will attempt to coerce one type into another.  This is one of JavaScript's most famous problems, exemplified by the lecture `Wat?`
- Single-threaded:  JavaScript only uses one thread at a time.  This severely limits the language for intensive processes.  To get around this, JavaScript on the web has `Workers`, which are background operations that can process data.  On the server-side, Node allows `child processes`, which spins up a new Node instance to complete a task, then stops the new Node instance.  Note these are implementations of the language and not part of the language itself.
- Synchronous:  All JavaScript events execute synchronously, but JavaScript has an `event loop` that allows operations to queue up after each other.  This prevents the JavaScript engine from locking.  The inventor of jQuery John Resig has an excellent article explaining this: (Explaining how timers work)[http://ejohn.org/blog/how-javascript-timers-work/]  
- Interpreted.  Broadly, there are two types of languages:  Compiled or interpreted.  Languages like C and Java are compiled.  Interpreted languages run in a virtual machine.   JavaScript is technically a hybrid of the two known as a JIT (Just In Time) language, which has two passes.  The first pass is the `compilation pass`, the second is the `runtime pass`.  When we get to looking at errors and how variable hoisting works, you will see the difference.

# Javascript Questions and Answers

### Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?

1. Name clashes
2. Harder to read the code
3. Anyone can update the global variable from any point in the programming

### What does event bubbling or event propagation mean?
Event Bubbling: When an event is fired on a child element, it 'bubbles' up to the parent.

Event delegation: Take advantage of event bubbling to find where in the event loop the correct target is. Example using jquery's 'on' function ($('.something').on('click', '.something-else', function() {}))


### What’s the difference between `undefined` and `null`

undefined is when a variable is declared but has not been assigned a value. Null is when a variable is declared and assigned to represent no value.

### In as much detail as possible, explain how JSON Web Tokens work.

A JWT provides granular control over access to the API as opposed to an API Key that allows full access. It consists of 3 parts: a header, a payload, and a signature. It is given a secret key in order to verify the sender


### What is Ajax?
Async Javascript and XML
it allows you to:
1. Make requests to the server without reloading the page
2. Receive and work with data from the server

It uses an XMLHTTPRequest object to send and receive data


### What is `"use strict";`? What are the advantages and disadvantages to using it?

1. It catches some common coding bloopers, throwing exceptions.
2. It prevents, or throws errors, when relatively “unsafe” actions are taken (such as gaining access to the global object).
3. It disables features that are confusing or poorly thought out.


### Explain why the following doesn't work as an IIFE: `function foo(){ }();`. What needs to be changed to properly make it an IIFE? Why?
The code above is a function declaration that is being called immediately. In order for it to be an IIFE we need to remove the 'foo' and wrap the anonymous function in parentheses in order for the javascript parser to read it as an expression.


### What are the pros and cons of using Promises instead of callbacks?
Pros
1. Access to .then
2. Avoid callback hell
3. Perfect for multiple async calls in parallel
4. Flexible

Cons
1. May add needless complexity when no data is handed back


### What is a closure, and how/why would you use one?
Simply put, a closure is a function within another function that can access the outer functions scope. Javascript is function scoped (Not block scoped). After the outer function has been executed and returned a value, the closure can still run.


### What advantages does React offer? What about disadvantages?
Advantages:
1. Virtual DOM
2. Reusing components
3. Open Source
4. Small and light weight

Disadvantages:
1. One-direction data flow
2. JSX can be a barrier


### Concurrency model and event loop
3 parts

Stack - function call is pushed to top of the stack (where in the program we are). Data structure that records function calls
Heap - Memory allocation to Objects and Variables (unstructured)
Callback Queue - Listens for events and pushes them to the call stack if theres space

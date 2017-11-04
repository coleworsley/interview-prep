# General Web Questions and Answers

### In as much detail as possible, explain how you would localize an application.

1. Figure out what the target language / culture is
2. Define the scope of localization (which parts of the application will need to change)
3. Find someone to do the translations
4. Internationalize - make it easy to localize
  * Make resource files
5. Test the translations
6. Deploy

### Tell me two advantages of testing your code.

1. Simplifies Integration of the application
  - You'll know where the error is later by verifying the individual units
2. Identifies where code needs to be more modular
3. Provides instant feedback to where your code is broken

### Name three strategies for fixing cross-browser inconsistencies.

1. Using a polyfill: (type of shim) Piece of code that a developer would expect to natively exist within the browser.
2. Shim: any piece of code that performs interception of an API call and provides a layer of abstraction.
3. CSS Normalize / CSS reset
4. Vendor Prefix's


### What are some tools and strategies you use to prevent shipping unstable code to production?

1. Continuous Integration testing
2. Code Reviews on Pull Requests
3. Set up a staging environment to work out bugs

### What factors influence whether you’ll take a progressive enhancement vs. graceful degradation approach to building an application?

Graceful Degradation: modern browsers first
Progressive Enhancement: base level first

1. Target market -> Graceful Degradation can be sloppy on older browsers (will need to patch as errors come up)
2. Time -> Typically it is easier to work with new technology
3. Progressive Enhancement preferred for long standing products

### Define the term ‘MVC’ and explain how an application is architected when following MVC patterns.

Model - (Database) - directly manages data and logic

View - (Client / UI) - Renders the Model

Controller - (API / Server) - Accepts inputs and converts it to commands for model or view


### What does CORS stand for and what issue does it address?

1. Prevents malicious scripts on one page from obtaining sensitive data from another
* Origin is the combination of URI scheme and hostname and port

### In as much detail as possible, describe the request-response cycle.

1. URL is typed and submitted
2. Browser looks for IP address in cache
3. If not in cache it requests IP address from DNS
4. Browser forms an HTTP requests
5. A socket connection is opened between PC and Server at looked up IP Address
6. HTTP request is sent and received by web server
7. Server checks for headers / method in request
8. Server handles request
  * If valid server sends a 200 response along with a body (likely an HTML page)
  * If invalid server response with a 404 error message
9. Browser receives response and parses it to the DOM (assuming it is HTML)
10. When external script/image/css/etc is parsed, a new request is made to serve those files
11. Those external files are received, parsed, and executed
12. Browser renders the page

### What is an API

Application Programming Interface
High Level - software intermediary/connection that allows two applications to talk to each other

It is a set of protocols that 

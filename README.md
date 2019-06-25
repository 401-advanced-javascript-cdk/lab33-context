# Lab33 - Context Assignment 1 - Counter

Uses React context to share state from a context provider to child components

### Author: Chris Kozlowski

### Links and Resources

- [Code Sandbox - Code and Tests](https://codesandbox.io/s/demo-context-api-7ey5u)
- [Code Sandbox - Code Deployment](https://7ey5u.csb.dev/)

### Modules

#### `index.js`

Gets the root element in the HTML and renders the App component

#### `app.js`

Imports the context provider and wraps the Counter components with it.

#### `components/context/counter-context.js`

Holds the state with a count and methods to increment and decrement the count. Exports the context provider class and the context function.

#### `components/counter/counter.js`

Uses context to display the current count

#### `components/increment/increment.js`

Displays a button the uses a context method to increment the count.

#### `components/decrement/decrement.js`

Displays a button the uses a context method to decrement the count.

#### Operation

Click the link above to view the application.

#### Testing

Integrated tests through CodeSandbox are included. Click the 'tests' tab to run the tests.

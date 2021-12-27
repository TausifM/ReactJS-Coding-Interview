# Introduction of Error Boundaries

from the previous javascript code thier is some issues and errors in React app. It causes some problem in internal state of components and error occurs. That error such as [emit cryptic error] has no solution in react.

javascript error in a part if UI sholudn't breaks the whole application. to solve this "Error Boundaries" introduce.

"Error boundaries" are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

## Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.

### Note

Error boundaries do not catch errors for:

$ Event handlers
$ Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
$ Server side rendering
$ Errors thrown in the error boundary itself (rather than its children)

## New Behaviour of unCaught Errors

1). This change has an important implication. As of React 16, errors that were not caught by any error boundary will result in unmounting of the whole React component tree.

## Component Stack Traces

1. Default in npx create-react-app my-app
2. by using @babel/plugin-transform-react-jsx-source when npx or mpm create-react-app is not install.

## How abount try/catch ?

1. try/catch is great but it only works for imperative code
2. imperative code are programs specify how it is to be done.
3. declarative code are programs specify what is to be done

   try {
   showButton();
   } catch (error) {
   // ...
   }

However, React components are [declarative] and specify what should be rendered:
(<Button />)

Error boundaries preserve the declarative nature of React, and behave as you would expect. For example, even if an error occurs in a [componentDidUpdate] method caused by a (setState) somewhere deep in the tree, it will still correctly propagate to the closest error boundary.

## How About Event Handlers?

Error boundaries do not catch errors inside event handlers.

React doesn’t need error boundaries to recover from errors in event handlers. Unlike the render method and lifecycle methods, the event handlers don’t happen during rendering. So if they throw, React still knows what to display on the screen.

If you need to catch an error inside an event handler, use the regular JavaScript {try / catch} statement:

class MyComponent extends React.Component {
constructor(props) {
super(props);
this.state = { error: null };
this.handleClick = this.handleClick.bind(this);
}

handleClick() {
try {
// Do something that could throw
} catch (error) {
this.setState({ error });
}
}

render() {
if (this.state.error) {
return <h1>Caught an error.</h1>
}
return <button onClick={this.handleClick}>Click Me</button>
}
}

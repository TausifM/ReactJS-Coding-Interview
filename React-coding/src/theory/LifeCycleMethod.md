It takes practice to figure out where and how certain lifecycle methods should be used. Regardless,
the most important for HTTP requests is [componentDidMount] with class components and [useEffect] with functional components.

These methods are used because they are called immediately after the component is mounted to the DOM (Document Object Model).

Here an example of how this works:

1. User visits webpage
2. The component is mounted to the DOM (webpage)
3. The componentDidMount or useEffect method is called sending off the HTTP request
4. The webpage gives an indication it is loading data
5. The data is received from the external API and added to state (side effect)
6. The component renders with the data that was fetched.

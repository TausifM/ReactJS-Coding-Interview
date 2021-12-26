// Called when parents change properties and setState(). These are not called for initial renders.

componentDidUpdate(prevProps, prevState, snapshot); \\# Use setState() here, but remember to compare props
shouldComponentUpdate(newProps, newState); \\ # Skips render() if returns false
render(); \\ # Render
componentDidUpdate(prevProps, prevState); \\ # Operate on the DOM here

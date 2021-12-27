## componentDidCatch :

1). is always called in browser
2). is called in the "commit phase" when DOM is already been updated.
3). should be used when error has been reporting

## getDerivedStateFromError :

1). is called during "render phase" when DOM has not updated.
2). should be used for "render fallback UI"

They are catching same errors but at different phases. This previously was possible with componentDidCatch alone:

static getDerivedStateFromError() {
return { hasError: true };
}

&

componentDidCatch() {
this.setState({ hasError: true });
}

### componentDidCatch has no chances to be supported on server side until the support for asynchronous rendering will be added to ReactDOMServer

You can use both. An example from the documentation shows that:

class ErrorBoundary extends React.Component {
state = { hasError: false };

static getDerivedStateFromError(error) {
return { hasError: true };
}

componentDidCatch(error, info) {
logComponentStackToMyService(info.componentStack);
}

render() {
if (this.state.hasError) {
return <h1>Something went wrong.</h1>;
}

    return this.props.children;

}
}

In this case responsibilities are divided between them. [getDerivedStateFromError] does the only thing it is good for, i.e. updates the state if an error occurs, while [componentDidCatch] provides side effects and can access this component instance if needed.

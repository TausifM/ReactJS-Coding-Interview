# When should we use the useEffect cleanup?

Let’s say we have a React component that fetches and renders data. If our component unmounts before our promise resolves, useEffect will try to update the state (on an unmounted component) and send an error that looks like this:

## Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.

(To fix this error, we use the cleanup function to resolve it.)
“React performs the cleanup when the component unmounts. However… effects run for every render and not just once. This is why React also cleans up effects from the previous render before running the effects next time.”

The cleanup is commonly used to cancel all subscriptions made and cancel fetch requests. This is a common pattern in React apps.

## Cleaning up a subscription

To begin cleaning up a subscription, we must first unsubscribe because we don’t want to expose our app to memory leaks and we want to optimize our app.

To unsubscribe from our subscriptions before our component unmounts, let’s set our variable, isApiSubscribed, to true and then we can set it to false when we want to unmount:

1. by using Axios we can make a request to our API and get the data.

useEffect(() => {
// set our variable to true
let isApiSubscribed = true;
axios.get(API).then((response) => {
if (isApiSubscribed) {
// handle success
}
});
return () => {
// cancel the subscription
isApiSubscribed = false;
};
}, []);

// In axios to cancel such Warning of Subscriptions.
axios.isCancel method is used.

2. In fetch API call methods

// Post component

### Now, to clear this error and stop the memory leak, we must implement the cleanup function using any of the above solutions. In this post, we’ll use AbortController:

import React, { useState, useEffect } from "react";

export default function Post() {
const [posts, setPosts] = useState([]);
const [error, setError] = useState(null);
useEffect(() => {
const controller = new AbortController();
const signal = controller.signal;

      fetch("https://jsonplaceholder.typicode.com/posts",
      { signal: signal })
      .then((res) => res.json())
      .then((res) => setPosts(res))
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("successfully aborted");
        } else {
          setError(err);
        }
      });
    return () => controller.abort();

}, []);
return (

<div>
    {!error ? (
    posts.map((post) => (
    <ul key={post.id}>
    <li>{post.title}</li>
    </ul>
    ))
    ) : (
    <p>{error}</p>
    )}
</div>
);
}

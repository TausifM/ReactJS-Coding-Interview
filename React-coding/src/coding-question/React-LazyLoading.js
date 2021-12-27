// if folder structure like that
// |-src
// |	|-components
// |	|	|-Admin.js
// |	|	|-Customer.js
// |	|	|-Home.js
// |	|-app.js
// |-index.js

import React, { Suspense } from "react";
const Customer = () => React.lazy("./Customer");
const Admin = () => React.lazy("./Admin");

export default (props) => {
  if (props.user === "admin") {
    return (
      <Suspense fallback={<div> Loading....</div>}>
        <Admin />
      </Suspense>
    );
  } else if (props.user === "customer") {
    return (
      <Suspense fallback={<div> Loading....</div>}>
        <Customer />
      </Suspense>
    );
  } else {
    return <h3>Invalid User</h3>;
  }
};

import PropTypes from "prop-types";
import React from "react";
class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.state.email}</h1>
        <h1>{this.state.seatNumber}</h1>
        <h1>{this.state.callbacks}</h1>
        <h1>{this.state.isClosed}</h1>
        <h1>{this.state.any}</h1>
      </div>
    );
  }
}
// Basic PropTypes
MyComponent.propTypes = {
  email: PropTypes.string,
  seatNumber: PropTypes.number,
  callbacks: PropTypes.func,
  isClosed: PropTypes.bool,
  any: PropTypes.any,
};

//Required proptypes
MyComponent.propTypes = {
  email: PropTypes.string.isRequired,
  seatNumber: PropTypes.number.isRequired,
};
// Elements type Proptype
MyComponent.propTypes = {
  element: PropTypes.element,
  node: PropTypes.node,
};

// Eumeurable (Oneof)
MyComponent.propTypes = {
  direction: PropTypes.oneOf("right", "left"),
};

//Custom Validation
MyComponent.propTypes = {
  customProp: (props, key, componentName) => {
    if (!/matchme/.test(props[key])) {
      return new Error("Validation failed!");
    }
  },
};

// Arrays and Object
// Use .arrayOf(), .objectOf(), .instanceOf(), .shape().
const Message = "any";

MyComponent.propTypes = {
  list: PropTypes.array,
  ages: PropTypes.arrayOf(PropTypes.number),
  user: PropTypes.object,
  users: PropTypes.objectOf(PropTypes.number),
  message: PropTypes.instanceOf(Message),
};
MyComponent.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
};

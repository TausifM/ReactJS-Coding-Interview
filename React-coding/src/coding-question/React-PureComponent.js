import React, { Component } from "react";

export default class ReactPureComponent extends React.PureComponent {
  render() {
    return <div>Foo</div>;
  }
}
// React pure component does implement shouldComponentUpdate() by default,
// and by performing a shallow comparison on React state and props values.

/* 
class Greeting extends React.Component {
    shouldComponentUpdate(){
        return false;
    }
    render() {
      return <h1>greeting : {this.props.name}</h1>;
    }
  }
  the above example of in Pure component used in shouldComponentUpdate()
  class Greeting extends React.PureComponent {
      render (){
          return <h1>hwhehv</h1>
      }
  } */
  //////////////////////////////////////////////////
class Greeting extends React.PureComponent {
  render() {
    return <h1>greeting : {this.props.name}</h1>;
  }
}
class Tausif extends React.Component {
  state = {
    greeted: false,
    name: "tausif",
  };
  componentDidMount() {
    this.setState({ greeted: true });
  }
  render() {
    return <Greeting state={this.state.name} />;
  }
}
export default Tausif;
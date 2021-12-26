// Bind on render
class HelloWorld extends Component {
  handleClick(event) {}
  render() {
    return (
      <div>
        <p>Hello,{this.state.name}</p>
        <button onClick={this.handleClick.bind(this)}>Click</button>
      </div>
    );
  }
}

// Bind in constructor()

class HelloWorld extends Component {
  constructor() {
    this.handleClick = this.handleClickFunc.bind(this);
  }
  render() {
    return <button onClick={this.handleClick} />;
  }
}

// Bind with the Arrow Function
class HelloWorld extends Component {
  handleClick = (event) => {
    console.log(this.state.name);
  };
  render() {
    return <button onClick={this.handleClick} />;
  }
}

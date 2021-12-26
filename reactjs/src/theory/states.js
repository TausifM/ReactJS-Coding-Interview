class A extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: "sample Data" };
  }
  render() {
    return <h2>Class State data: {this.state.data}</h2>;
  }
}

render(<A />, document.getElementById("root"));

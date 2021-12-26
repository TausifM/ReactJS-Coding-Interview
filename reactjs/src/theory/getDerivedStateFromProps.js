class Header extends React.Components {
  constructor(props) {
    super();
    this.state = { favarouriteColor: "red" };
  }
  static getDerivedStateFromProps() {
    return { favarouriteColor: props.favcol };
  }
  render() {
    return <h1>{this.state.favarouriteColor}</h1>;
  }
}

ReactDOM.render(<Header favcol="yellow" />, document.getElementById("root"));

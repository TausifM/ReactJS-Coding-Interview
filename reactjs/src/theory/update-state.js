export class UpdateState extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "john",
      surname: "joseph",
    };
  }
  render() {
    setTimeout(() => {
      this.setState = { naem: "tausif", surname: "sheikh" };
    }, 2000);
    return (
      <div>
        <h1>{this.state.name}</h1>
        <div>
          <h2>{this.state.surname}</h2>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<UpdateState />, document.getElementById("root"));

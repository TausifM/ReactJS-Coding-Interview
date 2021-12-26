function A(props) {
  return <h1>{props.message}</h1>;
}
render(<A message="hello" />, document.getElementById("root"));

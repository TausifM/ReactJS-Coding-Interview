class shallowComparison extends Reeact.PureComponents {
  constructor() {
    super();
    this.state = {
    userArray= [ 1,2,3,4,5]
    };
    setInterval(() => {
        this.setState({
            userArray: [...this.state.userArray, 6]
        })
    }, 1000)
  }
  render(){
      return <b>Array length : {this.state.userArray.length}</b>
  }
}

// In the code above, we’re creating a new reference array using 
// the spread operator. When the setState is called, the component
// looks for the reference of a previous array object and a
//  new array object is created. 

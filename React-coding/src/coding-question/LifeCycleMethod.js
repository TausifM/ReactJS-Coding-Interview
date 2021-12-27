import React, { Component } from "react";
// Class components
export default class LifeCycleMethod extends Component {
    constructor(){
        super();
        this.state={
            name:"Tausif"
        }
    }
    setState({name});
    componentDidMount() {
        // send HTTP request
        // save it to the state
    }
  render() {
    return <div> 
                <h1>This is a view created by a class component{this.state.name}</h1> 
           </div> 
  }
}

// Function component:

import React, { useState, useEffect } from 'react' 
const ExampleComponent = (props) => { 
    const [stateVariable, setStateVariable] = useState('');
    useEffect(() => {
        // send HTTP request
        // save response to variable
    }, [])
    return ( 
        <div> 
            <h1>This is a function component view</h1> 
        </div> 
    ) 
} 
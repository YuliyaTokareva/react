import React, { Component } from "react";


class Toggler extends Component {
  constructor(props){
  super(props)

  this.state = {
    counter: "Off",
  }
 
  
}

textButton=(e)=>{
      const textNow = e.target.textContent;
      textNow === "On" ? 
      this.setState({
      counter: "Off",
      })
      : 
      this.setState({
      counter: "On",
      })
}

  render() {
    return (
     <div className="toggler"
     onClick={e => this.textButton(e)}
     >{this.state.counter}</div>   
  );
  }

}

 export default Toggler;
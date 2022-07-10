import React, { Component } from "react";


class Toggler extends Component {
  constructor(props){
  super(props)

  this.state = {
    counter: "Off",
  }
  this.textButton = this.textButton.bind(this)
  
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
     onClick={this.textButton}
     >{this.state.counter}</div>   
  );
  }

}

 export default Toggler;
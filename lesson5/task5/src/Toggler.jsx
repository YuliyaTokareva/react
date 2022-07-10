import React, { Component } from "react";


class Toggler extends Component {
  constructor(props){
  super(props)

  this.state = {
    active: false,
  }
  
}

textButton=()=>{
     
   this.setState({
      active: !this.state.active,
    });
}

  render() {
    return (
     <div className="toggler"
     onClick={() => this.textButton()}
     > {this.state.active ? 'On' : 'Off'}</div>   
  );
  }

}

 export default Toggler;
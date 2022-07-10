import React, { Component } from "react";


class Toggler extends Component {
  constructor(props){
  super(props)

  this.state = {
    counter: "",
  }
 
  
}
  setColor = color =>{
     this.setState({
    counter: color,
  })
}

  reSetColor = color =>{
     this.setState({
    counter: '',
  })
}


  render() {
    return (
<div>
  <div className="picker__title">{this.state.counter}</div>
  <div>
    <button 
    onMouseOver={()=>this.setColor("Coral")}
    onMouseOut={()=>this.setColor("")}
    className="picker__button picker__button_coral"></button>
    <button 
    onMouseOver={()=>this.setColor("Aqua")}
    onMouseOut={()=>this.setColor("")}
    className="picker__button picker__button_aqua"></button>
    <button 
    onMouseOver={()=>this.setColor("Bisque")}
    onMouseOut={()=>this.setColor("")}
    className="picker__button picker__button_bisque"></button>
  </div>
</div>

 
  );
  }

}

 export default Toggler;
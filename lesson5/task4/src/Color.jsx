import React, { Component } from "react";

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Color extends Component {

  setBodyColor = color =>{
    document.body.style.backgroundColor = color;
  }

  render() {
    return (
        <div className="colors">
          <button 
          
          style={{
            backgroundColor: RED,
          }}
          onClick={()=>this.setBodyColor(RED)}
          className="colors__button"/>
          <button 
          onClick={()=>this.setBodyColor(GREEN)}
          style={{
            backgroundColor: GREEN,
          }}
          className="colors__button"/>
          <button 
          onClick={()=>this.setBodyColor(BLUE)}
          style={{
            backgroundColor: BLUE,
          }}
          className="colors__button"/>
    
        </div>
  
  );
  }

}

 export default Color;
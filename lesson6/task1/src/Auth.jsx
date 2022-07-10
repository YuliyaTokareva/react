import React, { Component } from "react";
import UserGreeting from "./UserGreeting.jsx";

class Auth extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoggedIn: false,
    };

  }
  handleLogin =()=>{
    this.setState({
      isLoggedIn: true,
    });
  }
    handleLogout =()=>{
    this.setState({
      isLoggedIn: false,
    });
  }
  
  render() {
    let button;
    if (this.state.isLoggedIn){
      button = <button onClick={this.handleLogout}>Logout</button>
    }
    else(
      button = <button onClick={this.handleLogin}>Login</button>
    )
    return (
      <div className="panel">
        
        <UserGreeting isLoggedIn={this.state.isLoggedIn}/>
        <div>{button}</div>
        </div>
  
  );
  }

}

 export default Auth;
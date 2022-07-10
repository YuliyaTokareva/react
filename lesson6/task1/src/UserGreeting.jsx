import React from "react";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx"

const UserGreeting = props =>{
  if (props.isLoggedIn){
    return (
     
      <Login />
    
      
    )
  }
  return (
     
      <Logout />
      
  )
 
}
export default UserGreeting;
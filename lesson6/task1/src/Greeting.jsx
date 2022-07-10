import React, { Component } from "react";
import UserGreeting from "./UserGreeting.jsx";
import GuestGreeting from "./GuestGreeting.jsx";

const GuestGreeting = () =>{
  return(
    <>
    <UserGreeting />
    <GuestGreeting />
    </>
    
  )
}

 export default GuestGreeting;
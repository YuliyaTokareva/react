 import React from "react";
 



function Greeting(props) {
  const today = new Date();
  const bd = props.birthDate;
  const monthGet = (today - new Date(bd))/(24 * 3600 * 365 * 1000) ;
  const yearGet = today.getFullYear() - new Date(bd).getFullYear() ;
  const ageGet = (Math.floor(monthGet) > 0 ? yearGet : yearGet-1)
  
  return (
    <div className="greeting">
   {`My name is ${props.firstName} ${props.lastName}. I'm ${ageGet} years old`}
    </div>
  );
}



 export default Greeting;
 import React from "react";
import Counter from './Counter.jsx'


const App = (props) =>{
  
  return (
    <>
    <Counter  start={17} interval={1000}/>
    <Counter start={-30} interval={100}/>
    </>
   
  );
}



 export default App;
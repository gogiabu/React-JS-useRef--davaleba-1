
import React, { useEffect, useRef } from "react";
import ReactDOM from 'react-dom/client';



function App() {
  const start = useRef();

  function onFocus() {
    start.current.focus();
  }

  useEffect(() =>{
    onFocus();
  })

 function click() {
  alert("ok")
 }
  return(
    <React.Fragment>
     
      <input type="text" ref={start}></input>
      <button  onClick={click} >click</button>
    
      {
       start.current
      }
      
    </React.Fragment>
  )


}


var root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App />);


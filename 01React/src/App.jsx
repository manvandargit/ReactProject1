import HellowWorld from "./HellowWorld"
import { useState } from "react";
function App() {


   let [count, setcounter] = useState(0)
  // let count = 0;
  
  const addvalue = () =>{
    count = count + 1;
    setcounter(count)
    console.log(count);
  }

  const removevalue = () =>{
    count = count - 1;
    setcounter(count)
    console.log(count);
  }
  return (
    <>
      <h1>Home Page</h1>
      {/* <HellowWorld /> */}
      <h1>Count Value = {count}</h1>
      <div className="btnBox">
        <button className="incrige" onClick={addvalue}>
          incrige
        </button>
        <button className="remove" onClick={removevalue}>
          remove
        </button>
      </div>

    </>
  )
}

export default App

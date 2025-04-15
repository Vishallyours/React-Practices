import { useState } from "react";
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

   const addValue = () => {
    if (counter === 20) {
      return 0 
    }else{
    setCounter(counter+1)
    }
  };

    const removeValue = () => {
      if (counter === 0) {
        return 0
      }else{
        
        setCounter(counter-1)
      }
    };
  return (
    <>
    <h1>React Practices</h1>
    <h3>Counter value: {counter}</h3>
    
    <button onClick={addValue}>Add Value {counter}</button> 
    <br/>
    <button
    onClick={removeValue}
    >Remove Value {counter}</button>
    
    <p> 
      Footer: {counter}
    </p>
    </>
  )
}

export default App

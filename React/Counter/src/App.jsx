import { useState } from 'react';
import './App.css'

function App() {
  
  const [value, setValue] = useState(1);
  
  const add = ()=>{
    if(value<20) setValue(value+1)
    else alert("you can not go more than 20")
  }
  const remove = ()=>{
    if(value>0) setValue(value-1)
    else alert("you can not go less than 0")
  }

  return (
    <>
      
      <h1>Use of UseState hooks</h1>
      <h3>value : {value}</h3>
      <h3>value : {value}</h3>
      <h3>value : {value}</h3>
      <button onClick={add}>Add Value</button>
      <button onClick={remove}>Remove Value</button>
      
    </>
  )
}

export default App

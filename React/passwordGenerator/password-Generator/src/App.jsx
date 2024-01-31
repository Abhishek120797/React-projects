import { useState, useCallback,useEffect,useRef } from "react";


function App() {

  const [length,setlength]= useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [characterAllowed,setCharacterAllowed]= useState(false);
  const [password,setPassword]= useState("");
  const passwordRef = useRef(null)

  const passwordGenaretor = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(characterAllowed) str += "~`!@#$%^&*()_-+=/.{}[]"

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random()*str.length)
      pass +=str.charAt(char);
    }

    setPassword(pass)

  },[length,numberAllowed,characterAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenaretor()
  },[length,numberAllowed,characterAllowed,passwordGenaretor])

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">

      <h1 className="text-white text-center my-2">Password Generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">

        <input
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="password"
        readOnly
        ref={passwordRef}
        />

        <button 
        className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" 
        onClick={copyPasswordToClipboard}>copy</button>

      </div>

      <div className="flex text-sm gap-x-2">

        <div className="flex item-center gap-x-1">

          <input
          type="range"
          min={6}
          max={100}
          value={length}
          className="cursor-pointer"
          id = "length" 
          onChange={(event)=>{setlength(event.target.value)}}
          />
          <label htmlFor="length">Length: {length}</label>
          
        </div>
        <div className="flex items-center gap-x-1">

          <input 
          type="checkbox"
          defaultChecked={numberAllowed} 
          id="numberInput"
          onChange={()=>{ setNumberAllowed((prev)=>!prev)}}
          />
          <label htmlFor="numberInput">Number</label>

          <input 
          type="checkbox"
          defaultChecked={characterAllowed} 
          id="charInput"
          onChange={()=>{ setCharacterAllowed((prev)=>!prev)}}
          />
          <label htmlFor="charInput">Charecter</label>

        </div>

      </div>

    </div>
    </>
  );
}

export default App

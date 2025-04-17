import { useState ,useCallback , useEffect, useRef } from "react"

function App() {

  const [length , setLength] = useState(8);
  const [numberAllowed , setNumberAllowed]  = useState(false);
  const [charAllowed , setCharAllowed]  = useState(false);
  const [password, setPassword] = useState("")

  // useRef hook
const passwordRef = useRef(null);

const passwordGen = useCallback( () => {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if (numberAllowed) str += "0123456789" // add numbers to str
  if (charAllowed) str += "!@#$%^&*()_+" // add special characters to str

  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char)
  }

  setPassword(pass)

}, [length,numberAllowed,charAllowed,setPassword])

const copyPasswordToClipboard = useCallback( () => {
  passwordRef.current?.select()
  // passwordRef.current?.setSelectionRange(0,length)
  window.navigator.clipboard.writeText(password) // copy to clipboard
} , [password])

useEffect(()=> {
  passwordGen()
} , [length, numberAllowed, charAllowed, passwordGen]) 


  return (
    <>
   <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-orange-500 bg-gray-800">
    <h1 className="mb-4 text-white flex justify-center">Password Generator</h1>


   <div className="flex shadow rounded-lg bg-gray-700 overflow-hidden  mb-4">
    <input 
    type="text"
    value={password}
    className="outline-none w-full py-1 px-3"
    placeholder="Password"
    readOnly
    ref={passwordRef} // reference to password input
     />
    <button
    onClick={copyPasswordToClipboard} // copy password to clipboard
     className="hover:bg-blue-800 bg-blue-400 px-3 py-0.5 shrink-0 text-white cursor-default
     ">
      Copy
     </button>
    </div>     

    <div className="flex text-sm gap-x-2 ">
      <div className="flex item-center gap-x-1">
        <input 
        type="range"
        min={8}
        max={24}
        value={length}
        className="cursor-pointer"
        onChange={(e)=> {setLength(e.target.value)}}
         />
         <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
          />
          <label>Numbers</label>
      </div>
      
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={charAllowed}
          id="charInput"
          onChange={() => {
              setCharAllowed((prev) => !prev);
          }}
          />
          <label>Characters</label>
      </div>
    </div>

    </div>
    </>
  )
}

export default App

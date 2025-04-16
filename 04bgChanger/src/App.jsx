 import { useState } from "react";
function App() {
 
  const [color, setColor] = useState("black") 
  
 


  return (
    <>
     <div style={{backgroundColor: color}} className=" w-screen h-screen text-white flex justify-center items-end p-16"> 
     <div id="color-pallete" className="bg-white rounded-3xl flex gap-4 justify-center items-center px-8 text-black">
      <button onClick={() => setColor("red")}    style={{backgroundColor: "red"}} className="hover:border-black border-white m-2 px-4 font-bold border-2 rounded-4xl bg-red-600">Red</button>
      <button onClick={() => setColor("blue")}   style={{backgroundColor: "blue"}} className="hover:border-black border-white m-2 px-4 font-bold border-2 rounded-4xl bg-blue-600">Blue</button>
      <button onClick={() => setColor("green")}  style={{backgroundColor: "green"}} className="hover:border-black border-white m-2 px-4 font-bold border-2 rounded-4xl bg-green-600">Green</button>
      <button onClick={() => setColor("olive")}  style={{backgroundColor: "olive"}} className="hover:border-black border-white m-2 px-4 font-bold border-2 rounded-4xl bg-lime-700">Olive</button>
      <button onClick={() => setColor("gray")}   style={{backgroundColor: "gray"}} className="hover:border-black border-white m-2 px-4 font-bold border-2 rounded-4xl bg-gray-600">Gray</button>
      <button onClick={() => setColor("yellow")} style={{backgroundColor: "yellow"}} className="hover:border-black border-white m-2 px-4 font-bold border-2 rounded-4xl bg-yellow-400">Yellow</button>
      <button onClick={() => setColor("pink")}   style={{backgroundColor: "pink"}} className="hover:border-black border-white m-2 px-4 font-bold border-2 rounded-4xl bg-pink-600">Pink</button>
      <button onClick={() => setColor("purple")} style={{backgroundColor: "purple"}} className="hover:border-black border-white m-2 px-4 font-bold border-2 rounded-4xl bg-purple-600">Purple</button>
      <button onClick={() => setColor("white")}  style={{backgroundColor: "white"}} className="hover:border-black border-white m-2 px-4 font-bold border-2 rounded-4xl bg-white">White</button>
      <button onClick={() => setColor("black")}  style={{backgroundColor: "black"}} className="hover:border-black border-white m-2 px-4 font-bold border-2 rounded-4xl bg-black text-white">Black</button>
      </div>
     </div>
    </>
  )
}

export default App

import Card from "./components/Card"

function App() {

  return (
    <>
   <div className="flex flex-col justify-center items-center gap-4">

     <h1 className="bg-green-700 text-white mb-4 ">Tailwind Test</h1>
   
    <Card username="vishallyours" hashNum= "9" />
    <Card username="Vishallmine"  />
        
            </div>
    </>
  )
}

export default App

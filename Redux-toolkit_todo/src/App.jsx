import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"

function App() {
  
  return (
  <>
  <div className="flex flex-col w-full p-16 items-center">
        <h1>redux toolkit</h1>
        <AddTodo />
        <Todos/>
    </div>
  </>
  )
}

export default App

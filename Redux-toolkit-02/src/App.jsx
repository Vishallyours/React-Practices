import { useSelector } from "react-redux"
import ThemeBtn from "./components/ThemeBtn"

function App() {

  const isDarkMode = useSelector((state) => state.theme.isDarkMode)

  
  return (
  <>
  <div className={`w-full h-screen justify-center items-center flex ${isDarkMode ? 'bg-zinc-900' : 'bg-white'}` } >
    <ThemeBtn/>
  </div>
  </>
  )
}

export default App

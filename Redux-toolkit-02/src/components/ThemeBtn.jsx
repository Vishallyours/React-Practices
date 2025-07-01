import { useDispatch } from 'react-redux'
import { toggleTheme } from '../features/theme/themeSlice'
import * as motion from "motion/react-client"
import { useState } from "react"

function ThemeBtn() {

const sun =  "/sun-black.png"
const moon = "/moon-white.png"

const [isOpen, setIsOpen] = useState(false);
const toggleSwitch = ()=> setIsOpen(!isOpen)

    const dispatch = useDispatch();

return (
    <>
    <motion.div className={`w-24 p-2 h-12 rounded-full select-none cursor-pointer flex border ${isOpen ? 'justify-start bg-white' : 'justify-end bg-black'}`} 
                layout
                transition={{
                            type: "spring",
                            duration: 0.8,
                            bounce: 1.0,
                            }}
                onClick={() => {
                        toggleSwitch();
                        dispatch(toggleTheme())
                    }}>
        <motion.div 
            layout
            transition={{
                        type: "spring",
                        duration: 0.8,
                        bounce: 0.5,
                        }}
            className="w-8 h-8 rounded-full flex justify-center" >
                
                <img 
                alt ="theme"
                className='w-8 h-8'
                src= {isOpen ? sun : moon }/>
                
        </motion.div>
                    
    </motion.div>

</>
    )
}

export default ThemeBtn

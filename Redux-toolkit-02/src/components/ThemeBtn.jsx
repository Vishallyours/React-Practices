import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { toggleTheme } from '../features/theme/themeSlice'

function ThemeBtn() {

    const dispatch = useDispatch();
    const isDarkMode = useSelector((state) => state.theme.isDarkMode)

    return (
        <>
             <button
      onClick={() => dispatch(toggleTheme())}
      className="px-4 py-2 rounded"
      style={{
        backgroundColor: isDarkMode ? '#333' : '#eee',
        color: isDarkMode ? '#fff' : '#000',
      }}
    >
      Toggle Theme
    </button>
        </>
    )
}

export default ThemeBtn

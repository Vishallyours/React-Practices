import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

export const ThemeSwitchSlice = createSlice({
    name: 'themeSwitch',
    initialState: 'lightTheme',
    reducers: {
        darkTheme: () => {
            document.body.style.backgroundColor = '#000000'
        },
        lightTheme: () => {
            document.body.style.backgroundColor = '#ffffff'
        }
    }
})

export const { darkTheme, lightTheme } = ThemeSwitchSlice.actions

export default ThemeSwitchSlice.reducer
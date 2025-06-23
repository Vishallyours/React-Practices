import { configureStore } from '@reduxjs/toolkit'
import {themeSwitchSlice} from '../features/themeSwitch/themeSwitchSlice'
export const store = configureStore({
    reducer: themeSwitchSlice
})
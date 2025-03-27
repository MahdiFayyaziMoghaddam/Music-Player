import {configureStore} from '@reduxjs/toolkit'
import { controlsSlice } from './controlsSlice'

export const store = configureStore({
  reducer: {
    controls: controlsSlice.reducer
  }
})
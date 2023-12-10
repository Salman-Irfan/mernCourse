import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import authTokenReducer from './slices/authTokenSlice'
export const store = configureStore({

    reducer: {
        counter: counterReducer,
        authToken: authTokenReducer
    },
})
import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../app/userSlice'

const rootReducer = {
    userReducer

}

const store = configureStore({
    reducer: rootReducer,
})

export default store
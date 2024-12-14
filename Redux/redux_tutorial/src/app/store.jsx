import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "../features/todo/todoSlice"
//todo reducer is just a convention to make the code more readable, the name could be anything.

export const store = configureStore({
    reducer: todoReducer,

})
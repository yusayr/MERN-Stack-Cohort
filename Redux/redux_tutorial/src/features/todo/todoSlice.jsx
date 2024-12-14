import {createSlice, nanoid} from "@reduxjs/toolkit"

const initialState = {
    todos: [{id:1, text:'Hello'}],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
        const todo = {
            id: nanoid(),
            text: action.payload,
        }
        state.todos.push(todo)
    },
    removeTodo: (state, action) => {
        state.todos = state.todos.filter((todo) => 
            todo.id !== action.payload //select the todo ids not in the payload.
        ); //the todo array will hold only the todos not in the payload
    }
}
})

export const {addTodo, removeTodo} = todoSlice.actions //exported to Components
export default todoSlice.reducer //exported to store
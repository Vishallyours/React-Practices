import { createSlice , nanoid} from "@reduxjs/toolkit";

const initialState = { // initial state for the slice
    todos: [{id: 1 , text: "hello world!"}]
}


export const todoSlice = createSlice({
    name: "todo", // name of the slice
    initialState, // initial state of the slice
    reducers: {
        addTodo: (state , action) => { //state is the current state of the slice . Action is the action that is being dispatched
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        }, 
        removeTodo : (state , action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state , action) => {
            const {id , text }= action.payload;
            const todo = state.todos.find((todo) => todo.id === id) ;
            if(todo) {
                todo.text = text;
            }
        },

    } // reducers for the slice
})

export const {addTodo , removeTodo , updateTodo} = todoSlice.actions; // exporting the actions of todos

export default todoSlice.reducer; // exporting the reducer of the slice
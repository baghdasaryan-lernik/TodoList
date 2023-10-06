import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initial_state/initialState';

export const todoFormSlice = createSlice({
  name: 'todoForm',
  initialState,
  reducers: {
    todoAdd:(state, action) => {
      state.unshift(action.payload)
    },
  deleteTodo:(state, action) => {
      return state.filter(todo => {
       if(todo.id != action.payload) return todo
      })
   },
   checkedTodo:(state, action) => {
       state.map(todo => {
       if(todo.id == action.payload.todoId){
         todo.isCompleted = action.payload.isCompleted
         return todo
       } 
       return todo
      })
   },
   clearCompleted:(state) => {
         return state.filter(todo => {
      return !todo.isCompleted
  })
    }
  }

  
});

export const {todoAdd, deleteTodo, checkedTodo, clearCompleted} = todoFormSlice.actions;

export const selectTodos = (state) => state.todoForm;




export default todoFormSlice.reducer;

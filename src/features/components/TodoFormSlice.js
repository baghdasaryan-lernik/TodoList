import { createSlice } from '@reduxjs/toolkit';


 const initialState = [
  {
   id:Math.random(),
   text:"Learn JS",
   isCompleted:false
  },
  {
    id:Math.random(),
    text:"Learn CSS",
    isCompleted:false
   },
   {
    id:Math.random(),
    text:"Learn HTML",
    isCompleted:false
   }
]



export const todoFormSlice = createSlice({
  name: 'todoForm',
  initialState,
  reducers: {
    todoAdd:(state, action) => {
    
      state.push(action.payload)
    
    
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
  }

  
});

export const { todoAdd, deleteTodo, checkedTodo } = todoFormSlice.actions;

export const selectTodos = (state) => state.todoForm;




export default todoFormSlice.reducer;

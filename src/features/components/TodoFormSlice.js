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
    
    
    }
  }

  
});

export const { todoAdd } = todoFormSlice.actions;

export const selectTodos = (state) => state.todoForm;




export default todoFormSlice.reducer;

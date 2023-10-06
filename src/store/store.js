import { configureStore } from '@reduxjs/toolkit';
import todoFormReducer from '../features/slice/TodoFormSlice';


export const store = configureStore({
  reducer: {
    todoForm:todoFormReducer
    
  },
});

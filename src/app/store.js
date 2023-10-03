import { configureStore } from '@reduxjs/toolkit';
import todoFormReducer from '../features/components/TodoFormSlice';


export const store = configureStore({
  reducer: {
    todoForm:todoFormReducer
    
  },
});

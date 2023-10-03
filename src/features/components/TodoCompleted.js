import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    selectTodos,
  clearCompleted
} from './TodoFormSlice'
const TodoCompleted = () => {
    const todos = useSelector(selectTodos)
    const dispatch = useDispatch()

    const handleClick = () => {
      dispatch(clearCompleted())
    }
    
    const completedTodos = todos.filter(todo => {
      return  todo.isCompleted
    })
    return (
    <div className='todoCompleted'>
    <span> Completed {completedTodos.length}/{todos.length}</span>
    <button onClick={handleClick}>Clear Completed</button>
  </div>
  )
}

export default TodoCompleted
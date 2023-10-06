import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    selectTodos,
  clearCompleted
} from '../slice/TodoFormSlice'
const TodoCompletedComponent = () => {
    const todos = useSelector(selectTodos)
    const dispatch = useDispatch()

    const handleClick = () => {
      dispatch(clearCompleted())
    }
    
    const completedTodos = todos.filter(todo => {
      return  todo.isCompleted
    })
    return (
    <div className="todo-completed">
  
  <div className="completed-info">
  <p>
  Completed {completedTodos.length}
  </p>
  <span>/</span> 
  <p>
  {todos.length}
  </p>
  </div>
  <div className='button-div'>
    <button onClick={handleClick}>Clear Completed</button>
    </div>
  </div>
  )
}

export default TodoCompletedComponent
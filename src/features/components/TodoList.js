import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    deleteTodo,
    checkedTodo,
    selectTodos
} from './TodoFormSlice';

const TodoList = () => {
    const todos = useSelector(selectTodos)
    const dispatch = useDispatch()
 
    
    

  return (
    <div className='todoList' style={{overflowY: todos.length > 5 ? "scroll" : "hidden"}}>
        {todos.map(todo => {
        return <div key={todo.id}><input id={todo.id} type="checkbox" checked={todo.isCompleted}  onChange={(e) => {
          dispatch(checkedTodo({todoId:todo.id, isCompleted:e.target.checked}))
        }}/><label htmlFor={todo.id}>{todo.text}</label><button onClick={() => {
          dispatch(deleteTodo(todo.id))
        }}>X</button></div>
      })}
    </div>
  )
}

export default TodoList
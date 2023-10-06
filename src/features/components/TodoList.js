import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    deleteTodo,
    checkedTodo,
    selectTodos
} from '../slice/TodoFormSlice';

const TodoListComponent = () => {
    const todos = useSelector(selectTodos)
    const dispatch = useDispatch()
 
  const handleComplete = (id) => {
    dispatch(deleteTodo(id))
  }  

  const handleChange = (isCompleted, id) => {
    dispatch(checkedTodo({todoId:id, isCompleted:isCompleted}))
  }
    

  return (
    <div className="todo-list" >
        {todos.map(todo => {
        return <div key={todo.id}>
        <input id={todo.id} type="checkbox" checked={todo.isCompleted}  onChange={(e) => handleChange(e.target.checked, todo.id)}/>
        <label htmlFor={todo.id}>{todo.text}</label>
        <button onClick={() => handleComplete(todo.id)}>X</button></div>
        })}
    </div>
  )
}

export default TodoListComponent
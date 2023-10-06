import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {todoAdd} from '../slice/TodoFormSlice';




 const TodoAddComponent = () => {
 
 const [textTodo, setTextTodo] = useState("")
 const dispatch = useDispatch();

 const handleChange = (e) => {
  setTextTodo(e.target.value)
 } 
 const handleSubmit = (e) => {
  e.preventDefault()
  if(textTodo != 0 && textTodo.length <= 54){
    dispatch(todoAdd({id:Math.random(), text:textTodo, isCompleted:false})) 
  }       
  setTextTodo("")
 }

  return (
    <div className="todo-add">
      <form action="" onSubmit={handleSubmit} >
        <input type="text" name="todo" placeholder=" Add your todo..." value={textTodo} onChange={handleChange}/>
        <button>Add</button>
      </form> 
    </div>
  );
}

export default TodoAddComponent
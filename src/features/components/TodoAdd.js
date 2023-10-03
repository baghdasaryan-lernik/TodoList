import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {todoAdd} from './TodoFormSlice';


export default function TodoAdd() {
 
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
    <div className='todoAdd'>
      <form action="" onSubmit={handleSubmit} >
        <input type="text" name='todo' placeholder='Add your todo...' value={textTodo} onChange={handleChange}/>
        <button>+</button>
      </form> 
    </div>
  );
}

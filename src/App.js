import React from 'react';
import TodoAdd from './features/components/TodoAdd';
import TodoList from './features/components/TodoList';
import TodoCompleted from './features/components/TodoCompleted';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className='combine'>
        <TodoAdd/>
        <TodoList/>
        <TodoCompleted/>
      </div>
    </div>
  );
}

export default App;

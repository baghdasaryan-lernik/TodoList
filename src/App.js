import React from 'react';
import {TodoAddComponent, TodoListComponent, TodoCompletedComponent} from './features/home/home';
import "./features/styles/App.scss"


const App = () => {
  return (
    <div className="container">
      <div className='combine'>
        <TodoAddComponent/>
        <TodoListComponent/>
        <TodoCompletedComponent/>
      </div>
    </div>
  );
}

export default App;

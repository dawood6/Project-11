import React from 'react';
import './App.css';
import TaskContainer from './Components/index';

function App() {
  const task = [
    { title: 'nedfw', done: false ,},
    { title: 'newtyu', done: true ,},
    { title: 'nhe', done: false ,},
  ]
  return (
    <div className="App"> 
      <TaskContainer tasks={task}  />
    </div>
  );
}

export default App;

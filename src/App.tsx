import React from 'react';
import './App.css';
import TaskContainer from './Components/index';

function App() {
  const task = [
    { title: 'Coding', done: true ,},
    { title: 'Book Reading', done: false ,},
    { title: 'Dinner', done: false ,},
    { title: 'Sleep', done: false ,},
  ]
  return (
    <div className="App"> 
    <h1>Task Box App</h1>
      <TaskContainer tasks={task}  />
    </div>
  );
}

export default App;
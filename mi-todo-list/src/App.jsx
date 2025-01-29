import { useState } from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { description: newTask, isDone: false, _id: Date.now() }]);
  };

  const handleToggleTask = (taskId) => {
    setTasks(tasks.map(task =>
      task._id === taskId ? { ...task, isDone: !task.isDone } : task
    ));
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task._id !== taskId));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskInput onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onToggleTask={handleToggleTask} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;




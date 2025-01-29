import { useState } from 'react';

const TaskInput = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && task.trim()) {
      onAddTask(task.trim());
      setTask('');
    }
  };

  return (
    <input
      type="text"
      placeholder="Añade una nueva tarea..."
      value={task}
      onChange={(e) => setTask(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
};

export default TaskInput;

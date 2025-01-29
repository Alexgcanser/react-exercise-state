const TaskList = ({ tasks, onToggleTask, onDeleteTask }) => {
    return (
      <ul>
        {tasks.length === 0 ? (
          <p>No hay tareas aún. ¡Añade una!</p>
        ) : (
          tasks.map((task) => (
            <li key={task._id} className={task.isDone ? "completed" : ""}>
              <span onClick={() => onToggleTask(task._id)}>
                {task.description}
              </span>
              <button onClick={() => onDeleteTask(task._id)}>❌</button>
            </li>
          ))
        )}
      </ul>
    );
  };
  
  export default TaskList;
  
  
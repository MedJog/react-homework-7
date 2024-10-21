
import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from './features/tasksSlice';

function App() {

  const dispatch = useDispatch();
  const { tasks, loading } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="App">
     <h1 className="Title">Список задач</h1>
      <ul>
        {tasks.map((task) => (
          <li className="List-item" key={task.id}>
            {task.title} 
            <span className="Item-completed">{task.completed ? 'задача выполнена' : ''}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './OverdueTasks.css';

const OverdueTasks = () => {
  const [overdueTasks, setOverdueTasks] = useState([]);

  useEffect(() => {
    const fetchOverdueTasks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/tasks/overdue');
        setOverdueTasks(response.data);
      } catch (error) {
        console.error('Error fetching overdue tasks:', error);
      }
    };

    fetchOverdueTasks();
  }, []);

  return (
    <div className="overdue-tasks-page">
      <div className="navbar">
        <nav className="stroke">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tasklist">Tasklist</Link></li>
            <li><Link to="/create">Create Task</Link></li>
            <li><Link to="/overdue">Overdue Tasks</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            
          </ul>
        </nav>
      </div>

      <div className="overdue-tasks-content">
        <h1>Overdue Tasks</h1>
        <ul className="overdue-tasks-list">
          {overdueTasks.map(task => (
            <li key={task.id} className="overdue-task-item">
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>Due Date: {new Date(task.due_date).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OverdueTasks;
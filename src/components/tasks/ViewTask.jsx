import React from "react";
import "../../styles/ViewTask.css"// Importation du style CSS

const ViewTask = ({ tasks, onDeleteTask }) => {
  return (
    
    <div className="container mt-4 ">
      <h2 className="text-center">Task List</h2>
      {tasks.length === 0 ? (
        <p className="text-center">No tasks available.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className={`task-item ${task.completed ? "completed" : ""}`}>
              <div className="task-header">
                <h4 className="task-title">{task.title}</h4>
                {task.important && <span className="badge important">Important</span>}
              </div>
              <p className="task-date"><strong>Date:</strong> {task.date}</p>
              {task.description && <p className="task-desc">{task.description}</p>}
              <button className="delete-button" onClick={() => onDeleteTask(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
   
  );
};

export default ViewTask;

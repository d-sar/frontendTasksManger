import React, { useState } from "react";
import "../../styles/AddTask.css";


const AddTask = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      alert("Please enter a task title.");
      return;
    }

    const newTask = {
      title,
      date,
      description,
      priority,
      completed,
    };

    console.log(newTask); // Log de la nouvelle tâche

    // Réinitialisation des champs après l'ajout
    setTitle("");
    setDate("");
    setDescription("");
    setPriority("");
    setCompleted(false);

    // Appeler la fonction pour fermer le formulaire
    onAddTask();
  };

  return (

      <div className="add-task-container">
        <h2>Add a Task</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="taskTitle" className="form-label">Title</label>
          <input
            type="text"
            id="taskTitle"
            placeholder="Study for the test"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="task-input"
          />

          <label htmlFor="taskDate" className="form-label">Date</label>
          <input
            type="date"
            id="taskDate"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="task-input"
          />

          <label htmlFor="taskDescription" className="form-label">Description</label>
          <input
            type="text"
            id="taskDescription"
            placeholder="Revise chapters 1 to 5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="task-input"
          />

          <label htmlFor="taskPriority" className="form-label">Priority</label>
          <select
            id="taskPriority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="task-input"
          >
            <option value="">Select...</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <label htmlFor="taskCompleted" className="form-label">Mark as Completed</label>
          <input
            type="checkbox"
            id="taskCompleted"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
            className="task-checkbox"
          />
          <button type="submit" className="add-button">Add</button>
          <button type="button" className="cancel-button" onClick={onAddTask}>Cancel</button>
        </form>
      </div>
   
  );
};

export default AddTask;

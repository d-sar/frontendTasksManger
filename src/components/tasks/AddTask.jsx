import React, { useState } from "react";
import "../../styles/AddTask.css"; 
import { Container } from 'react-bootstrap';



const AddTask = ({ onAddTask }) => {
  // States for each field
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [completed, setCompleted] = useState(false);

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    if (title.trim() === "") {
      alert("Please enter a task title.");
      return;
    }

    // Create a task object
    const newTask = {
      title,
      date,
      description,
      priority,
      completed,
    };
    console.log(newTask)

   

    // Reset fields
    setTitle("");
    setDate("");
    setDescription("");
    setPriority("");
    setCompleted(false);
  };


  return (
    <Container className="container d-flex justify-content-center align-items-center vh-100">
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


        <button type="submit" className="add-task-button" onClick={onAddTask}>Add Task</button>
      </form>
      {title}
      {date}
      {description}
      {priority}
      {completed}
    </div>
    </Container>
  );
};

export default AddTask;


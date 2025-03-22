import React, { useState } from "react";
import "../../styles/AddTask.css";

const AddTask = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [deadline, setdeadline] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [done, setdone] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTask = {
      title,
      deadline,          
      description,
      priority,
      done,
    };
    console.log("Task to be sent:", newTask); 

    try {
        const response = await fetch("http://localhost:8081/store", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTask)
        });

        if (!response.ok) {
            throw new Error("Failed to add task");
        }

        alert("Task added successfully!");
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to add task");
    }
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

        <label htmlFor="taskdeadline" className="form-label">deadline</label>
        <input
          type="date"
          id="taskdeadline"
          value={deadline}  // This binds to the deadline state variable
          onChange={(e) => setdeadline(e.target.value)} // Updeadlines the deadline state
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

        <label htmlFor="taskdone" className="form-label">Mark as done</label>
        <input
          type="checkbox"
          id="taskdone"
          checked={done}  // Checkbox state binding
          onChange={(e) => setdone(e.target.checked)} // Toggles completion status
          className="task-checkbox"
        />

        <button type="submit" className="add-button">Add</button>
        <button type="button" className="cancel-button" onClick={onAddTask}>Cancel</button>
      </form>
    </div>
  );
};

export default AddTask;

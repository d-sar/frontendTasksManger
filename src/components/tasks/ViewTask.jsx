import React, { useState, useEffect } from "react";
import "../../styles/ViewTask.css";
import EditTask from "./EditTask";
import DeleteList from "./DeleteTask";

const ViewTask = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch("http://localhost:8081/fetch");
                if (!response.ok) {
                    throw new Error("Failed to fetch tasks");
                }
                const data = await response.json();
                setTasks(data);
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        };

        fetchTasks();
    }, []);

    const handleTaskDeleted = (deletedTaskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== deletedTaskId));
    };

    return (
        <div className="view-task-container">
            <h2>Task List</h2>
            <div className="task-card-container">
                {tasks.map((task) => (
                    <div className="task-card" key={task.id}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <p><strong>📅</strong> {task.deadline}</p>
                        <div className={`priority-badge ${task.priority.toLowerCase()}`}>
                        <p><strong>Priority:</strong> 
    {task.priority === "low" && "🐢 Low"}
    {task.priority === "medium" && "⏳ Medium"}
    {task.priority === "high" && "🔥 High"}
</p>

                        </div>
                       
                        <p><strong>Status :  </strong> {task.done ? "Completed" : "Pending"}</p>
                        <div className="task-actions">
                            <DeleteList className="btn btn-danger" taskId={task.id} onTaskDeleted={handleTaskDeleted} />
                            <EditTask taskId={task.id} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ViewTask;
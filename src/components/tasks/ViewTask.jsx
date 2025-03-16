import React from "react";
import "../../styles/ViewTask.css"// Importation du style CSS


const ViewTask = () => {
    const tasks = [
        { id: 1, title: "Study React",descreption:"aaa",date:"03-04-2025", priority: "High", completed: false },
        { id: 2, title: "Grocery Shopping",descreption:"aaa",date:"03-04-2025", priority: "Medium", completed: true },
        { id: 3, title: "Workout",descreption:"aaa",date:"03-04-2025", priority: "Low", completed: false },
    ];

    return (
        <div className="view-task-container" >
            <h2>Task List</h2>
            <table className="task-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Priority</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.title}</td>
                            <td>{task.descreption}</td>
                            <td>{task.date}</td>
                            <td>{task.priority}</td>
                            <td>{task.completed ? "Completed" : "Pending"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewTask;

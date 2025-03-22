import React from "react";

function DeleteList({ taskId, onTaskDeleted }) {
    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:8081/${taskId}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error("Failed to delete task");
            }

            // Notify the parent component that the task was deleted
            onTaskDeleted(taskId);
            alert("Task deleted successfully!");
        } catch (error) {
            console.error("Error deleting task:", error);
            alert("Failed to delete task");
        }
    };

    return (
        <div>
            <button onClick={handleDelete}>❌Delete </button>
        </div>
    );
}

export default DeleteList;
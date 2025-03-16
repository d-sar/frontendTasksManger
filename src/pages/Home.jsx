
import React, { useState } from "react";
import "../styles/Home.css";
import AddTask from "../components/tasks/AddTask.jsx"; // Assurez-vous que le chemin est correct

export default function Sidebar() {
    const [showModal, setShowModal] = useState(false); // État pour afficher ou masquer le formulaire

    const handleAddTaskClick = () => {
        setShowModal(true); // Affiche la modal
    };

    const handleCloseModal = () => {
        setShowModal(false); // Masque la modal
    };

    return (
        <div style={{ marginLeft: 270, paddingTop: 100 }}>
            <button className="add-task-button" onClick={handleAddTaskClick}>
                Add Task
            </button>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <AddTask onAddTask={handleCloseModal} />
                    </div>
                </div>
            )}
        </div>
    );
}

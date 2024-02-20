import React, { useState } from "react";
import TaskButton from "./TaskButton";
import TaskForm from "./TaskForm";
export default function CreateTask({ onAddTask }) {
  const [showForm, setShowForm] = useState(false);
  const handleButtonClick = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="create-task">
      <TaskButton onClick={handleButtonClick} />
      {showForm && <TaskForm onFormSubmit={onAddTask} />}
    </div>
  );
}

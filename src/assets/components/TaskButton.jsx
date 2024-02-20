import React from "react";

function TaskButton({ onClick }) {
  return (
    <button className="task-button" onClick={onClick}>
      Create Task
    </button>
  );
}

export default TaskButton;

import React from "react";

function TaskItem({ task }) {
  return (
    <div className="task-item">
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <span className={`priority ${task.priority}`}>{task.priority}</span>
      {/* Additional task details */}
    </div>
  );
}

export default TaskItem;

import React from "react";
import TaskItem from "./TaskItem";
function TaskBoard({ tasks }) {
  return (
    <div className="task-board">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskBoard;

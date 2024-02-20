import React, { useState } from "react";

function TaskForm({ onFormSubmit }) {
  const [priority, setPriority] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: Date.now(), // Unique identifier for the task
      name: event.target.taskName.value, // Task name from the form input
      description: event.target.taskDescription.value, // Task description from the form textarea
      priority: priority, // Priority from state
    };
    onFormSubmit(newTask);
    setPriority("");
    event.target.reset();
  };

  const priorityHandler = function (event) {
    setPriority(event.target.value);
  };
  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="taskName">Task Name:</label>
        <input type="text" id="taskName" name="taskName" />
      </div>
      <div className="form-group">
        <label htmlFor="taskDescription">Description:</label>
        <textarea id="taskDescription" name="taskDescription"></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="taskPriority">Priority:</label>
        <select
          value={priority}
          onChange={priorityHandler}
          id="taskPriority"
          name="taskPriority"
        >
          <option value="">Select Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <button type="submit" className="submit-button">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;

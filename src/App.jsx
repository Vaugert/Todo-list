import Header from "./assets/components/Header";
import CreateTask from "./assets/components/CreateTask";
import { useState } from "react";
import TaskBoard from "./assets/components/TaskBoard";
function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  return (
    <div className="App">
      <Header />
      <main className="main">
        <CreateTask onAddTask={addTask} />
        <TaskBoard tasks={tasks} />
      </main>
    </div>
  );
}

export default App;

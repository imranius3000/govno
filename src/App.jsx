import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  return (
    <div className="App">
      <div>
        <h1>To-Do-List</h1>
        <ul>
          {tasks.map((task, index) => {
            return <li key={index}>{task}</li>;
          })}
        </ul>
        <input
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
          value={newTask}
          type="text"
          placeholder="set new task"
        />
        <button onClick={addTask}>Set</button>
      </div>
    </div>
  );
}

export default App;

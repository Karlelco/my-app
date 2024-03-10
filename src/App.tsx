import  { useState } from "react";
import "./App.css";
import { useMutation, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

function App() {
  const [taskText, setTaskText] = useState("");
  const createTask = useMutation(api.tasks.createTask);
  const tasks = useQuery(api.tasks.get);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ text: taskText });
    setTaskText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <input type="checkbox" />
        <button type="submit">Create Task</button>
      </form>
      <div className="App">
        {tasks?.map(({ _id, text }) => (
          <div key={_id}>{text}</div>
        ))}
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import { TaskCreate } from "./components/TaskCreate";

const App = () => {
  const [taskExist, setTaskExist] = useState("");
  const [tasksItems, setTasksItems] = useState([
    { name: "Mi primer tarea", done: false },
    { name: "Mi segunda tarea", done: true },
    { name: "Mi tercer tarea", done: false },
  ]);

  const handleCreateNewTask = (newTask) => {
    if (!tasksItems.find((task) => task.name === newTask)) {
      setTasksItems([...tasksItems, { name: newTask, done: false }]);
      setTaskExist("");
    } else {
      setTaskExist("Esa tarea ya existe.");
    }
  };

  return (
    <>
      <TaskCreate
        handleCreateNewTask={handleCreateNewTask}
        setTaskExist={setTaskExist}
        taskExist={taskExist}
      />
      <table>
        <thead>
          <tr>
            <th>Task`s</th>
          </tr>
        </thead>
        <tbody>
          {tasksItems.map((task) => (
            <tr key={task.name}>
              <td>{task.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export { App };

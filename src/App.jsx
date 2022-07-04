import { useEffect, useState } from "react";
import { TaskCreate } from "./components/TaskCreate";

const App = () => {
  const [taskExist, setTaskExist] = useState("");
  const [tasksItems, setTasksItems] = useState([]);

  const handleCreateNewTask = (newTask) => {
    if (!tasksItems.find((task) => task.name === newTask)) {
      setTasksItems([...tasksItems, { name: newTask, done: false }]);
      setTaskExist("");
    } else {
      setTaskExist("Esa tarea ya existe.");
    }
  };

  useEffect(() => {
    let tasks = localStorage.getItem('tasks');
    if (tasks) {
      setTasksItems(JSON.parse(tasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksItems));
  }, [tasksItems]);

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

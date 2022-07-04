import { useEffect, useState } from "react";

const useTasks = () => {
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

  return {
    taskExist,
    tasksItems,
    handleCreateNewTask,
    setTaskExist,
  };
};

export { useTasks };
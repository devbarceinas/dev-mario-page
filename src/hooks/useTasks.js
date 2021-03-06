import { useEffect, useState } from "react";

const useTasks = () => {
  const [taskExist, setTaskExist] = useState("");
  const [tasksItems, setTasksItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    let tasks = localStorage.getItem("tasks");
    if (tasks) {
      setTasksItems(JSON.parse(tasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);

  const handleCreateNewTask = (newTask) => {
    // Está logica me sirvio para validar si algo ya existe en el objeto
    if (!tasksItems.find((task) => task.name === newTask)) {
      setTasksItems([...tasksItems, { name: newTask, done: false }]);
      setTaskExist("");
    } else {
      setTaskExist("Esa tarea ya existe.");
    }
  };

  const handleToggleTask = (isDone) => {
    //  Esto me sirvio para el checkbox y modifcar el valor
    setTasksItems(
      tasksItems.map((task) => {
        return task.name == isDone.name
          ? { ...task, done: !isDone.done }
          : task;
      })
    );
  };

  const handleCleanTasks = () => {
    setTasksItems(tasksItems.filter((task) => !task.done));
    setShowCompleted(false);
  };

  return {
    taskExist,
    tasksItems,
    showCompleted,
    handleCreateNewTask,
    handleToggleTask,
    handleCleanTasks,
    setTaskExist,
    setShowCompleted,
  };
};

export { useTasks };

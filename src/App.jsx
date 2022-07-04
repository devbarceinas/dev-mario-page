import { TaskCreate } from "./components/TaskCreate";
import { TaskTable } from "./components/TaskTable";
import { useTasks } from "./hooks/useTasks";

const App = () => {

  const {
    taskExist,
    tasksItems,
    handleCreateNewTask,
    handleToggleTask,
    setTaskExist,
  } = useTasks();

  return (
    <>
      <TaskCreate
        handleCreateNewTask={handleCreateNewTask}
        setTaskExist={setTaskExist}
        taskExist={taskExist}
      />
      <TaskTable 
        tasks={tasksItems}
        handleToggleTask={handleToggleTask}
      />
    </>
  );
};

export { App };

import { TaskCreate } from "./components/TaskCreate";
import { TaskTable } from "./components/TaskTable";
import { useTasks } from "./hooks/useTasks";

const App = () => {

  const {
    taskExist,
    tasksItems,
    handleCreateNewTask,
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
      />
    </>
  );
};

export { App };

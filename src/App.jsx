import { ShowTasksDone } from "./components/ShowTasksDone";
import { TaskCreate } from "./components/TaskCreate";
import { TaskTable } from "./components/TaskTable";
import { useTasks } from "./hooks/useTasks";

const App = () => {
  const {
    taskExist,
    tasksItems,
    showCompleted,
    handleCreateNewTask,
    handleToggleTask,
    handleCleanTasks,
    setTaskExist,
    setShowCompleted,
  } = useTasks();

  return (
    <>
      <TaskCreate
        handleCreateNewTask={handleCreateNewTask}
        setTaskExist={setTaskExist}
        taskExist={taskExist}
      />
      <TaskTable tasks={tasksItems} handleToggleTask={handleToggleTask} />
      <ShowTasksDone
        description="Completed Tasks"
        isChecked={showCompleted}
        handleCleanTasks={handleCleanTasks}
        callback={(checked) => setShowCompleted(checked)}
      />
      {showCompleted && (
        <TaskTable
          tasks={tasksItems}
          handleToggleTask={handleToggleTask}
          showCompleted={showCompleted}
        />
      )}
    </>
  );
};

export { App };

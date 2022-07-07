import { useState } from "react";
import { ShowTasksDone } from "./components/ShowTasksDone";
import { TaskCreate } from "./components/TaskCreate";
import { TaskTable } from "./components/TaskTable";
import { useTasks } from "./hooks/useTasks";

const App = () => {
  const [showCompleted, setShowCompleted] = useState(false);
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
      <TaskTable tasks={tasksItems} handleToggleTask={handleToggleTask} />
      <ShowTasksDone
        description="Completed Tasks"
        isChecked={showCompleted}
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

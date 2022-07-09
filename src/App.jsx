import { Container } from "./components/Container";
import { Alert } from "./components/Alert";
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
    <main className="bg-ligth vh-100">
      <Container>
        <Alert error={taskExist} />
        <TaskCreate
          handleCreateNewTask={handleCreateNewTask}
          setTaskExist={setTaskExist}
          taskExist={taskExist}
        />
        <ShowTasksDone
          description="Completed Tasks"
          isChecked={showCompleted}
          handleCleanTasks={handleCleanTasks}
          callback={(checked) => setShowCompleted(checked)}
        />
        <TaskTable
          title="Tareas por hacer"
          tasks={tasksItems}
          handleToggleTask={handleToggleTask}
        />
        <hr className="my-4" />
        {showCompleted && (
          <TaskTable
            title="Tareas completas"
            tasks={tasksItems}
            handleToggleTask={handleToggleTask}
            showCompleted={showCompleted}
          />
        )}
      </Container>
    </main>
  );
};

export { App };

import { TaskRow } from "./TaskRow";

const TaskTable = ({ tasks, handleToggleTask, showCompleted = false}) => {

  const handleTaskRow = (isDone) => {
    return (
      tasks
        .filter(task => task.done === isDone)
        .map((task) => (
          <TaskRow key={task.name} task={task} handleToggleTask={handleToggleTask} />
        ))
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Task`s</th>
        </tr>
      </thead>
      <tbody>
        {handleTaskRow(showCompleted)}
      </tbody>
    </table>
  );
};

export { TaskTable };

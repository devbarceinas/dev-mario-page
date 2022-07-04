import { TaskRow } from "./TaskRow";

const TaskTable = ({ tasks, handleToggleTask }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Task`s</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <TaskRow key={task.name} task={task} handleToggleTask={handleToggleTask} />
        ))}
      </tbody>
    </table>
  );
};

export { TaskTable };

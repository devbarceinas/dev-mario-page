import { TaskRow } from "./TaskRow";

const TaskTable = ({ tasks }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Task`s</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <TaskRow key={task.name} task={task} />
        ))}
      </tbody>
    </table>
  );
};

export { TaskTable };

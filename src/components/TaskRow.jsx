const TaskRow = ({ task, handleToggleTask }) => {
  return (
    <tr>
      <td>{task.name}</td>
      <td>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => handleToggleTask(task)}
        />
      </td>
    </tr>
  );
};

export { TaskRow };

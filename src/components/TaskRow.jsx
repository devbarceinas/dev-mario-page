const TaskRow = ({ task }) => {
  return (
    <tr>
      <td>{task.name}</td>
      <td>
        <input
          type="checkbox"
          value={task.done}
          onChange={() => alert("Cambio")}
        />
      </td>
    </tr>
  );
};

export { TaskRow };

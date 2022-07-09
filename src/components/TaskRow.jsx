const TaskRow = ({ task, handleToggleTask }) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-9">
          <h5>{task.name}</h5>
        </div>
        <div className="col-3">
          <input
            type="checkbox"
            className="form-check-input"
            checked={task.done}
            onChange={() => handleToggleTask(task)}
          />
        </div>
      </div>
    </li>
  );
};

export { TaskRow };

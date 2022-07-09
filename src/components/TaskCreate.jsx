import { useState } from "react";

const TaskCreate = ({ handleCreateNewTask }) => {

  const [newTaskName, setNewTaskName] = useState('');

  const handleChange = event => {
    const {value} = event.target;
    setNewTaskName(value);
  }

  const handleOnSubmit = event => {
    event.preventDefault();
    if (newTaskName !== '') {
      handleCreateNewTask(newTaskName);
      setNewTaskName('');
      return;
    }
  }

  return (
    <section>
      <form onSubmit={handleOnSubmit} className="mt-5 mb-2 row">
        <div className="col-9">
          <input 
            type="text" 
            placeholder="Enter task" 
            value={newTaskName}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="col-3">
          <button 
            type="submit"
            className="btn btn-primary block">
              Add a new task
          </button>
        </div>
      </form>
    </section>
  );
};

export { TaskCreate };

import { useState } from "react";

const TaskCreate = ({ handleCreateNewTask, taskExist }) => {

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
    <>
      <h3>{taskExist}</h3>
      <form onSubmit={handleOnSubmit}>
        <input 
          type="text" 
          placeholder="Enter task" 
          value={newTaskName}
          onChange={handleChange} 
        />
        <button type="submit">Add task</button>
      </form>
    </>
  );
};

export { TaskCreate };

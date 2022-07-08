import React from 'react'

const ShowTasksDone = ({
  description,
  isChecked,
  callback,
  handleCleanTasks,
}) => {

  const handleDeleteTasks = () => {
    if(window.confirm('Are you sure you want to delete it')) {
      handleCleanTasks();
    }
  }

  return (
    <div>
      <input 
        type="checkbox" 
        checked={isChecked} 
        onChange={(event) => callback(event.target.checked)}
      />
      <label>Show {description}</label>
      <button onClick={handleDeleteTasks}>
        Clear
      </button>
    </div>
  )
}

export { ShowTasksDone }
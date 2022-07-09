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
    <section className='my-4 row'>
      <div className="col-7">
        <input 
          type="checkbox" 
          checked={isChecked} 
          onChange={(event) => callback(event.target.checked)}
        />
        <label>Show {description}</label>
      </div>
      <div className="col-5">
        <button
          className='btn btn-danger' 
          onClick={handleDeleteTasks}>
          Clear
        </button>
      </div>
    </section>
  )
}

export { ShowTasksDone }
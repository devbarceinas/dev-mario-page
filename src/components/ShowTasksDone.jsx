import React from 'react'

const ShowTasksDone = ({
  description,
  isChecked,
  callback,
}) => {
  return (
    <div>
      <input 
        type="checkbox" 
        checked={isChecked} 
        onChange={(event) => callback(event.target.checked)}
      />
      <label>Show {description}</label>
    </div>
  )
}

export { ShowTasksDone }
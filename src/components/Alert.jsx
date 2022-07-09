import React from 'react'

const Alert = ({ error }) => {
  return (
    <>
      {error && (
        <div className='alert alert-warning mt-3 text-center'>
          {error}
        </div>
      )}
    </>
  )
}

export { Alert }
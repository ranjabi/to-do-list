import React from 'react'

const ToggleStatus = () => {
  return (
    <div className="container mx-auto mt-6 w-8/12 flex flex-wrap justify-center">
      <button className='bg-blue-500 text-white px-3 py-1 m-1 rounded-lg hover:opacity-80'>All Tasks</button>
      <button className='bg-blue-500 text-white px-3 py-1 m-1 rounded-lg hover:opacity-80'>Active Tasks</button>
      <button className='bg-blue-500 text-white px-3 py-1 m-1 rounded-lg hover:opacity-80'>Completed Tasks</button>
    </div>
  )
}

export default ToggleStatus

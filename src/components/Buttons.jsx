import React from 'react'

const Buttons = ({name}) => {
  return (
    <div className='text-black'>
        <button className='bg-gray-300 rounded-lg px-4 py-2 m-2'>{name}</button>
    </div>
  )
}

export default Buttons
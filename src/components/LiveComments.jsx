import React from 'react'
import { FaUserCircle } from "react-icons/fa";

const LiveComments = ({name,message}) => {
  return (
    <div className='flex items-center p-2 m-2 gap-2'>
        <div><FaUserCircle size={25}/></div>
        <div className='font-semibold text-[16px]'>{name}</div>
        <div className='ml-2 text-[15px]'>{message} 💥💥</div>
    </div>
  )
}

export default LiveComments
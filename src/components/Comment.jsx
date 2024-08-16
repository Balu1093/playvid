import React from 'react'
import { MdAccountCircle } from "react-icons/md";

const Comment = ({data}) => {
  
    const{Name,comments,replies}=data
  return (
    <div className='flex gap-2 mt-2 bg-slate-300 dark:text-black rounded-lg items-center'>
    <div>
    <MdAccountCircle size={40} />
    </div>
    <div>
        <p className='text-xl font-semibold'>{Name}</p>
        <p>{comments}</p>
    </div>
</div>
  )
}

export default Comment
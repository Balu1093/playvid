import React, { useState } from 'react'
import YoutubeComments from './YoutubeComments'
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi'

const YoutubeCommentsContainer = ({data}) => {
  const [displayComments,setDisplayComments]=useState(true)
  const toggleComments=()=>{
    setDisplayComments(!displayComments)  
  }
  return (
    <div className='w-full bg-slate-100 dark:bg-slate-500 rounded-lg p-2 md:p-5'>
      <div onClick={toggleComments} className='flex justify-between items-center'>
      <h1 className='font-bold text-2xl'>Comments({data.length})</h1>
      {displayComments?<BiSolidUpArrow className='mr-3' size={25}/>:<BiSolidDownArrow className='mr-3' size={25}/>}
      </div>
      <div className=''>
       {displayComments && data.map((data)=><YoutubeComments data={data}/>)}
      </div>
    </div>
  )
}

export default YoutubeCommentsContainer
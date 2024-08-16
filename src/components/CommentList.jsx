import React, { useState } from 'react'
import Comment from './Comment'

const CommentList = ({comments}) => {
  const[data,setData]=useState(false)

  const toggle=()=>{
    setData(!data)
  }

  return(comments.map((data,index)=>(
               <div className=''>
                <div className='cursor-pointer' onClick={toggle}>
                <Comment key={index} data={data}/>
                </div>
               {data && <div className='pl-5 ml-5 border border-l-black'>
                <CommentList comments={data.replies}/>
              </div>}
            </div>))
    
  ) 
}

export default CommentList
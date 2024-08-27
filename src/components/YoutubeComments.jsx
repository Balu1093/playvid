import React from 'react'
import { MdAccountCircle } from "react-icons/md";

const YoutubeComments = ({data}) => {
  
    const{snippet}=data
    const{topLevelComment} =snippet
    const snippets = topLevelComment.snippet;
    const{authorProfileImageUrl,authorDisplayName,textOriginal}= snippets;

  return (
    <div className='flex gap-2 mt-10 items-center justify-start'>
    <div className='w-8 h-8 min-w-8 md:w-10 md:h-10 md:min-w-10 rounded-full'>
      <img className='w-full h-full rounded-full' src={authorProfileImageUrl}alt="" />
    </div>
    <div>
        <p className='text-[14px] md:text-xl font-semibold'>{authorDisplayName}</p>
        <p className='text-[11px] md:text-[18px]'>{textOriginal}</p>
    </div>
</div>
  )
}

export default YoutubeComments
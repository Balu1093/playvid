import React from 'react'

const VideoCard = ({data}) => {
    if(!data) return;
    const{snippet,statistics}=data;
    const{thumbnails,title,channelTitle}=snippet;

  return (
    <div className='p-2 m-2 mt-10 w-[100%] md:w-80'>
      <div className='rounded-lg w-full'>
        <img className='w-full rounded-lg' src={thumbnails?.medium?.url} alt="" />
      </div>
      <div className='w-full'>
        <h1 className='text-[18px] font-normal mt-1'>{title}</h1>
        <h1 className='mt-1'>{channelTitle}</h1>
        <h1>{statistics.viewCount} Views</h1>
      </div>
    </div>
  )
}

export default VideoCard
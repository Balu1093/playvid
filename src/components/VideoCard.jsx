import React from 'react'
import useChannelInfo from '../utils/hooks/useChannelInfo';

const VideoCard = ({data}) => {
   const{snippet,statistics}=data;
    const{thumbnails,title,channelTitle,channelId}=snippet;
    // const channel = useChannelInfo(channelId)
    // if(!channel.length) return;
    // const{url}=channel[0].snippet.thumbnails.medium;

  return (
    <div className='mt-10 w-[100%] md:w-80'>
      <div className='rounded-lg w-full'>
        <img className='w-screen rounded-lg' src={thumbnails?.medium?.url} alt="" />
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

// {/* <div className='flex items-center'>
//           <div className='w-8 h-8 min-w-8 md:w-10 md:h-10 md:min-w-10 rounded-full'>
//             <img className='w-full h-full rounded-full' src={url} alt="" />
//           </div>
//           </div> */}
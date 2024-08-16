import React from 'react'
import { useSelector } from 'react-redux';
import useChannelInfo from '../utils/hooks/useChannelInfo';

const SearchVideo = ({data}) => {
  const nav_Toggle = useSelector(store=>store.config.navToggle)
    console.log(data)
    if(!data) return;
    const{snippet}=data;
    const{thumbnails,title,channelTitle}=snippet;

  return (
    <div className='md:flex gap-2 p-2 m-2 mt-10 w-full lg:w-8/12 mx-auto'>
      <div className='rounded-lg w-full lg:w-6/12'>
        <img className='rounded-lg w-full h-full' src={thumbnails?.medium?.url} alt="" />
      </div>
      <div className='w-full lg:w-6/12 lg:mr-20'>
        <h1 className='text-[14px] md:text-[18px] font-semibold mt-1 w-full'>{title}</h1>
        <div className='flex items-center'>
          <h1 className='mt-1 text-[14px] md:text-[18px] w-full'>{channelTitle}</h1>
        </div>
        
      </div>
    </div> 
  )
}

export default SearchVideo
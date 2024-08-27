import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import SearchVideo from './SearchVideo';
import { useDispatch, useSelector } from 'react-redux';
import { addVideoInfo } from '../utils/videoSlice';
import ButtonCard from './ButtonCard';
import Shimmer from './Shimmer';

const SearchResults = () => {
    const dispatch = useDispatch();
    const videoInfo = useSelector(store=>store.video.videoInfo)
    const{query}=useParams();
    const youtube_search =async()=>{
        const data = await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q="+query+"&key="+process.env.REACT_APP_YOUTUBE_API)
        const json = await data.json()
        const filter = json.items.filter((x)=>x.id.kind === "youtube#video")
        dispatch(addVideoInfo(filter))}
       useEffect(()=>{
        if(!videoInfo.length){
          youtube_search()
        }
        },[])

  if(!videoInfo.length) return <Shimmer/>;

  return (
    <div className='flex flex-col w-[90%] md:w-12/12 2xl:w-6/12 mx-auto mt-4'>
      <div className= 'fixed top-[95px] left-0 z-10 bg-white w-full dark:bg-gray-600 dark:text-white'>
        <ButtonCard/>
      </div>
      <div className=' mt-10 ml-2 md:ml-0'>
        <h1 className='text-xl md:text-2xl font-bold'>Latest from {query}</h1>
      </div>
      {videoInfo.map((data)=><Link to={'/watch/'+data?.id?.videoId+'/'+data?.snippet?.channelId}><SearchVideo data={data}/></Link>)}
    </div>
  )
}

export default SearchResults
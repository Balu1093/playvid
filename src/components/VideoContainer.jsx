import React, { useEffect, useState } from 'react'
import { GOOGLE_FETCH} from '../utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addVideoInfo } from '../utils/videoSlice'


const VideoContainer = () => {
  const video1=useSelector(store=>store.video.videoInfo)
  const dispatch=useDispatch()
  const [video,setVideo]=useState([])
  const trendingVideos=async()=>{
    const data = await fetch(GOOGLE_FETCH)
    const json = await data.json()
    setVideo(json.items)
    dispatch(addVideoInfo(json.items))}

  useEffect(()=>{
   trendingVideos()
  },[])

  const handleScroll=()=>{
    if(video.length >=500 && window.innerHeight+ document.documentElement.scrollTop +1 >= document.documentElement.scrollHeight){
    setVideo(prev=>[...prev.splice(49,0)])
   }
   else if(video.length === 0 || window.innerHeight+ document.documentElement.scrollTop +1 >= document.documentElement.scrollHeight ){
    setVideo(prev=>[...prev,...video1])
   }
   
  }
  useEffect(()=>{
      window.addEventListener('scroll',handleScroll)
    
    return()=> window.removeEventListener('scroll',handleScroll)
  },[video])

  return (
    <div>
      <div className='flex flex-wrap w-full'>
      {video.map(data=><Link to={"/watch/"+data.id+"/"+data?.snippet?.channelId}><VideoCard key={data?.id} data={data}/></Link>)}
      </div>
     </div>
  )
}

export default VideoContainer;
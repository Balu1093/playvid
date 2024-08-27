import React, { useEffect, useState } from 'react'
import { LIVE_VIDEO } from '../constants'

const useLiveVideo = (videoId) => {
// const dispatch=useDispatch()
const [video,setVideo]=useState([])
const liveVideos=async()=>{
const data = await fetch("https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId="+videoId+"&key="+process.env.REACT_APP_YOUTUBE_API)
const json = await data.json()
setVideo(json.items)
// dispatch(addVideoInfo(json.items))
}
      
    useEffect(()=>{
    liveVideos()
    },[])
    
   return video 
}

export default useLiveVideo;
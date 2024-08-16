import React, { useEffect, useState } from 'react'
import { LIVE_VIDEO } from '../constants'

const useLiveVideo = () => {
// const dispatch=useDispatch()
const [video,setVideo]=useState([])
const liveVideos=async()=>{
const data = await fetch(LIVE_VIDEO+process.env.REACT_APP_YOUTUBE_API)
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
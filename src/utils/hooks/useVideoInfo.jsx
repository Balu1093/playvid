import React, { useEffect, useState } from 'react'
import { addVideoInfo } from '../videoSlice'
import { useDispatch, useSelector } from 'react-redux'

const useVideoInfo = (id) => {
    const [video,setVideo]=useState([])
    const videoData =async()=>{
        const data = await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id='+id+'&key='+process.env.REACT_APP_YOUTUBE_API)
        const json = await data.json()
        setVideo(json.items)
        }
        
       useEffect(()=>{
        videoData()},[])
    return video;
}

export default useVideoInfo
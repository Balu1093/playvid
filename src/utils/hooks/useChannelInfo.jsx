import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useChannelInfo = (channelId) => {
    const [video,setVideo]=useState([])
    const videoData =async()=>{
        const data = await fetch('https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id='+channelId+'&key='+process.env.REACT_APP_YOUTUBE_API)
        const json = await data.json()
        setVideo(json.items)
        }
       useEffect(()=>{
        videoData()},[])

    return video;
}

export default useChannelInfo
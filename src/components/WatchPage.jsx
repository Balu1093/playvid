import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import { closeToggle } from '../utils/configSlice'
import useVideoInfo from '../utils/hooks/useVideoInfo'
import useChannelInfo from '../utils/hooks/useChannelInfo'
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import LiveChatContainer from './LiveChatContainer'
import useLiveVideo from '../utils/hooks/useLiveVideo'
import YoutubeCommentsContainer from './YoutubeCommentsContainer'
import Shimmer from './Shimmer'



const WatchPage = () => {
  const[showInfo,setShowInfo]=useState(true)
  const navToggle = useSelector((state)=>state.config.navToggle)
  const dispatch=useDispatch()
  const {id,channelId} = useParams()
  const video=useVideoInfo(id)
  const channel = useChannelInfo(channelId)
  const YoutubeComments = useLiveVideo(id)
  useEffect(()=>{
    dispatch(closeToggle())
  },[])

  if (!video.length || !channel.length) return <Shimmer/>;
  
  const{snippet,statistics}=video[0];
  const{description,title,channelTitle}=snippet;
  const{viewCount,commentCount,likeCount}=statistics;
  
  const{url}=channel[0]?.snippet?.thumbnails?.medium;

  const toggleInfo=()=>{
    setShowInfo(!showInfo)
  }  

  // console.log(YoutubeComments)
  
return (
    <div className={`${navToggle && 'md:ml-[300px] lg:ml-[300px]'} transition-all duration-500 w-full md:w-9/12 2xl:mx-auto`}>
      <div className='w-full 2xl:flex'>
      <div className='w-[97%] mx-auto h-[300px] md:w-[900px] lg:w-[1400px] lg:h-[700px]'>
      <iframe className="w-full h-full" src={"https://www.youtube.com/embed/"+id+"?autoplay=1"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div className='w-11/12 md:w-full mx-auto ml-5 h-[450px] 2xl:w-4/12 2xl:h-[700px] border-t border-l border-r border-black mt-4 2xl:mt-0 overflow-y-hidden'>
      <LiveChatContainer/>
      </div>
      </div>
      <div className='mt-4 w-[95%] md:w-full mx-auto'>
        <h1 onClick={toggleInfo} className={`p-2 cursor-pointer font-bold text-[16px] md:text-[18px] 2xl:text-2xl flex justify-between items-center ${!showInfo && 'bg-gray-200 rounded-lg dark:text-black'}`}>{title}{showInfo ?<BiSolidUpArrow className='mr-3' size={25}/>:<BiSolidDownArrow className='mr-3' size={25}/>}</h1>
        {showInfo && <div className=''>
        <div className='flex gap-5 bg-slate-400 w-fit p-2 rounded-lg bg-opacity-60 mt-4'>
        <h1 className='font-medium'>{viewCount} Views</h1>
        <h1 className='flex items-center font-medium'><BiSolidLike size={25}/> {likeCount}</h1>
        </div>
        <div className='mt-5 flex items-center gap-2'>
        <div className='bg-slate-300 w-14 h-14 rounded-full flex items-center justify-center'>
          <img className='w-full h-full rounded-full' src={url} alt="" />
        </div>
        <div className='font-bold text-xl'>{channelTitle}</div>
        </div>
        <div className='mt-5'>
          <h3 className='font-medium text-[12px] md:text-[18px] p-1'>{description}</h3>
        </div>
        </div>}
        </div>
      {/* <div className='mt-5 p-4 w-full md:w-[1300px]'>
        <CommentsContainer/>
      </div> */}
      <div className='w-[95%] mx-auto md:w-full mt-5 mb-2'>
        {YoutubeComments?<YoutubeCommentsContainer data={YoutubeComments}/>:<h1 className='w-full bg-slate-100 dark:bg-slate-500 rounded-lg p-2 md:p-5 text-center font-semibold'>Comments Disabled</h1>}
      </div>
      </div>
  )
}

export default WatchPage
import React, { useEffect, useState } from 'react'
import LiveComments from './LiveComments'
import { useDispatch, useSelector } from 'react-redux'
import { addChatMessage } from '../utils/chatSlice'
import {name,message} from '../utils/scraps'
import { IoMdSend } from "react-icons/io";

const LiveChatContainer = () => {
const[liveText,setLiveText]=useState()
const dispatch =useDispatch()
const chatText =useSelector(store=>store.chat.chatMessage)
useEffect(()=>{
      const time=  setInterval(()=>{
        dispatch(addChatMessage({
            name:name(),
            message:message(15)}))
        },500)
    
    return ()=> clearInterval(time)
    },[])
    const handleClick=()=>{
      dispatch(addChatMessage({
        name:"Balu palani",
        message:liveText,
    }))
     setLiveText('');
    }


  return (
    <div className='w-full h-full md:mt-0 bg-gray-400 bg-opacity-20'>
    <div className='w-full h-full overflow-y-scroll flex flex-col-reverse -mt-14'>
    {chatText.map((message,index)=><LiveComments key={index} name={message.name} message={message.message}/>)}
    </div>
    <form className='flex items-center justify-between border-b border-black bg-gray-400 h-14 bg-opacity-60 p-2' onSubmit={(e)=>{
      e.preventDefault()
      dispatch(addChatMessage({
        name:"Balu palani",
        message:liveText,
    }))
     setLiveText('');
    }}>
    <input placeholder='chat...' type="text" className='border border-black rounded-lg h-8 w-10/12 p-2 outline-none dark:text-black'value={liveText} onChange={(e)=>setLiveText(e.target.value)} />
    <IoMdSend size={25} className='mr-5' onClick={handleClick} />
    </form>
    </div>
  )
}

export default LiveChatContainer
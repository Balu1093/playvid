import React, { useEffect } from 'react'
import { GrNext } from "react-icons/gr";
import { useSelector } from 'react-redux';
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineVideoCameraFront } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";
import { GoHistory } from "react-icons/go";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { SlLike } from "react-icons/sl";



const SideBar = () => {
   const navToggle = useSelector((state)=>state.config.navToggle)

  return (
    <>
   <div className={`w-72 ${!navToggle && '-ml-[300px]'} transition-all duration-500 fixed z-20 h-full rounded-lg bg-gray-200`}>
      <div className='dark:bg-gray-600 dark:text-white h-full -mt-[1px] border border-black rounded-lg'>
      <div className='text-[18px] font-normal p-6 m-5 w-full flex flex-col'>
        <a href="/"><h1 className='flex gap-3 items-center px-4 py-1 rounded-lg w-full cursor-pointer'><IoHomeOutline className='' size={20}/> <span>Home</span> </h1></a>
        <a href="/search/trending shorts video"><h1 className='flex gap-3 items-center px-4 py-1 rounded-lg mt-2 w-full cursor-pointer'><MdOutlineVideoCameraFront size={20}/> Shorts</h1></a>
        <h1 className='ml-[15px] flex gap-3 items-center rounded-lg mt-2 w-full cursor-pointer'><MdSubscriptions size={20}/>Subscriptions</h1>
      </div>
      <hr className='-mt-6 w-[90%] border border-[#606060] border-opacity-40'/>
      <div className='flex flex-col gap-2 mt-2 p-5 m-6'>
        <div className='flex items-center'>
          <h1 className='text-2xl font-bold'>You</h1>
          <GrNext size={15} className='mt-2'/>
        </div>
        <div>
          <ul className='text-[18px] font-normal'>
            <li className='flex gap-3 items-center px-4 py-1 rounded-lg mt-2 w-full cursor-pointer'><RiAccountCircleLine size={22}/>Your Channel</li>
            <li className='flex gap-4 items-center px-4 py-1 rounded-lg mt-2 w-full cursor-pointer'><GoHistory size={20}/>History</li>
            <li className='flex gap-3 items-center px-4 py-1 rounded-lg mt-2 w-full cursor-pointer'><MdOutlinePlaylistPlay size={24}/>Playlists</li>
            <li className='flex gap-3 items-center px-4 py-1 rounded-lg mt-2 w-full cursor-pointer'><MdOutlineOndemandVideo size={20}/>Your video</li>
            <li className='flex gap-3 items-center px-4 py-1 rounded-lg mt-2 w-full cursor-pointer'><MdOutlineWatchLater size={20}/>Watch Later</li>
            <li className='flex gap-3 items-center px-4 py-1 rounded-lg mt-2 w-full cursor-pointer'><SlLike size={20}/>Liked video</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default SideBar
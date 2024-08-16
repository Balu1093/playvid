import React, { useEffect, useState } from 'react'
import { TfiAlignLeft } from "react-icons/tfi";
import playvid from '../assets/playvid.png'
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addNavSmToggle, addNavToggle } from '../utils/configSlice';
import { AiOutlineClose } from "react-icons/ai";
import DarkMode from '../DarkMode/DarkMode';
import { YOUTUBE_SEARCH } from '../utils/constants';
import { CiSearch } from "react-icons/ci";
import { addSearchInfo } from '../utils/searchSlice';
import { IoCloseCircleOutline } from "react-icons/io5";
import { searchToggle } from '../utils/searchToggleSlice';



const Header = ({darkMode,setDarkMode}) => {
  const searchInfo = useSelector((store)=>store.search)
  const toggle_search = useSelector((store)=>store.search.searchToggle)
  const nav_Toggle = useSelector((store)=>store.config.navSmToggle)
  const dispatch = useDispatch()
  const navToggle = useSelector((state)=>state.config.navToggle)
  const [search,setSearch]= useState([])
  const [result,setResult]=useState([]);
  const [focus,setFocus]=useState(false)
  
  const Video_Info=async()=>{
    const data = await fetch(YOUTUBE_SEARCH+ search)
    const json = await data.json()
    setResult(json[1])
    dispatch(addSearchInfo({
      [search]:json[1]
  }))}

  useEffect(()=>{
    if(darkMode === true){
      localStorage.setItem('seletedTheme','dark')
    }
    else if(darkMode === false){
      localStorage.setItem('seletedTheme','')
    }
    const seletedTheme = localStorage.getItem('seletedTheme')

   if(seletedTheme === 'dark'){
      setDarkMode(true)
    }
   },[darkMode])
  
  useEffect(()=>{
    const timer= setTimeout(()=>{
      if(searchInfo[search]){
        setResult(searchInfo[search])}
     else
        Video_Info()},200)
     
     return ()=>{
      clearTimeout(timer)
    }  
  },[search])

  const toggleNav =()=>{
    dispatch(addNavToggle())
  }
  const toggleSmNav=()=>{
    dispatch(addNavSmToggle())
  }

  const toggleDark=()=>{
    setDarkMode(!darkMode);
  }

  const toggleSearch=()=>{
    dispatch(searchToggle())
  }
    
  return (
    <div className=''>
    {!toggle_search && <div className='bg-white fixed z-20 h-24 grid grid-flow-col dark:bg-gray-600 dark:text-white w-full -mt-24'>
      <div className='flex items-center col-span-1'>
      <div className='hidden md:block  mx-1 md:mx-5 my-2'onClick={toggleNav}>
        {navToggle?<AiOutlineClose size={30} className='cursor-pointer'/>:<TfiAlignLeft size={30} className='cursor-pointer'/>}
        </div>
      <div className='md:hidden ml-3 mx-1 md:mx-5 my-2'onClick={toggleSmNav}>
        {nav_Toggle?<AiOutlineClose size={30} className='cursor-pointer'/>:<TfiAlignLeft size={30} className='cursor-pointer'/>}
        </div>
      <div className='ml-3 w-28 h-26 md:w-40'>
        <a href="/"><img className='w-full h-full' src={playvid} alt="" /></a>
      </div>
      </div>
      <div className='flex items-center gap-2 col-span-10 justify-center'>
        <div className='hidden w-6/12 border border-[#606060] dark:border-slate-300 dark:border-opacity-35 rounded-full md:flex items-center h-10'>
        <input onFocus={()=>setFocus(true)} type="text" className='md:block bg-transparent w-10/12 p-2 m-2 outline-none' value={search} onChange={(e)=>setSearch(e.target.value)} />
        <a href={search.length?'/search/'+search:null} className='h-full w-2/12'><button className='bg-[#606060] h-full w-full flex justify-center items-center rounded-r-full '><FaSearch className='' size={20}/></button></a>
        </div>
        <div className='md:hidden w-9 h-9 bg-gray-400 rounded-full flex items-center justify-center ml-3 md:ml-1 cursor-pointer'onClick={toggleSearch}><FaSearch className='' size={20}/></div>

        {search && <div className="fixed top-[70px] w-[250px] md:[300px] lg:w-[400px] 2xl:w-[800px] flex flex-col text-white font-medium"><div className='bg-black rounded-lg bg-opacity-90'>{focus && result.map((data)=><a href={"/search/"+data}><div className='flex gap-2 items-center px-4 py-2 hover:bg-slate-200 hover:bg-opacity-35'><CiSearch/>{data}</div></a>)}</div></div>}
        </div>
      <div className='mx-4 col-span-1 flex items-center justify-end gap-14 mr-10'>
        <div className='ml-5 md:ml-0'>
        <DarkMode toggleDark={toggleDark}/>
        </div>
        <div className='group'>
        <FaUser size={27}/>
        <div className='bg-gray-400 absolute top-15 right-1 rounded-lg p-4 hidden group-hover:block dark:bg-black'>
          <h3 className='bg-white bg-opacity-30 px-1 rounded-md cursor-pointer'>My Favourite</h3>
          <h3 className='bg-white bg-opacity-30 px-1 rounded-md mt-2 cursor-pointer'>Logout</h3>
          <h3 className='bg-white bg-opacity-30 px-1 rounded-md mt-2 cursor-pointer'>About us</h3>
        </div>
        </div>
        </div>
    </div>}
    {toggle_search && <div className='flex bg-white fixed z-20 w-full h-[96px] -mt-24 dark:bg-gray-600 dark:text-white'>
      <div className='w-1/12 mt-[30px] ml-2'><IoCloseCircleOutline className='cursor-pointer' onClick={toggleSearch} size={35}/></div>
      <div className='w-10/12 h-16 border ml-2 border-[#606060] dark:border-slate-300 dark:border-opacity-35 rounded-full flex items-center mt-4'>
        <input onFocus={()=>setFocus(true)} type="text" className='bg-transparent w-10/12 p-2 m-2 outline-none' value={search} onChange={(e)=>setSearch(e.target.value)} />
        <a href={search.length?'/search/'+search:null} className='h-full w-2/12'><button className='bg-[#606060] h-full w-full flex justify-center items-center rounded-r-full '><FaSearch className='' size={20}/></button></a>
        </div>
        {search && <div className="fixed left-10 md:left-14 lg:left-20 top-[70px] w-9/12 flex flex-col text-white font-medium"><div className='bg-black rounded-lg bg-opacity-90'>{focus && result.map((data)=><a href={"/search/"+data}><div className='flex gap-2 items-center px-4 py-2 hover:bg-slate-200 hover:bg-opacity-35'><CiSearch/>{data}</div></a>)}</div></div>}
        </div>}
    </div>
  )
}

export default Header
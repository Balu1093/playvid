import React from 'react'
import ButtonCard from './ButtonCard'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const toggle_search = useSelector((store)=>store.search.searchToggle)
  const navToggle = useSelector(store=>store.config.navToggle)

  return (
    <div className={`${navToggle && 'ml-[280px]'} transition-all duration-500`}>
      <div className={`fixed z-10 bg-white px-2 w-full dark:bg-gray-600 dark:text-white ${toggle_search && '-mt-0 left-0'}`}>
        <ButtonCard/>
      </div>
      <div className='mt-4 w-[95%] mx-auto md:w-full'>
      <VideoContainer/>
      </div>
    </div>
  )
}

export default MainContainer;
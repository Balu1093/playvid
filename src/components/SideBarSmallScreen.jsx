import React from 'react'
import SideBarSm from './SideBarSm'
import { useSelector } from 'react-redux'

const SideBarSmallScreen = () => {
  const nav_Toggle = useSelector((store)=>store.config.navSmToggle)

  return (
    <div className={`bg-[rgba(49,49,49,0.7)] fixed w-[100%] h-[100%] top-0 ${nav_Toggle && 'left-[0%]'} transition-all duration-500 -left-[100%] right-0 bottom-0 z-10 text-white`}>
        <SideBarSm/>
    </div>
  )
}

export default SideBarSmallScreen
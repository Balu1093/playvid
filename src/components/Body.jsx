import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import { MyComponent } from '../App'
import { theme } from '..'
import { ThemeProvider } from 'styled-components'
import SideBarSmallScreen from './SideBarSmallScreen'
import { useSelector } from 'react-redux'

const Body = () => {
  const nav_Toggle = useSelector((store)=>store.config.navSmToggle)
  const seletedTheme = localStorage.getItem('seletedTheme')

  nav_Toggle?document.body.style.overflow ="hidden":document.body.style.overflow="auto";

  return (
    <ThemeProvider theme={theme}>
    <div className='flex dark:bg-gray-600 dark:text-white mt-24'>
      <SideBarSmallScreen/>
      <SideBar/>
      <Outlet/>
      <MyComponent/>
    </div>
    </ThemeProvider>
  )
}

export default Body
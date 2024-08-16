import { useEffect, useState } from 'react';
import Body from './components/Body';
import Header from './components/Header';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import SearchResults from './components/SearchResults';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatch, useSelector } from 'react-redux';
import {closeSmToggle, closeToggle } from './utils/configSlice';
import { closeSearchToggle } from './utils/searchToggleSlice';
import { ThemeProvider } from 'styled-components';
import { theme } from '.';



const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
  {
    path:"/",
    element:<MainContainer/>
  },
  {
    path:"/watch/:id/:channelId",
    element:<WatchPage/>
  },
  {
    path:"/search/:query",
    element:<SearchResults/>
  }
]
}])

 

 export const MyComponent=()=> {
   const dispatch = useDispatch()
    // const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('tablet'));
    const searchToggle = useMediaQuery(theme.breakpoints.up('tablet'));
    const closeSm = useMediaQuery(theme.breakpoints.up('tablet'));
    if(matches){
      dispatch(closeToggle())
    }
    if(searchToggle){
        dispatch(closeSearchToggle())
      }
    if(closeSm){
       dispatch(closeSmToggle())
    }
    }
    

function App() {
  const[darkMode,setDarkMode]=useState(null)

  return (
      <ThemeProvider theme={theme}>
      <div className={`${darkMode?'dark':''}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <RouterProvider router={appRouter}/>
      <MyComponent/>
      </div>
      </ThemeProvider>
)
}





export default App;

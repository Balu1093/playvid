import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addVideoInfo } from '../searchSlice'

const useSearch = (query) => {
    const dispatch = useDispatch()
  const[videoInfo,setVideoInfo]=useState()
const Video_Info=async()=>{
  const data = await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="+ query)
  const json = await data.json()
  setVideoInfo(json)
  
}
useEffect(()=>{
    Video_Info()
},[])

return videoInfo;
}

export default useSearch
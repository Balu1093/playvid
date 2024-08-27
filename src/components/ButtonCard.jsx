import React, { useEffect, useRef } from 'react'
import Buttons from './Buttons'

const ButtonCard = () => {
const names = ["News","Comedy","Live","Vadivelu","Music","JavaScript","React","StreetFood","AI","Gaming","Motorcycles","Dogs"]
const cardRef =useRef()
const cartWheel=(e)=>{
e.preventDefault();
cardRef.current.scrollLeft += e.deltaY
}

useEffect(()=>{
cardRef.current.addEventListener("wheel",cartWheel) 
},[])

  return (
   
    <div className='flex overflow-x-scroll w-full scrollbar-hide ml-3 md:ml-8 lg:ml-10 2xl:ml-20' ref={cardRef}>
    <a href={'/'}><div className='text-black'>
        <button className='bg-gray-300 rounded-lg px-4 py-2 m-2'>All</button>
    </div></a>
    {/* <div className='text-black'>
        <button className='bg-gray-300 rounded-lg px-4 py-2 m-2'>Live</button>
    </div> */}
      {names.map((name)=><a href={'/search/'+name}><Buttons name={name}/></a>)}
    </div>
  )
}

export default ButtonCard
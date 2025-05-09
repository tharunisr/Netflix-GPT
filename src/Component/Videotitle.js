import React from 'react'

const Videotitle = ({title,overview}) => {
 return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black '>
      <h1 className='font-bold text-6xl py-5'>{title}</h1>
      <p className='w-1/3'>{overview}</p>
      <div className='py-5'>
        <button className='bg-white text-black p-3 px-14 rounded-md  text-lg font-semibold cursor-pointer hover:opacity-80 '>  ▶︎ Play</button>
        <button className=' mx-2 text-white p-3 px-14 rounded-md font-semibold text-lg cursor-pointer bg-gray-400 hover:opacity-80'>ⓘ More Info</button>
      </div>
    </div>
)}

export default Videotitle;
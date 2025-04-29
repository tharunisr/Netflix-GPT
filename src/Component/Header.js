import React from 'react'
import { LOGO_URL } from '../utils/constants'

const Header = () => {
  return (
    <div className='absolute mx-40 py-2  bg-gradient-to-b from-black z-50'>
      <img className="w-[17%]" src={LOGO_URL} alt="logo"/>
    </div>

    
  )
}

export default Header;
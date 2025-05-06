import React from 'react';
import { LOGO_URL } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase'; 
import { useSelector } from 'react-redux';

const Header = () => {

  const user=useSelector(store=>store.user);
  const navigate=useNavigate();

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }



  return (
    <div className='absolute w-screen px-40 py-2  bg-gradient-to-b from-black z-10 flex justify-between' >
      <img className="w-[17%]" src={LOGO_URL} alt="logo"/>
    
    
     {user && <div className='flex p-4'>
      <img className='w-12 h-12' src={user?.photoURL}/>
      <button className='text-white font-bold cursor-pointer' onClick={handleSignOut}>(Sign Out)</button>
    </div>}
    

    </div>

    
    
  )
}

export default Header;
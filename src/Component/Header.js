import React,{useEffect} from 'react';
import { LOGO_URL } from '../utils/constants';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase'; 
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser,removeUser } from '../utils/userSlice';

const Header = () => {

  const user=useSelector(store=>store.user);
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

useEffect(()=>{

  const unsubscribe=onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in,
         const {uid,email,displayName,photoURL} = user;
         dispatch((addUser({uid : uid, email:email, displayName:displayName,photoURL:photoURL })))
         navigate("/browse");
        
      // ...
    } else {
      // User is signed out
       dispatch((removeUser()));
       navigate("/");
      
    }
  });

  // unsubscribe when the component is unmount

  return () => unsubscribe();

},[])



  return (

    <div className='absolute w-screen px-10 py-2  bg-gradient-to-b from-black z-10 flex justify-between' >
      <img className="w-[17%]" src={LOGO_URL} alt="logo"/>
    
    
     {user && <div className='flex p-4'>
      <img className='w-12 h-12' src={user.photoURL}/>
      <button className='text-white font-bold cursor-pointer pb-4' onClick={handleSignOut}>(Sign Out)</button>
    </div>}
    

    </div>

    
    
  )
}

export default Header;
import React, { useEffect } from 'react'
import Login from './Login';
import Browse from './Browse';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const Body = () => {

const dispatch=useDispatch(); 
const appRouter=createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path : "/browse",
    element: <Browse />
  },
]);



useEffect(()=>{

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in,
         const {uid,email,displayName,photoURL} = user;
         dispatch((addUser({uid : uid, email:email, displayName:displayName,photoURL:photoURL })))
         
      // ...
    } else {
      // User is signed out
       dispatch((removeUser()));
      
    }
  });






},[])







  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )

}

export default Body;






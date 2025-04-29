import React, { useState } from 'react'
import Header from './Header';
import { BG_URL } from '../utils/constants';

const Login=()=>{
    
    const [isSignInForm,setIsSignInForm]=useState(true);
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm)
    }
   
    return <div>
        <Header/>
        <div className='absolute'>
            <img src={BG_URL} alt="bg-img"/>
        </div>
       <form className='p-12 absolute bg-black opacity-85  w-3/12 my-25 left-0 right-0 mx-auto rounded-lg'>
          <h1 className='font-bold text-4xl text-white mb-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && 
           <input type="text" placeholder='Name' className='text-white border border-amber-50 p-3 my-4 w-full'/>
          }
          <input type="text" placeholder='Email' className='text-white border border-gray-700 p-3 my-4 w-full hover:border-white'/>
          <input type="password" placeholder='Password' className='text-white border border-gray-700 p-3 my-4 w-full hover:border-white'/>
          <button type='submit' className='p-2 my-6 bg-red-600 text-white font-bold w-full rounded-sm'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
         <p className='text-white text-md py-2'>{isSignInForm ? "New to Netflix?" : "Already a user?"}<strong className='text-md cursor-pointer hover:underline' 
          onClick={toggleSignInForm}>{isSignInForm ? "Sign up now." : "Sign in."}</strong></p>
       </form>
    </div>
}

export default Login;
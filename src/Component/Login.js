import React, { useRef, useState } from 'react'
import Header from './Header';
import { BG_URL } from '../utils/constants';
import {checkValidData } from "../utils/validate";
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login=()=>{
    
  const dispatch=useDispatch();
    const navigate=useNavigate()
    const [isSignInForm,setIsSignInForm]=useState(true);
    const [errorMessage,setErrorMessage]=useState(null);
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm)
    }

    const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);

    const handlebuttonClick=()=>{
        
        const nameValue = name?.current?.value || "";
        const message=checkValidData(email.current.value, password.current.value, isSignInForm,nameValue);
        setErrorMessage(message)

        if(message) return

        if(!isSignInForm){
            //Sign Up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
             
              const user = userCredential.user;

              updateProfile(user, {
                displayName: name.current.value, photoURL: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              }).then(() => {
                // Profile updated!
                // console.log(user);
                const {uid,email,displayName,photoURL} = auth.currentUser;
                dispatch((addUser({uid : uid, email:email, displayName:displayName,photoURL:photoURL })))
                navigate("/browse")
                
              }).catch((error) => {
                // An error occurred
                setErrorMessage(error.message)
              });







             
              })
            .catch((error) => {
                
                if (error.code === "auth/email-already-in-use") {
                    setErrorMessage("This email is already registered. Try logging in.");
                  } 
                else {
                    setErrorMessage("Error: " + error.message);
                  }
            });
        }
        else{
            //Sign In
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
              .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate("/browse")
                
              })
              .catch((error) => {
                if(error.code === "auth/invalid-credential"){
                    setErrorMessage("Invalid email or password");
                }
                else{
                    setErrorMessage("Error: " + error.message);
                }
               
              });
        }
        
    }

    
   
    return <div>
        <Header/>
        <div className='absolute w-full h-full'>
            <img src={BG_URL} alt="bg-img" className='w-full h-full object-cover'/>
        </div>
       <form onClick={(e)=>e.preventDefault()} className='p-8 sm:p-12 absolute bg-black bg-opacity-85 w-11/12 sm:w-8/12 md:w-5/12 lg:w-3/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg'>
          <h1 className='font-bold text-4xl text-white mb-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
         
         <p className='text-red-500 font-bold text-lg'>{errorMessage}</p>

          {!isSignInForm && 
           <input ref={name} type="text" placeholder='Name' className='text-white border border-amber-50 p-3 my-4 w-full'/>
          }
          <input ref={email} type="text" placeholder='Email' className='text-white border border-gray-700 p-3 my-4 w-full hover:border-white'/>
          
          <input ref={password} type="password" placeholder='Password' className='text-white border border-gray-700 p-3 my-4 w-full hover:border-white'/>
          
          <button className='p-2 my-6 bg-red-600 text-white font-bold w-full rounded-sm' onClick={handlebuttonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
         
         
         <p className='text-white text-md py-2'>{isSignInForm ? "New to Netflix?" : "Already a user?"}<strong className='text-md cursor-pointer hover:underline' 
          onClick={toggleSignInForm}>{isSignInForm ? "Sign up now." : "Sign in."}</strong></p>
       </form>
    </div>
}

export default Login;
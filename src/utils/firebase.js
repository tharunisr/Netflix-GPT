// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASr0Om3WVkhGbVkMSFh5uQEQ6x_E2NDfk",
  authDomain: "netflix-gpt-331b3.firebaseapp.com",
  projectId: "netflix-gpt-331b3",
  storageBucket: "netflix-gpt-331b3.firebasestorage.app",
  messagingSenderId: "23625038644",
  appId: "1:23625038644:web:c219c613530832fd124361",
  measurementId: "G-XVPRFFMKYX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();
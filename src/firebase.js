import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDVZKF0ZCxG9P_FVVHJJ_WTybSm4NAAxUs",
  authDomain: "chatty-8ff09.firebaseapp.com",
  projectId: "chatty-8ff09",
  storageBucket: "chatty-8ff09.appspot.com",
  messagingSenderId: "397675819881",
  appId: "1:397675819881:web:3ed56a4fedc0e14c7603f8"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
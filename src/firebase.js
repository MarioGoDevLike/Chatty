import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC2W5cTbYtOgr6_tXWIp4BBMWD8TY-bsXI",
  authDomain: "chat-d06bf.firebaseapp.com",
  projectId: "chat-d06bf",
  storageBucket: "chat-d06bf.appspot.com",
  messagingSenderId: "240879824527",
  appId: "1:240879824527:web:0068a8e42b6a5154ac4afa"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();

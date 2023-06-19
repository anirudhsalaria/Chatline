import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMUHHmMwPVh7WriCYiNI1Sd3oLOTGqcK4",
  authDomain: "chatline-bb52f.firebaseapp.com",
  projectId: "chatline-bb52f",
  storageBucket: "chatline-bb52f.appspot.com",
  messagingSenderId: "247137100179",
  appId: "1:247137100179:web:513e1aaf7b4aae3d220866"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

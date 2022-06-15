// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA51ZGP1qI_dgVI81hEVUuFil1903XMAwU",
  authDomain: "gym-equipment-stock-house.firebaseapp.com",
  projectId: "gym-equipment-stock-house",
  storageBucket: "gym-equipment-stock-house.appspot.com",
  messagingSenderId: "1037011683955",
  appId: "1:1037011683955:web:6148f46137fd75bb08f806"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
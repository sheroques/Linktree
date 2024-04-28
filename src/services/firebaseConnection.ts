
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAy-Mtmk5EiiP9lDk6tdU0KvhH_308vhFY",
  authDomain: "reactlinks-d0d66.firebaseapp.com",
  projectId: "reactlinks-d0d66",
  storageBucket: "reactlinks-d0d66.appspot.com",
  messagingSenderId: "323643120247",
  appId: "1:323643120247:web:39718769cb68da5f43c472"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export {auth,firestore};
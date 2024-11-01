
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA4XnOVaVm_nuwBy391ML-iwPiFbBoORgo",
  authDomain: "linktree-93082.firebaseapp.com",
  projectId: "linktree-93082",
  storageBucket: "linktree-93082.firebasestorage.app",
  messagingSenderId: "1063943954611",
  appId: "1:1063943954611:web:9c31aabb18f4f3981650c6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};
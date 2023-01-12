import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDNbJffBbmcRKb_d3F3PGkntfdmx1qy4BE",
    authDomain: "vick-auth.firebaseapp.com",
    projectId: "vick-auth",
    storageBucket: "vick-auth.appspot.com",
    messagingSenderId: "655456231350",
    appId: "1:655456231350:web:f0252b9f442ec358d92b17"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
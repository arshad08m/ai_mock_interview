// Import the functions you need from the SDKs you need
import {getApp, initializeApp} from "firebase/app";
import {getApps} from 'firebase/app';
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCEGJ4J_qXTAK7iklXOfzDVchoqDrFKBqM",
    authDomain: "prepwise-ba36f.firebaseapp.com",
    projectId: "prepwise-ba36f",
    storageBucket: "prepwise-ba36f.firebasestorage.app",
    messagingSenderId: "108501320733",
    appId: "1:108501320733:web:0b38270c0ff2bfddecf2f4",
    measurementId: "G-WWWSR9JTLL"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);

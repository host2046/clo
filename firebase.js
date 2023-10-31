// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-v1-74fde.firebaseapp.com",
  projectId: "twitter-v1-74fde",
  storageBucket: "twitter-v1-74fde.appspot.com",
  messagingSenderId: "972874416080",
  appId: "1:972874416080:web:dbecf8f52ceab39fc883d5",
};

// Initialize Firebase

export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore();
export const storage = getStorage();

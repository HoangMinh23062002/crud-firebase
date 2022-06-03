// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyCFstWPzq7YKuiqA42p1RzFHGr4pCovjO0",
  authDomain: "fb-crud-d81ad.firebaseapp.com",
  databaseURL: "https://fb-crud-d81ad-default-rtdb.firebaseio.com",
  projectId: "fb-crud-d81ad",
  storageBucket: "fb-crud-d81ad.appspot.com",
  messagingSenderId: "808387099863",
  appId: "1:808387099863:web:b6f7e9f4ba5c244bfe0492"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app); 
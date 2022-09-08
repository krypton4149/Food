import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDFv6tS5LnerNIQMhRshvegs9rxBGXCi1k",
  authDomain: "foodapp-b3805.firebaseapp.com",
  databaseURL: "https://foodapp-b3805-default-rtdb.firebaseio.com",
  projectId: "foodapp-b3805",
  storageBucket: "foodapp-b3805.appspot.com",
  messagingSenderId: "1077134665286",
  appId: "1:1077134665286:web:c8a167695efc1115728c47"
};


const app= getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);

const firebase = getFirestore(app)
const storage = getStorage(app)

export{app, firebase, storage};
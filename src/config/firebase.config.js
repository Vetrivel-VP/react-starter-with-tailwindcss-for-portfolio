import {initializeApp, getApp, getApps} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCHk7F3soNAeewEjGIvyd_iPnuNYqwc7s0",
    authDomain: "my-portfolio-d96e4.firebaseapp.com",
    projectId: "my-portfolio-d96e4",
    storageBucket: "my-portfolio-d96e4.appspot.com",
    messagingSenderId: "846029448018",
    appId: "1:846029448018:web:49902640df1d7df715d08b",
    measurementId: "G-KV73TBZR1E"
  };

  const app =  getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app)
  export {app, db}
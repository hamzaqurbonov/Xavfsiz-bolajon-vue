// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase config — шу ерга ўз config’ингизни қўйинг!
const firebaseConfig = {
  apiKey: "AIzaSyCqlqke_YT3sA8H3P9HdHHcMgo3B5kxENM",
  authDomain: "xavfsiz-bolajon.firebaseapp.com",
  databaseURL: "https://xavfsiz-bolajon-default-rtdb.firebaseio.com",
  projectId: "xavfsiz-bolajon",
  storageBucket: "xavfsiz-bolajon.appspot.com",
  messagingSenderId: "964128475551",
  appId: "1:964128475551:web:eb599ab1ba6b36e60215aa",
  measurementId: "G-9WX1SQZB8Q"
};

// Firebase’ни ишга тушириш
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };


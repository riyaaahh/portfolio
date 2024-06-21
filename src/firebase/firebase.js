// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD9HCd8mf-cL_5tgUqLxankIe4Cehq3UA",
  authDomain: "portfolio-ffdbb.firebaseapp.com",
  databaseURL: "https://portfolio-ffdbb-default-rtdb.firebaseio.com",
  projectId: "portfolio-ffdbb",
  storageBucket: "portfolio-ffdbb.appspot.com",
  messagingSenderId: "586222523834",
  appId: "1:586222523834:web:85ea2df205313a6a353983",
  measurementId: "G-TZN3MC91EW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth };;
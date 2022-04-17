// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTQF3gY_SbGrT3B5R24w880JfPaZay2bM",
  authDomain: "depency-69215.firebaseapp.com",
  projectId: "depency-69215",
  storageBucket: "depency-69215.appspot.com",
  messagingSenderId: "231873793768",
  appId: "1:231873793768:web:aa5fc8eeec07710a60035d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
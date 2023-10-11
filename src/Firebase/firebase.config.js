// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4I-6Bj7UQDLhE3swKJb4Btl680sRYf9k",
  authDomain: "event-management-38b4d.firebaseapp.com",
  projectId: "event-management-38b4d",
  storageBucket: "event-management-38b4d.appspot.com",
  messagingSenderId: "257115195229",
  appId: "1:257115195229:web:9ea6f3d73e3dbac4614ab4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
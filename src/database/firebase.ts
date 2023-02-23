// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMirRUHQogFRTqvQaCzu66_wKcczOsXFg",
  authDomain: "facebook-clone-6099a.firebaseapp.com",
  projectId: "facebook-clone-6099a",
  storageBucket: "facebook-clone-6099a.appspot.com",
  messagingSenderId: "547891874202",
  appId: "1:547891874202:web:2f9660a79c0cca4d8f5223",
  measurementId: "G-QCNPGYXMTT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
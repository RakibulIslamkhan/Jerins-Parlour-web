// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9dWN28DBMeR116s1NK0hXurrktztYMT4",
  authDomain: "jerin-s-parlour-web.firebaseapp.com",
  projectId: "jerin-s-parlour-web",
  storageBucket: "jerin-s-parlour-web.appspot.com",
  messagingSenderId: "476694450880",
  appId: "1:476694450880:web:6c0e0cc0abcda93a5c9325"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
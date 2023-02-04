// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM7at91svtmXGVfoVUboRQSUyh5UctH2M",
  authDomain: "proytecto-react-coder.firebaseapp.com",
  projectId: "proytecto-react-coder",
  storageBucket: "proytecto-react-coder.appspot.com",
  messagingSenderId: "228541439366",
  appId: "1:228541439366:web:235c861a6412ff56196007"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
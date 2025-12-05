// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpV1AhqJGg-3TewYGn0nkpP5s44flbyVo",
  authDomain: "steel-store.firebaseapp.com",
  projectId: "steel-store",
  storageBucket: "steel-store.firebasestorage.app",
  messagingSenderId: "669532136190",
  appId: "1:669532136190:web:a984598cda67e3c8533baf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

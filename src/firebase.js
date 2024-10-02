// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv1RkSAND5h9gnsMxQpbrLb9HUEbio0gY",
  authDomain: "helping-ai.firebaseapp.com",
  projectId: "helping-ai",
  storageBucket: "helping-ai.appspot.com",
  messagingSenderId: "629935757979",
  appId: "1:629935757979:web:927ff5e68845930791843e",
  measurementId: "G-SNS23ZQVDD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db };

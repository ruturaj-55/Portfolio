// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJk7CmKdFE3rsIfBeBsEqIiHWMr83Z6Y8",
  authDomain: "elessar-portfolio.firebaseapp.com",
  projectId: "elessar-portfolio",
  storageBucket: "elessar-portfolio.appspot.com",
  messagingSenderId: "824367513657",
  appId: "1:824367513657:web:6d24c0c4b2f7400dda8de8",
  measurementId: "G-87BSL8H3J0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB66snysokaWnO2FmNNk_kSkFnKEMqRMb0",
  authDomain: "portfolio-elessar.firebaseapp.com",
  projectId: "portfolio-elessar",
  storageBucket: "portfolio-elessar.appspot.com",
  messagingSenderId: "458936332963",
  appId: "1:458936332963:web:760571a1592d641e268516",
  measurementId: "G-4K3PT94208",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

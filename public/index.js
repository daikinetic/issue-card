// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2uGQbTynGIm2AzMbGF1CO_A3ieF_5kL4",
  authDomain: "issue-card.firebaseapp.com",
  projectId: "issue-card",
  storageBucket: "issue-card.appspot.com",
  messagingSenderId: "936978701874",
  appId: "1:936978701874:web:d7f2c3d7bb489de6afe62b",
  measurementId: "G-W5HTB0QYTB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
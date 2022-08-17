// Import the functions you need from the SDKs you need
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js';
// import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2uGQbTynGIm2AzMbGF1CO_A3ieF_5kL4",
  authDomain: "issue-card.firebaseapp.com",
  databaseURL: "https://issue-card-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "issue-card",
  storageBucket: "issue-card.appspot.com",
  messagingSenderId: "936978701874",
  appId: "1:936978701874:web:75b386a426b4327dafe62b",
  measurementId: "G-8FMTNDN7XC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-storage.js"; // Import Firebase Storage




// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPzDQU3r6ONmvujLflnOgekexfLL_zfEk",
  authDomain: "atom5engineering2.firebaseapp.com",
  projectId: "atom5engineering2",
  storageBucket: "atom5engineering2.firebasestorage.app",
  messagingSenderId: "1091594343317",
  appId: "1:1091594343317:web:e67181eb18412e82b8dc9c",
  measurementId: "G-HLTX3Y9RR4"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);




// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
const auth = getAuth(app);  // Firebase Authentication
const storage = getStorage(app); // Firebase Storage

export { app, auth, storage, firebaseConfig };  // Export storage so other files can use it

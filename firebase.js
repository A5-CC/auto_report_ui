// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAPzDQU3r6ONmvujLflnOgekexfLL_zfEk",
  authDomain: "atom5engineering2.firebaseapp.com",
  projectId: "atom5engineering2",
  storageBucket: "atom5engineering2.firebasestorage.app",
  messagingSenderId: "1091594343317",
  appId: "1:1091594343317:web:e67181eb18412e82b8dc9c",
  measurementId: "G-HLTX3Y9RR4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };

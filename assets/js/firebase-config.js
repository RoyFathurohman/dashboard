// Import Firebase ES Module
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC5TEgEHxcCbaCQVnEsN1xTavvPL78Nu1gE",
  authDomain: "dashboard-agen-jne.firebaseapp.com",
  projectId: "dashboard-agen-jne",
  storageBucket: "dashboard-agen-jne.appspot.com",
  messagingSenderId: "883657175337",
  appId: "1:883657175337:web:25a2666c74a7c6a320738",
  measurementId: "G-59P59W90N0"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export agar bisa digunakan di file lain
export { auth };

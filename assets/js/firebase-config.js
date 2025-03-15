const firebaseConfig = {
  apiKey: "AIzaSyCSTEgEHxCbaC0VnEsNlxTavvPL78Nu1gE",
  authDomain: "dashboard-agen-jne.firebaseapp.com",
  projectId: "dashboard-agen-jne",
  storageBucket: "dashboard-agen-jne.firebasestorage.app",
  messagingSenderId: "883657175337",
  appId: "1:883657175337:web:252a666c74a7c6a3230738",
  measurementId: "G-59PS9W98N0"
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth(); // Tambahkan ini agar authentication bisa digunakan

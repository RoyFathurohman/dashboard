import { auth } from "./firebase-config.js"; // Import dari firebase-config.js
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Contoh fungsi login
function loginUser(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Login berhasil:", userCredential.user);
    })
    .catch((error) => {
      console.error("Login gagal:", error.message);
    });
}

// Panggil fungsi login ketika tombol diklik
document.getElementById("login-btn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  loginUser(email, password);
});

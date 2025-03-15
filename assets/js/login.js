document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah halaman refresh
    login();
});

function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const email = `${username}@custom.com`; // Format email dari username

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("Login berhasil:", userCredential.user);
            window.location.href = "dashboard.html"; // Redirect ke dashboard
        })
        .catch((error) => {
            console.error("Login gagal:", error.message);
            document.getElementById("loginMessage").innerText = "Login gagal: " + error.message;
            document.getElementById("loginMessage").style.color = "red"; // Warnai error agar terlihat
        });
}

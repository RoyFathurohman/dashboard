document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("toggle-button");
    button.addEventListener("click", function () {
        var fullText = document.getElementById("full-text");

        if (fullText.style.display === "none") {
            fullText.style.display = "block";
            button.innerText = "Tampilkan Lebih Sedikit";
        } else {
            fullText.style.display = "none";
            button.innerText = "Lihat Selengkapnya";
        }
    });
});


// ELEMENTUL OBLIGATORIU: Butonul Go To Up
const topBtn = document.getElementById("goToTopBtn");

window.onscroll = function() {
    // Afișează butonul după ce utilizatorul a parcurs 400px în jos
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

// Funcția de revenire sus cu scroll fin
topBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// Prevenire trimitere formular (exemplu vizual)
document.getElementById("brawlForm").onsubmit = function(e) {
    e.preventDefault();
    alert("Bravo, Brawler! Mesajul a fost trimis.");
};
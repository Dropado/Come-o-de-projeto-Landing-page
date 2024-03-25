// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Atualizar o ano no rodapé
    const yearSpan = document.getElementById("currentYear");
    yearSpan.textContent = new Date().getFullYear();
});

let currentSlide = 0;

function changeSlide(n) {
    const slides = document.querySelectorAll(".slide");
    currentSlide += n;
    
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    
    const offset = -currentSlide * 100;
    document.querySelector(".slider").style.transform = `translateX(${offset}%)`;
}

// Iniciar o slideshow automaticamente a cada 5 segundos
setInterval(() => {
    changeSlide(1);
}, 5000);


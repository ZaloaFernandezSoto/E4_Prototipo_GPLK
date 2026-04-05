// Funciones para procesando.html
document.addEventListener('DOMContentLoaded', function() {
    // Animar los dots
    const dots = document.querySelectorAll('.progress-dots .dot');
    let activeIndex = 0;

    setInterval(() => {
        dots[activeIndex].classList.remove('active');
        activeIndex = (activeIndex + 1) % dots.length;
        dots[activeIndex].classList.add('active');
    }, 300);

    // Redirigir después de 5 segundos
    setTimeout(() => {
        window.location.href = 'seguimiento.html';
    }, 5000);
});

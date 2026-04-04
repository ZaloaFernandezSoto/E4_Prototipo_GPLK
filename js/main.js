// Funciones de Navegación y Utilidades

/**
 * Cierra sesión y vuelve al login
 */
function logout() {
    if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
        sessionStorage.clear();
        localStorage.clear();
        window.location.href = '../index.html';
    }
}

/**
 * Inicializar el dashboard
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página cargada correctamente');
});

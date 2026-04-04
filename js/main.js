// Funciones de Navegación del Dashboard

/**
 * Navega a la página de selección de tipo de parte/siniestro
 */
function irASeleccion() {
    window.location.href = 'seleccion.html';
}

/**
 * Navega a la página de seguimiento de siniestros
 */
function irASeguimiento() {
    window.location.href = 'seguimiento.html';
}

/**
 * Cierra sesión y vuelve al login
 */
function logout() {
    if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
        // Limpiar datos de sesión si es necesario
        sessionStorage.clear();
        localStorage.clear();
        window.location.href = 'index.html';
    }
}

/**
 * Inicializar el dashboard
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Dashboard cargado correctamente');
    
    // Aquí puedes agregar lógica para cargar datos del usuario
    // o incidentes dinámicamente desde una API
});

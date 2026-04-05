// Login unificado - Distinción automática Cliente/Perito por email

function validarLogin() {
    const usuario = document.getElementById('usuario').value.trim();
    const contrasena = document.getElementById('contrasena').value;
    
    if (!usuario || !contrasena || contrasena === '••••••••') {
        alert('Por favor completa los campos');
        return false;
    }
    
    // Determinar si es Perito o Cliente según el email
    const esPerito = usuario.toLowerCase().includes('@perito');
    
    if (esPerito) {
        // Login como Perito
        localStorage.setItem('usuarioTipo', 'perito');
        localStorage.setItem('usuarioNombre', usuario);
        window.location.href = 'perito/perito-dashboard.html';
    } else {
        // Login como Cliente
        localStorage.setItem('usuarioTipo', 'cliente');
        localStorage.setItem('usuarioNombre', usuario);
        window.location.href = 'cliente/dashboard.html';
    }
    
    return false;
}

// Manejo del enlace de contraseña olvidada
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const forgotLink = document.getElementById('forgotLink');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            validarLogin();
        });
    }
    
    if (forgotLink) {
        forgotLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'recuperar-contraseña.html';
        });
    }
});
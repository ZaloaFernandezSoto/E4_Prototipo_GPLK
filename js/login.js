// Validación de credenciales
const CREDENCIALES_VALIDAS = {
    usuario: "juan.garcia@empresa.com",
    contrasena: "password123"
};

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usuarioInput = document.getElementById('usuario');
    const contrasenaInput = document.getElementById('contrasena');
    const forgotLink = document.getElementById('forgotLink');

    // Manejar el envío del formulario
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            validarLogin();
        });
    }

    // Manejar el enlace de contraseña olvidada
    if (forgotLink) {
        forgotLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Funcionalidad de recuperación de contraseña próximamente');
        });
    }

    // Limpiar campos de contraseña al enfocar (si contienen el placeholder)
    if (contrasenaInput) {
        contrasenaInput.addEventListener('focus', function() {
            if (this.value === '••••••••') {
                this.value = '';
            }
        });

        contrasenaInput.addEventListener('blur', function() {
            if (this.value === '') {
                this.value = '••••••••';
            }
        });
    }
});

function validarLogin() {
    const usuario = document.getElementById('usuario').value.trim();
    const contrasena = document.getElementById('contrasena').value;

    // Validar que los campos no estén vacíos
    if (!usuario || !contrasena || contrasena === '••••••••') {
        mostrarError('Por favor, introduce tus credenciales');
        return;
    }

    // Validar credenciales (simulado )
    if (usuario === CREDENCIALES_VALIDAS.usuario && 
        contrasena === CREDENCIALES_VALIDAS.contrasena) {
        
        // Redirigir al dashboard
        window.location.href = 'dashboard.html';
    } else {
        mostrarError('Usuario o contraseña incorrectos');
        // Limpiar campo de contraseña
        document.getElementById('contrasena').value = '••••••••';
    }
}

function mostrarError(mensaje) {
    alert(mensaje);
}
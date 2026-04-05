// Procesar recuperación de contraseña

function procesarRecuperacion() {
    const email = document.getElementById('emailRecuperacion').value.trim();
    const nuevaContrasena = document.getElementById('nuevaContrasena').value;
    const confirmarContrasena = document.getElementById('confirmarContrasena').value;
    
    // Validar campos
    if (!email || !nuevaContrasena || !confirmarContrasena) {
        alert('Por favor completa todos los campos');
        return false;
    }
    
    // Validar que las contraseñas coincidan
    if (nuevaContrasena !== confirmarContrasena) {
        alert('Las contraseñas no coinciden');
        return false;
    }
    
    // Validar longitud mínima de contraseña
    if (nuevaContrasena.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres');
        return false;
    }
    
    // Simular actualización de contraseña
    // En un sistema real, se enviaría al servidor
    localStorage.setItem('contraseña_recuperada_' + email, nuevaContrasena);
    
    // Mostrar mensaje de éxito
    alert('✓ ¡Contraseña actualizada correctamente!\n\nYa puedes iniciar sesión con tu nueva contraseña.');
    
    // Redirigir al login
    window.location.href = 'index.html';
    
    return false;
}

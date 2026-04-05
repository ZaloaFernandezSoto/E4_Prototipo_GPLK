// Funciones para Formulario V2 (Análisis Rápido)

function irAFotos() {
    const form = document.getElementById('formularioV2');
    const descripcion = document.querySelector('textarea[name="descripcionBreve"]').value;

    if (!descripcion.trim()) {
        alert('Por favor describe brevemente el siniestro');
        return;
    }

    // Guardar datos en sessionStorage
    const formData = {
        nombre: 'Juan García López',
        poliza: 'POL-2024-00892',
        fecha: '03/04/2025 - 14:30h',
        ubicacion: 'Calle Mayor 12, Vitoria',
        descripcionBreve: descripcion
    };
    
    sessionStorage.setItem('formularioV2Data', JSON.stringify(formData));

    // Ir a fotos
    window.location.href = 'fotos.html';
}

function irAtras() {
    window.location.href = 'seleccion.html';
}

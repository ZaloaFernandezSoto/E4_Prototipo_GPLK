// Funciones para página de Fotos
let fotosSeleccionadas = [];

// Setup del Drop Zone
document.addEventListener('DOMContentLoaded', function() {
    const dropZone = document.getElementById('dropZone');
    const fotosInput = document.getElementById('fotosInput');

    // Click en drop zone
    dropZone.addEventListener('click', function() {
        fotosInput.click();
    });

    // Prevenir comportamiento por defecto en drag
    dropZone.addEventListener('dragover', function(e) {
        e.preventDefault();
        dropZone.classList.add('drag-over');
    });

    dropZone.addEventListener('dragleave', function() {
        dropZone.classList.remove('drag-over');
    });

    // Drop de archivos
    dropZone.addEventListener('drop', function(e) {
        e.preventDefault();
        dropZone.classList.remove('drag-over');
        
        const files = e.dataTransfer.files;
        procesarArchivos(files);
    });

    // Cambio en input file
    fotosInput.addEventListener('change', function(e) {
        procesarArchivos(e.target.files);
    });
});

function procesarArchivos(files) {
    for (let file of files) {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                fotosSeleccionadas.push({
                    nombre: file.name,
                    data: e.target.result
                });
                mostrarPreviews();
            };
            reader.readAsDataURL(file);
        }
    }
}

function mostrarPreviews() {
    const fotosPreview = document.getElementById('fotosPreview');
    const dropZone = document.getElementById('dropZone');
    
    fotosPreview.innerHTML = '';
    
    fotosSeleccionadas.forEach((foto, index) => {
        const div = document.createElement('div');
        div.className = 'foto-item';
        div.innerHTML = `
            <img src="${foto.data}" alt="Foto ${index + 1}">
            <button type="button" class="btn-remove-foto" onclick="eliminarFoto(${index})">×</button>
            <span class="foto-numero">${index + 1}</span>
        `;
        fotosPreview.appendChild(div);
    });

    if (fotosSeleccionadas.length > 0) {
        dropZone.style.display = 'none';
    } else {
        dropZone.style.display = 'flex';
    }
}

function eliminarFoto(index) {
    fotosSeleccionadas.splice(index, 1);
    mostrarPreviews();
}

function enviarFormulario() {
    if (fotosSeleccionadas.length === 0) {
        alert('Por favor adjunta al menos una foto del siniestro');
        return;
    }

    // Guardar todo en sessionStorage
    sessionStorage.setItem('fotosData', JSON.stringify({
        fotos: fotosSeleccionadas,
        descripcion: document.querySelector('textarea[name="descripcionFotos"]').value,
        timestamp: new Date().toLocaleString()
    }));

    // Simular envío
    alert('¡Siniestro registrado exitosamente!\nTu número de referencia será enviado por email.');
    
    // Ir a confirmación
    window.location.href = 'dashboard.html';
}

function volverAtras() {
    window.location.href = 'formulario_v1.html';
}

function logout() {
    if (confirm('¿Seguro que quieres cerrar sesión?')) {
        sessionStorage.clear();
        localStorage.clear();
        window.location.href = '../index.html';
    }
}

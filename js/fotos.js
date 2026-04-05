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
    const MAX_FOTOS = 3;
    let fotosAAnadir = 0;
    
    for (let file of files) {
        // Validar que no hemos alcanzado el máximo
        if (fotosSeleccionadas.length + fotosAAnadir >= MAX_FOTOS) {
            break;
        }
        
        if (file.type.startsWith('image/')) {
            fotosAAnadir++;
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
    
    // Mostrar alerta si intentó añadir más del máximo
    if (files.length > fotosAAnadir) {
        alert(`Solo puedes subir máximo 3 fotos. Ya tienes ${fotosSeleccionadas.length} foto(s).`);
    }
}

function mostrarPreviews() {
    const fotosPreview = document.getElementById('fotosPreview');
    const dropZone = document.getElementById('dropZone');
    const fotosCount = document.getElementById('fotosCount');
    const MAX_FOTOS = 3;
    
    fotosPreview.innerHTML = '';
    
    // Actualizar contador
    if (fotosCount) {
        fotosCount.textContent = fotosSeleccionadas.length;
    }
    
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

    // Mostrar drop-zone solo si no hemos alcanzado el máximo
    if (fotosSeleccionadas.length < MAX_FOTOS) {
        dropZone.style.display = 'flex';
        
        // Cambiar mensaje si ya hay fotos
        if (fotosSeleccionadas.length > 0) {
            dropZone.querySelector('.drop-zone-title').textContent = 'Añadir más fotos (opcional)';
            dropZone.querySelector('.drop-zone-subtitle').textContent = 'Tienes ' + (MAX_FOTOS - fotosSeleccionadas.length) + ' máximo';
        }
    } else {
        dropZone.style.display = 'none';
    }
}

function eliminarFoto(index) {
    fotosSeleccionadas.splice(index, 1);
    mostrarPreviews();
}

function enviarFormulario() {
    if (fotosSeleccionadas.length === 0) {
        alert('Por favor adjunta al menos 1 foto del siniestro');
        return;
    }

    if (fotosSeleccionadas.length > 3) {
        alert('No puedes subir más de 3 fotos');
        return;
    }

    // Guardar todo en sessionStorage
    sessionStorage.setItem('fotosData', JSON.stringify({
        fotos: fotosSeleccionadas,
        descripcion: document.querySelector('textarea[name="descripcionFotos"]').value,
        timestamp: new Date().toLocaleString()
    }));

    // Ir a procesando (que después va a seguimiento)
    window.location.href = 'procesando.html';
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

// Funciones para Formulario V1
let tipoSeleccionado = null;

// Preguntas dinámicas según tipo
const preguntasPorTipo = {
    vitrocirama: `
        <div class="form-section">
            <label class="section-label">TIPO DE OBJETO</label>
            <select class="select-input" name="tipoObjeto" required>
                <option value="">Selecciona...</option>
                <option value="encimera">Encimera</option>
                <option value="placa">Placa de cocción</option>
                <option value="otro">Otro</option>
            </select>
        </div>
        <div class="form-section">
            <label class="section-label">¿SIGUE FUNCIONANDO?</label>
            <div class="button-group">
                <button type="button" class="btn-si-no btn-si" onclick="funcionandoButton('si', this)">Sí</button>
                <button type="button" class="btn-si-no btn-no active" onclick="funcionandoButton('no', this)">No</button>
            </div>
            <input type="hidden" name="sigueFuncionando" value="no">
        </div>
    `,
    cristal: `
        <div class="form-section">
            <label class="section-label">UBICACIÓN DEL CRISTAL</label>
            <select class="select-input" name="ubicacionCristal" required>
                <option value="">Selecciona...</option>
                <option value="parabrisas">Parabrisas</option>
                <option value="ventana">Ventana lateral</option>
                <option value="luneta">Luneta trasera</option>
                <option value="otro">Otro</option>
            </select>
        </div>
        <div class="form-section">
            <label class="section-label">¿AFECTA LA VISIBILIDAD?</label>
            <div class="button-group">
                <button type="button" class="btn-si-no btn-si active" onclick="visibilidadButton('si', this)">Sí</button>
                <button type="button" class="btn-si-no btn-no" onclick="visibilidadButton('no', this)">No</button>
            </div>
            <input type="hidden" name="afectaVisibilidad" value="si">
        </div>
    `,
    electrodomestico: `
        <div class="form-section">
            <label class="section-label">TIPO DE ELECTRODOMÉSTICO</label>
            <select class="select-input" name="tipoElectrodomestico" required>
                <option value="">Selecciona...</option>
                <option value="nevera">Nevera</option>
                <option value="lavadora">Lavadora</option>
                <option value="horno">Horno</option>
                <option value="television">Televisión</option>
                <option value="otro">Otro</option>
            </select>
        </div>
        <div class="form-section">
            <label class="section-label">¿SIGUE FUNCIONANDO EL APARATO?</label>
            <div class="button-group">
                <button type="button" class="btn-si-no btn-si" onclick="aparatoButton('si', this)">Sí</button>
                <button type="button" class="btn-si-no btn-no active" onclick="aparatoButton('no', this)">No</button>
            </div>
            <input type="hidden" name="funcionaAparato" value="no">
        </div>
    `,
    otro: `
        <div class="form-section">
            <label class="section-label">ESPECIFICA EL TIPO</label>
            <input type="text" class="text-input" placeholder="¿Qué tipo de siniestro?" name="otroTipo" required>
        </div>
    `
};

// Seleccionar tipo de siniestro
function seleccionarTipo(tipo, elemento) {
    tipoSeleccionado = tipo;
    document.getElementById('tipoSiniestro').value = tipo;

    // Actualizar botones visuales
    document.querySelectorAll('.tipo-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    elemento.classList.add('active');

    // Mostrar preguntas dinámicas
    document.getElementById('preguntasDinamicas').innerHTML = preguntasPorTipo[tipo];
}

// Toggle para botones Sí/No
function toglarBoton(valor, elemento) {
    // Cambiar clase active
    elemento.parentElement.querySelectorAll('.btn-si-no').forEach(btn => {
        btn.classList.remove('active');
    });
    elemento.classList.add('active');
    
    // Actualizar valor
    document.getElementById('danosAdicionales').value = valor;
    
    // Mostrar/ocultar campo de daños adicionales
    const field = document.getElementById('danosAdicionalesField');
    if (valor === 'si') {
        field.style.display = 'block';
    } else {
        field.style.display = 'none';
    }
}

// Funciones auxiliares para botones de preguntas dinámicas
function funcionandoButton(valor, elemento) {
    elemento.parentElement.querySelectorAll('.btn-si-no').forEach(btn => {
        btn.classList.remove('active');
    });
    elemento.classList.add('active');
    elemento.closest('.form-section').querySelector('input[type="hidden"]').value = valor;
}

function visibilidadButton(valor, elemento) {
    elemento.parentElement.querySelectorAll('.btn-si-no').forEach(btn => {
        btn.classList.remove('active');
    });
    elemento.classList.add('active');
    elemento.closest('.form-section').querySelector('input[type="hidden"]').value = valor;
}

function aparatoButton(valor, elemento) {
    elemento.parentElement.querySelectorAll('.btn-si-no').forEach(btn => {
        btn.classList.remove('active');
    });
    elemento.classList.add('active');
    elemento.closest('.form-section').querySelector('input[type="hidden"]').value = valor;
}

// Ir a fotos
function irAFotos() {
    if (!tipoSeleccionado) {
        alert('Por favor selecciona un tipo de siniestro');
        return;
    }

    const form = document.getElementById('formularioV1');
    if (form.checkValidity()) {
        // Guardar datos en sessionStorage
        const formData = new FormData(form);
        sessionStorage.setItem('formularioV1Data', JSON.stringify(Object.fromEntries(formData)));
        // Ir a fotos
        window.location.href = 'fotos.html';
    } else {
        alert('Por favor completa todos los campos obligatorios');
    }
}

// Ir atrás
function irAtras() {
    window.location.href = 'seleccion.html';
}


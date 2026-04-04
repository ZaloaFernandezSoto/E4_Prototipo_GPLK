const STORAGE_KEY = 'gplk_perito_claims_v1';

const defaultClaims = [
    {
        id: 'PAR-2026-1001',
        customerName: 'Laura Pérez',
        policyNumber: 'HOG-88421',
        phone: '612 345 678',
        incidentType: 'Cristal',
        createdAt: '2026-03-28',
        incidentDate: '2026-03-27',
        location: 'Salón - Ventanal principal',
        status: 'Pendiente validación',
        fromAI: false,
        formAnswers: [
            { question: '¿Cómo se produjo el daño?', answer: 'Golpe accidental al cerrar la ventana.' },
            { question: '¿Había terceros implicados?', answer: 'No.' },
            { question: '¿Hay riesgo para personas?', answer: 'No, la zona está acordonada.' }
        ],
        photos: [
            'https://picsum.photos/id/1011/600/400',
            'https://picsum.photos/id/103/600/400',
            'https://picsum.photos/id/1040/600/400'
        ],
        history: [
            { status: 'Registrado', dateTime: '2026-03-28 09:10', comment: 'Parte creado por cliente.' },
            { status: 'Pendiente validación', dateTime: '2026-03-28 09:11', comment: 'Esperando revisión de perito.' }
        ]
    },
    {
        id: 'PAR-2026-1002',
        customerName: 'Miguel Torres',
        policyNumber: 'HOG-77812',
        phone: '623 991 204',
        incidentType: 'Vitrocerámica',
        createdAt: '2026-03-26',
        incidentDate: '2026-03-25',
        location: 'Cocina',
        status: 'Aprobado',
        fromAI: true,
        aiProposal: {
            objectDetected: 'Vitrocerámica',
            damageType: 'Fractura radial',
            scenario: 'Impacto por utensilio pesado',
            confidence: 92
        },
        formAnswers: [
            { question: '¿Funcionaba tras el incidente?', answer: 'No, dejó de calentar.' },
            { question: '¿Existe factura del electrodoméstico?', answer: 'Sí, adjuntada.' },
            { question: '¿Se observan chispas o humo?', answer: 'No.' }
        ],
        photos: [
            'https://picsum.photos/id/292/600/400',
            'https://picsum.photos/id/1070/600/400',
            'https://picsum.photos/id/1080/600/400'
        ],
        history: [
            { status: 'Registrado', dateTime: '2026-03-26 11:30', comment: 'Alta de parte automática.' },
            { status: 'Revisión perito asistida', dateTime: '2026-03-26 11:40', comment: 'IA propone aprobación alta confianza.' },
            { status: 'Aprobado', dateTime: '2026-03-26 12:05', comment: 'Aprobado por perito.' }
        ]
    },
    {
        id: 'PAR-2026-1003',
        customerName: 'Cristina Vela',
        policyNumber: 'HOG-22451',
        phone: '699 115 230',
        incidentType: 'Mampara',
        createdAt: '2026-03-30',
        incidentDate: '2026-03-30',
        location: 'Baño principal',
        status: 'Más información requerida',
        fromAI: false,
        formAnswers: [
            { question: '¿Cuál es el tamaño de la rotura?', answer: 'Aproximadamente 40 cm.' },
            { question: '¿Hubo lesiones?', answer: 'Corte leve sin asistencia médica.' },
            { question: '¿Se ha limpiado la zona?', answer: 'Sí, guardando fragmentos grandes.' }
        ],
        photos: [
            'https://picsum.photos/id/177/600/400',
            'https://picsum.photos/id/433/600/400',
            'https://picsum.photos/id/582/600/400'
        ],
        history: [
            { status: 'Registrado', dateTime: '2026-03-30 08:45', comment: 'Parte enviado por cliente.' },
            { status: 'Más información requerida', dateTime: '2026-03-30 09:20', comment: 'Solicitada foto de conjunto del baño.' }
        ]
    },
    {
        id: 'PAR-2026-1004',
        customerName: 'Álvaro Cruz',
        policyNumber: 'HOG-91200',
        phone: '611 207 889',
        incidentType: 'Cristal',
        createdAt: '2026-03-31',
        incidentDate: '2026-03-31',
        location: 'Puerta corredera terraza',
        status: 'Revisión perito asistida',
        fromAI: true,
        aiProposal: {
            objectDetected: 'Puerta corredera de cristal',
            damageType: 'Astillado y grietas múltiples',
            scenario: 'Posible impacto exterior',
            confidence: 68
        },
        formAnswers: [
            { question: '¿Se oyó explosión del vidrio?', answer: 'Sí, a primera hora de la mañana.' },
            { question: '¿La vivienda estaba cerrada?', answer: 'Sí, no había nadie en casa.' },
            { question: '¿Hay daños secundarios?', answer: 'No visibles.' }
        ],
        photos: [
            'https://picsum.photos/id/1025/600/400',
            'https://picsum.photos/id/1027/600/400',
            'https://picsum.photos/id/1035/600/400',
            'https://picsum.photos/id/1050/600/400'
        ],
        history: [
            { status: 'Registrado', dateTime: '2026-03-31 07:58', comment: 'Parte recibido.' },
            { status: 'Revisión perito asistida', dateTime: '2026-03-31 08:03', comment: 'IA con confianza baja, requiere revisión manual.' }
        ]
    },
    {
        id: 'PAR-2026-1005',
        customerName: 'Elena Muñoz',
        policyNumber: 'HOG-31008',
        phone: '654 003 118',
        incidentType: 'Encimera',
        createdAt: '2026-03-24',
        incidentDate: '2026-03-23',
        location: 'Cocina - Encimera de cuarzo',
        status: 'Rechazado',
        fromAI: false,
        formAnswers: [
            { question: '¿Cuándo detectó el daño?', answer: 'Tras mudanza de muebles.' },
            { question: '¿Dispone de fotos del antes?', answer: 'No.' },
            { question: '¿Es daño accidental reciente?', answer: 'No se puede confirmar.' }
        ],
        photos: [
            'https://picsum.photos/id/312/600/400',
            'https://picsum.photos/id/444/600/400',
            'https://picsum.photos/id/455/600/400'
        ],
        history: [
            { status: 'Registrado', dateTime: '2026-03-24 14:05', comment: 'Parte inicial.' },
            { status: 'Pendiente validación', dateTime: '2026-03-24 14:06', comment: 'Asignado a perito.' },
            { status: 'Rechazado', dateTime: '2026-03-24 17:15', comment: 'Daño preexistente no cubierto.' }
        ]
    },
    {
        id: 'PAR-2026-1006',
        customerName: 'Raúl Gómez',
        policyNumber: 'HOG-50883',
        phone: '622 801 334',
        incidentType: 'Mampara',
        createdAt: '2026-04-01',
        incidentDate: '2026-03-31',
        location: 'Baño de invitados',
        status: 'Pendiente validación',
        fromAI: true,
        aiProposal: {
            objectDetected: 'Mampara de vidrio templado',
            damageType: 'Rotura en esquina inferior',
            scenario: 'Fatiga por cierre',
            confidence: 84
        },
        formAnswers: [
            { question: '¿La mampara sigue en su guía?', answer: 'No, se soltó parcialmente.' },
            { question: '¿Puede usarse el baño?', answer: 'No por seguridad.' },
            { question: '¿Hay testigos del incidente?', answer: 'Sí, un familiar.' }
        ],
        photos: [
            'https://picsum.photos/id/64/600/400',
            'https://picsum.photos/id/1060/600/400',
            'https://picsum.photos/id/1069/600/400',
            'https://picsum.photos/id/1071/600/400'
        ],
        history: [
            { status: 'Registrado', dateTime: '2026-04-01 10:22', comment: 'Parte enviado desde app móvil.' },
            { status: 'Pendiente validación', dateTime: '2026-04-01 10:24', comment: 'Pendiente de evaluación.' }
        ]
    }
];

const statusClassMap = {
    'Pendiente validación': 'perito-badge-pending',
    Aprobado: 'perito-badge-approved',
    Rechazado: 'perito-badge-rejected',
    'Más información requerida': 'perito-badge-more-info',
    'Revisión perito asistida': 'perito-badge-assisted',
    Registrado: 'perito-badge-registered'
};

const decisionToStatusMap = {
    APROBAR: 'Aprobado',
    RECHAZAR: 'Rechazado',
    SOLICITAR_MAS_INFO: 'Más información requerida'
};

let currentClaims = [];

document.addEventListener('DOMContentLoaded', () => {
    seedClaimsIfNeeded();
    currentClaims = loadClaims();

    const page = document.body.dataset.page;

    if (page === 'perito-login') {
        initExpertLogin();
    }

    if (page === 'perito-dashboard') {
        initExpertDashboard();
    }

    if (page === 'perito-detalle') {
        initExpertDetail();
    }
});

function seedClaimsIfNeeded() {
    const storedClaims = localStorage.getItem(STORAGE_KEY);
    if (!storedClaims) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultClaims));
    }
}

function loadClaims() {
    const claimsRaw = localStorage.getItem(STORAGE_KEY);
    return claimsRaw ? JSON.parse(claimsRaw) : [];
}

function saveClaims(claims) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(claims));
}

function initExpertLogin() {
    const loginForm = document.getElementById('peritoLoginForm');
    if (!loginForm) {
        return;
    }

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        window.location.href = 'perito-dashboard.html';
    });
}

function initExpertDashboard() {
    const statusFilter = document.getElementById('statusFilter');
    const searchInput = document.getElementById('searchInput');
    const logoutBtn = document.getElementById('peritoLogoutBtn');

    renderClaimList(currentClaims);

    if (statusFilter) {
        statusFilter.addEventListener('change', applyFilters);
    }

    if (searchInput) {
        searchInput.addEventListener('input', applyFilters);
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            window.location.href = 'perito-login.html';
        });
    }
}

function applyFilters() {
    const statusFilter = document.getElementById('statusFilter');
    const searchInput = document.getElementById('searchInput');
    const selectedStatus = statusFilter ? statusFilter.value : 'all';
    const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : '';

    const filteredClaims = currentClaims.filter((claim) => {
        const matchesStatus = selectedStatus === 'all' || claim.status === selectedStatus;
        const matchesSearch =
            claim.id.toLowerCase().includes(searchTerm) ||
            claim.customerName.toLowerCase().includes(searchTerm);

        return matchesStatus && matchesSearch;
    });

    renderClaimList(filteredClaims);
}

function renderClaimList(claims) {
    const claimsList = document.getElementById('claimsList');
    const emptyStateMessage = document.getElementById('emptyStateMessage');

    if (!claimsList || !emptyStateMessage) {
        return;
    }

    claimsList.innerHTML = '';

    if (!claims.length) {
        emptyStateMessage.style.display = 'block';
        return;
    }

    emptyStateMessage.style.display = 'none';

    claims.forEach((claim) => {
        const card = document.createElement('article');
        card.className = 'incidente-card perito-claim-card';
        card.innerHTML = `
            <div class="incidente-info perito-claim-info">
                <p class="incidente-id">${claim.id} · ${claim.customerName}</p>
                <p class="incidente-tipo">${claim.incidentType} · Creado: ${formatDate(claim.createdAt)}</p>
                <p class="perito-status-row">Estado: <span class="badge perito-badge ${getStatusClass(claim.status)}">${claim.status}</span></p>
            </div>
            <button class="btn-seguimiento perito-detail-btn" data-claim-id="${claim.id}">Ver detalle</button>
        `;
        claimsList.appendChild(card);
    });

    claimsList.querySelectorAll('.perito-detail-btn').forEach((button) => {
        button.addEventListener('click', (event) => {
            const claimId = event.target.dataset.claimId;
            window.location.href = `perito-detalle.html?id=${encodeURIComponent(claimId)}`;
        });
    });
}

function initExpertDetail() {
    const claimId = getClaimIdFromQuery();
    const claim = currentClaims.find((item) => item.id === claimId);

    if (!claim) {
        showDetailFeedback('No se ha encontrado el parte solicitado.', 'error');
        hideDetailSections();
        return;
    }

    renderClaimDetail(claim);
    setupDetailActions(claim);
}

function getClaimIdFromQuery() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

function hideDetailSections() {
    document.querySelectorAll('.perito-section').forEach((section) => {
        section.style.display = 'none';
    });
}

function renderClaimDetail(claim) {
    setText('detailClaimId', claim.id);
    setText('detailCreatedAt', `Creado el ${formatDate(claim.createdAt)}`);

    const statusBadge = document.getElementById('detailStatusBadge');
    if (statusBadge) {
        statusBadge.textContent = claim.status;
        statusBadge.className = `badge perito-badge ${getStatusClass(claim.status)}`;
    }

    setText('detailCustomerName', `Nombre: ${claim.customerName}`);
    setText('detailPolicy', `Póliza: ${claim.policyNumber}`);
    setText('detailPhone', `Teléfono: ${claim.phone}`);

    setText('detailIncidentType', `Tipo: ${claim.incidentType}`);
    setText('detailIncidentDate', `Fecha: ${formatDate(claim.incidentDate)}`);
    setText('detailIncidentLocation', `Ubicación: ${claim.location}`);

    renderAnswerList(claim.formAnswers);
    renderPhotos(claim.photos);
    renderAIProposal(claim);
    renderTimeline(claim.history);
}

function renderAnswerList(answers) {
    const answerContainer = document.getElementById('detailAnswers');
    if (!answerContainer) {
        return;
    }

    answerContainer.innerHTML = answers
        .map((answer) => `
            <div class="perito-answer-item">
                <p class="perito-question">${answer.question}</p>
                <p class="perito-answer">${answer.answer}</p>
            </div>
        `)
        .join('');
}

function renderPhotos(photos) {
    const photosContainer = document.getElementById('detailPhotos');
    const photoModal = document.getElementById('photoModal');
    const modalPhoto = document.getElementById('modalPhoto');
    const closePhotoModal = document.getElementById('closePhotoModal');

    if (!photosContainer || !photoModal || !modalPhoto || !closePhotoModal) {
        return;
    }

    photosContainer.innerHTML = photos
        .map(
            (photoUrl, index) => `
                <button type="button" class="perito-thumb-btn" data-photo-url="${photoUrl}">
                    <img src="${photoUrl}" alt="Foto ${index + 1} del parte" class="perito-thumb">
                </button>
            `
        )
        .join('');

    photosContainer.querySelectorAll('.perito-thumb-btn').forEach((thumbBtn) => {
        thumbBtn.addEventListener('click', () => {
            modalPhoto.src = thumbBtn.dataset.photoUrl;
            photoModal.classList.add('is-open');
        });
    });

    closePhotoModal.addEventListener('click', () => {
        photoModal.classList.remove('is-open');
    });

    photoModal.addEventListener('click', (event) => {
        if (event.target === photoModal) {
            photoModal.classList.remove('is-open');
        }
    });
}

function renderAIProposal(claim) {
    const aiSection = document.getElementById('aiProposalSection');
    if (!aiSection) {
        return;
    }

    if (!claim.fromAI || !claim.aiProposal) {
        aiSection.style.display = 'none';
        return;
    }

    aiSection.style.display = 'block';
    setText('aiObject', claim.aiProposal.objectDetected);
    setText('aiDamage', claim.aiProposal.damageType);
    setText('aiScenario', claim.aiProposal.scenario);
    setText('aiConfidence', `${claim.aiProposal.confidence} %`);
}

function renderTimeline(history) {
    const timeline = document.getElementById('detailTimeline');
    if (!timeline) {
        return;
    }

    timeline.innerHTML = history
        .map(
            (entry) => `
                <div class="perito-timeline-item">
                    <div class="perito-timeline-marker"></div>
                    <div class="perito-timeline-content">
                        <p class="perito-timeline-status">${entry.status}</p>
                        <p class="perito-timeline-date">${entry.dateTime}</p>
                        <p class="perito-timeline-comment">${entry.comment || 'Sin comentario'}</p>
                    </div>
                </div>
            `
        )
        .join('');
}

function setupDetailActions(claim) {
    const backToListTop = document.getElementById('backToListTop');
    const backToListBtn = document.getElementById('backToListBtn');
    const confirmDecisionBtn = document.getElementById('confirmDecisionBtn');

    if (backToListTop) {
        backToListTop.addEventListener('click', goBackToDashboard);
    }

    if (backToListBtn) {
        backToListBtn.addEventListener('click', goBackToDashboard);
    }

    if (confirmDecisionBtn) {
        confirmDecisionBtn.addEventListener('click', () => setExpertDecision(claim.id));
    }
}

function setExpertDecision(claimId) {
    const selectedDecision = getSelectedDecision();
    const comment = getCommentValue();

    if (!selectedDecision) {
        showDetailFeedback('Selecciona una decisión antes de confirmar.', 'error');
        return;
    }

    if (selectedDecision === 'RECHAZAR' && !comment) {
        showDetailFeedback('Para rechazar un parte, debes añadir un comentario obligatorio.', 'error');
        return;
    }

    const newStatus = decisionToStatusMap[selectedDecision];
    const decisionLabel = selectedDecision.replaceAll('_', ' ');

    const updatedClaims = currentClaims.map((claim) => {
        if (claim.id !== claimId) {
            return claim;
        }

        const updatedHistory = [...claim.history];
        updatedHistory.push({
            status: newStatus,
            dateTime: getCurrentDateTime(),
            comment: comment || `Decisión aplicada por perito: ${decisionLabel}.`
        });

        return {
            ...claim,
            status: newStatus,
            history: updatedHistory
        };
    });

    currentClaims = updatedClaims;
    saveClaims(currentClaims);

    const updatedClaim = currentClaims.find((claim) => claim.id === claimId);
    if (updatedClaim) {
        renderClaimDetail(updatedClaim);
    }

    if (selectedDecision === 'SOLICITAR_MAS_INFO') {
        showDetailFeedback('Estado actualizado y solicitud de datos adicionales enviada al cliente (simulado).', 'success');
        return;
    }

    showDetailFeedback('Estado actualizado y notificación enviada al cliente (simulado).', 'success');
}

function getSelectedDecision() {
    const selectedRadio = document.querySelector('input[name="expertDecision"]:checked');
    return selectedRadio ? selectedRadio.value : '';
}

function getCommentValue() {
    const commentField = document.getElementById('expertComment');
    return commentField ? commentField.value.trim() : '';
}

function showDetailFeedback(message, type) {
    const feedback = document.getElementById('detailFeedback');
    if (!feedback) {
        return;
    }

    feedback.textContent = message;
    feedback.className = `perito-feedback perito-feedback-${type}`;
    feedback.style.display = 'block';
}

function goBackToDashboard() {
    window.location.href = 'perito-dashboard.html';
}

function getStatusClass(status) {
    return statusClassMap[status] || 'perito-badge-pending';
}

function setText(elementId, text) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = text;
    }
}

function formatDate(isoDate) {
    const [year, month, day] = isoDate.split('-');
    return `${day}/${month}/${year}`;
}

function getCurrentDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString('es-ES');
    const time = now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
    return `${date} ${time}`;
}

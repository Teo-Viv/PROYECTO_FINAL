document.addEventListener('DOMContentLoaded', () => {

    // 1. Manejo de Pestañas (Simulación de navegación)
    const tabs = document.querySelectorAll('.nav-tabs__item');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => {
                t.classList.remove('nav-tabs__item--active');
                t.removeAttribute('aria-current');
            });
            this.classList.add('nav-tabs__item--active');
            this.setAttribute('aria-current', 'page');
        });
    });

    // 2. Simulación de Búsqueda y Llenado de Tabla (UC06)
    const form = document.querySelector('.filter-form');
    const tbody = document.getElementById('patients-tbody');

    // Datos de ejemplo
    const examplePatients = [
        {
            id: '1234567890',
            ciudad: 'Quito',
            parroquia: 'Centro',
            prioridad: 1, // ALTO (Color Rojo)
            puntaje: 95,
            diagnostico: 'Control de rutina - Diabetes'
        },
        {
            id: '0987654321',
            ciudad: 'Guayaquil',
            parroquia: 'Norte',
            prioridad: 2, // MEDIO (Color Naranja)
            puntaje: 70,
            diagnostico: 'Hipertensión no controlada'
        }
    ];

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Lógica de filtrado (se omiten los detalles)

        // Limpiar tabla
        tbody.innerHTML = '';

        // Agregar pacientes de ejemplo
        examplePatients.forEach(patient => {
            const row = tbody.insertRow();
            // Asigna la clase CSS de color basada en la prioridad
            const triageClass = `triage-legend__color--${patient.prioridad}`;

            row.innerHTML = `
                <td>${patient.id}</td>
                <td>${patient.ciudad}</td>
                <td>${patient.parroquia}</td>
                <td class="${triageClass}" style="font-weight: bold;">NIVEL ${patient.prioridad}</td>
                <td>${patient.puntaje}</td>
                <td>${patient.diagnostico}</td>
            `;

            // Evento para simular abrir el detalle del caso (UC07 / UC08)
            row.addEventListener('click', function() {
                alert('Abriendo detalles del caso para actualización de prioridad y registro de observaciones: ' + patient.id);
            });
        });
    });
});
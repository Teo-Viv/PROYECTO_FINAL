// Validación del formulario
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Captura de valores (incluyendo el rol para la lógica futura)
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const role = document.getElementById('role').value;

            if (email && password && role) {
                // Aquí iría la lógica de autenticación (UC01) real.
                console.log(`Intentando ingresar como: ${role}`);
                alert(`Autenticación simulada exitosa para el rol: ${role}`);
                // Redirigir al dashboard correspondiente al rol aquí (ej: if role == 'medico'...)
            } else {
                alert('Por favor, complete todos los campos.');
            }
        });
    }
});
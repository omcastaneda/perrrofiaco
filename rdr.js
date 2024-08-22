// Redireccionar al hacer clic en el botón de adopción
document.getElementById('adopt-button').addEventListener('click', function() {
    window.location.href = 'formulario.html'; // Redirige al formulario
});

// Guardar los datos del formulario en localStorage
function guardarDatos() {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    var direccion = document.getElementById('direccion').value;

    // Crear un objeto con los datos del formulario
    var datosAdopcion = {
        nombre: nombre,
        email: email,
        telefono: telefono,
        direccion: direccion
    };

    // Convertir el objeto a JSON y guardarlo en localStorage
    localStorage.setItem('datosAdopcion', JSON.stringify(datosAdopcion));

    // Confirmación de guardado
    alert('¡Datos guardados exitosamente!');

    // Redireccionar a la página de agradecimiento o a la página principal
    window.location.href = 'index.html'; // O redirige a una página de agradecimiento
}

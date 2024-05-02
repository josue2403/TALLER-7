document.addEventListener("DOMContentLoaded", function() {
    // Espera a que el Modelo de Objetos del Documento esté completamente cargado antes de ejecutar el código

    const form = document.getElementById("registroForm");
    // Obtiene el formulario de registro por su ID

    const mensajeRegistroExitoso = document.getElementById("mensajeRegistroExitoso");
    // Obtiene el elemento del mensaje de registro exitoso por su ID

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto del navegador
        form.reset(); // Restablece el formulario para borrar los datos escritos en los campos
        mensajeRegistroExitoso.style.display = "block";
        // Muestra el mensaje de registro exitoso estableciendo su estilo de visualización a "block"

        setTimeout(function() {
        // Configura un temporizador para ejecutar una función después de un cierto tiempo

            mensajeRegistroExitoso.style.display = "none";
            }, 3000); // Oculta el mensaje de registro exitoso después de 3 segundos estableciendo su estilo de visualización a "none"
    });
});

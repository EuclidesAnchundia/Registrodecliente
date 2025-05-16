// Espera que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("formularioRegistro");
    // Selecciona el formulario usando su ID

    const mensajeContenedor = document.getElementById("mensajes");
    // Selecciona el contenedor donde se mostrarán los mensajes

    formulario.addEventListener("submit", function (e) {
        // Agrega un listener al evento de envío del formulario

        e.preventDefault();
        // Evita que el formulario se envíe de forma automática

        // Obtiene los valores ingresados por el usuario y los limpia de espacios
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const direccion = document.getElementById("direccion").value.trim();
        const ciudad = document.getElementById("ciudad").value.trim();
        const identificacion = document.getElementById("identificacion").value.trim();
        const fecha = document.getElementById("fecha").value;
        const preferencia = document.getElementById("preferencia").value;

        let errores = []; // Array para almacenar mensajes de error

        // --- Validaciones ---

        if (nombre.length < 3) {
            errores.push("El nombre debe tener al menos 3 caracteres.");
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Expresión regular básica para validar email

        if (!emailRegex.test(email)) {
            errores.push("Correo electrónico inválido.");
        }

        const telefonoRegex = /^[0-9]{7,15}$/;
        // Valida que el teléfono tenga entre 7 y 15 dígitos y solo números

        if (!telefonoRegex.test(telefono)) {
            errores.push("El teléfono debe contener solo números y tener entre 7 y 15 dígitos.");
        }

        if (direccion.length < 5) {
            errores.push("La dirección debe tener al menos 5 caracteres.");
        }

        if (ciudad.length < 2) {
            errores.push("Ingrese una ciudad válida.");
        }

        if (identificacion.length < 5) {
            errores.push("La identificación debe tener al menos 5 caracteres.");
        }

        if (!fecha) {
            errores.push("Debe seleccionar una fecha.");
        }

        if (preferencia === "") {
            errores.push("Debe seleccionar una forma de contacto preferida.");
        }

        // --- Mostrar mensajes ---
        if (errores.length > 0) {
            mostrarMensajes(errores, "error");
            // Si hay errores, los mostramos como mensajes de error
        } else {
            mostrarMensajes(["🎉 Registro exitoso. ¡Gracias por registrarte!"], "exito");
            // Si no hay errores, mostramos mensaje de éxito
            formulario.reset(); // Limpiamos el formulario
        }
    });

    // Función para mostrar los mensajes de error o éxito
    function mostrarMensajes(listaMensajes, tipo) {
        mensajeContenedor.innerHTML = ""; // Limpiamos los mensajes anteriores

        // Agregamos una clase diferente dependiendo del tipo de mensaje
        mensajeContenedor.className = tipo === "error" ? "mensaje-error" : "mensaje-exito";

        // Iteramos cada mensaje y lo mostramos dentro del div
        listaMensajes.forEach(msg => {
            const p = document.createElement("p"); // Creamos un nuevo párrafo
            p.textContent = msg; // Le asignamos el texto del mensaje
            mensajeContenedor.appendChild(p); // Lo agregamos al contenedor
        });
    }
});

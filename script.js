document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('song-request-form');
    const messageContainer = document.getElementById('message-container');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que la página se recargue

        const name = document.getElementById('name').value;
        const song = document.getElementById('song').value;

        if (name && song) {
            // Muestra un mensaje de éxito con la información
            messageContainer.textContent = `¡Gracias, ${name}! Tu solicitud de la canción "${song}" ha sido enviada al DJ.`;

            // Opcional: limpiar los campos del formulario
            form.reset();

            // Aquí podrías agregar la lógica para enviar la solicitud al DJ, por ejemplo:
            // 1. Mostrar las solicitudes en una segunda página para el DJ.
            // 2. Enviar los datos a un servidor o una base de datos.
            // 3. Enviar un correo electrónico o un mensaje a través de una API (como la de Telegram).
            // Por simplicidad, este ejemplo solo muestra el mensaje en la página.
        } else {
            messageContainer.textContent = 'Por favor, completa ambos campos.';
            messageContainer.style.color = '#dc3545';
        }
    });
});
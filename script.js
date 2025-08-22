document.addEventListener('DOMContentLoaded', () => {
    const requestsContainer = document.getElementById('requests-container');
    const submitButton = document.getElementById('submit-button');
    const totalRows = 10;
    let currentRowIndex = 0;
    const requestsData = [];

    // Función para crear una fila de solicitud
    function createRow(index) {
        const row = document.createElement('div');
        row.className = `request-row ${index === 0 ? 'enabled' : 'disabled'}`;
        row.dataset.index = index;

        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.placeholder = 'Tu nombre';
        nameInput.name = `name-${index}`;

        const songInput = document.createElement('input');
        songInput.type = 'text';
        songInput.placeholder = 'Canción y artista';
        songInput.name = `song-${index}`;

        row.appendChild(nameInput);
        row.appendChild(songInput);
        requestsContainer.appendChild(row);
    }

    // Generar las 10 filas
    for (let i = 0; i < totalRows; i++) {
        createRow(i);
    }

    // Manejador del evento clic del botón
    submitButton.addEventListener('click', () => {
        const currentRow = document.querySelector(`.request-row[data-index="${currentRowIndex}"]`);
        
        // Obtener los datos de la fila actual
        const nameInput = currentRow.querySelector('input[placeholder="Tu nombre"]');
        const songInput = currentRow.querySelector('input[placeholder="Canción y artista"]');

        const name = nameInput.value.trim();
        const song = songInput.value.trim();

        // Validar que ambos campos estén llenos
        if (name === '' || song === '') {
            alert('Por favor, completa ambos campos.');
            return;
        }

        // Guardar los datos del pedido
        requestsData.push({ nombre: name, cancion: song });
        console.log('Pedidos actuales:', requestsData);

        // Inhabilitar la fila actual
        currentRow.classList.remove('enabled');
        currentRow.classList.add('disabled');

        // Pasar a la siguiente fila
        currentRowIndex++;

        if (currentRowIndex < totalRows) {
            // Habilitar la siguiente fila
            const nextRow = document.querySelector(`.request-row[data-index="${currentRowIndex}"]`);
            nextRow.classList.remove('disabled');
            nextRow.classList.add('enabled');
        } else {
            // Si no quedan más filas, inhabilitar el botón de envío
            submitButton.disabled = true;
            submitButton.textContent = 'Gracias, todos los espacios están llenos.';
        }
    });
});

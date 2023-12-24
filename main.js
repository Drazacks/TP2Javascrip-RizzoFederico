// Obtener la referencia al input de búsqueda y al contenido de las cards
const searchBar = document.querySelector('.search-bar');
const cards = document.querySelectorAll('.card');

// Función para filtrar las cards según el texto ingresado en el input
const filtrarCards = (texto) => {
    const textoBusqueda = texto.toLowerCase();
    cards.forEach((card) => {
        const titulo = card.querySelector('h2').innerText.toLowerCase();
        const descripcion = card.querySelector('p').innerText.toLowerCase();
        if (titulo.includes(textoBusqueda) || descripcion.includes(textoBusqueda)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
};

// Evento al escribir en el input de búsqueda
searchBar.addEventListener('input', (e) => {
    const textoIngresado = e.target.value.trim();
    filtrarCards(textoIngresado);
});

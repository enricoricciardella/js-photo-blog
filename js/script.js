//Recupero dall'HTML
const bacheca = document.getElementById("bacheca");
console.log(bacheca);

// URL dell'API
const apiURL = "https://jsonplaceholder.typicode.com/photos?_limit=6";

// Funzione per ottenere le foto dall'API
function getPhotos() {
    fetch(apiURL)
        .then(response => response.json())
        .then(foto => {
            console.log(foto); // Verifica i dati nella console
            visualizzaFoto(foto); // Chiama la funzione per visualizzare le foto
        })
}
// Funzione per creare una card
const creaCard = (foto) => {
    return `
    <div class="foto-card">
        <img src="${foto.url}" alt="${foto.title}">
        <p>${foto.title}</p>
    </div>
    `;
};
// Funzione per visualizzare le foto nella bacheca
function visualizzaFoto(foto) {
    foto.forEach(photo => {
        const fotoCardHTML = creaCard(photo);
        bacheca.innerHTML += fotoCardHTML;
    });
};
// Chiamata iniziale della funzione
document.addEventListener("DOMContentLoaded", getPhotos);


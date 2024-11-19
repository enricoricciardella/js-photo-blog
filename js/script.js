/*
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

/* */




// Estraggo elementi HTML e li metto su una variabile
const bacheca = document.getElementById("bacheca");
console.log(bacheca);
let arrayAPI = [];
// Faccio la chiamata all'API
axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=6`)
    .then((resp) => {
        console.log("va bene cosiiiiiii", resp.data);
        arrayAPI = resp.data;
        addFoto(arrayAPI);
    });

//Creo codice HTML (aggiungo le card)
function addFoto(arrayOggetti) {
    //Ciclo l'array di oggetti
    arrayOggetti.forEach((currElem, i) => {
        // console.log("Sono elemento", currElem, i);
        //Prelevo le proprietà dall'oggetto
        const { thumbnailUrl, title } = currElem;
        console.log(thumbnailUrl, title,);
    });
};



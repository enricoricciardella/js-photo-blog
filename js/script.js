

/**
 * Funzione che accetta array di oggetti e crea delle card html
 *
 * @param {array} arrayObj array di oggetti ottenuto dall'API
 */
const printCards = (arrayObj) => {
    for (let i = 0; i < arrayObj.length; i++) {
        const currObj = arrayObj[i];
        // console.log(currObj);
        //Destrutturazione currObj per prelevare due variabili, title e url
        let { title, url } = currObj;
        console.log(title, url); //Controllo i dati prelevati(Title,url)

        //creo stringa con i backtick da mettere nell'html"
        const cardHtml = ` 
        <div class="card">
        <img src="${url}" alt="foto-barbaro">
        <p class="paragraph">"${title}"</p>
        </div>
        `;
        row.innerHTML += cardHtml;
    }
};

//PRENDO ELEMENTI DALL'HTML
const row = document.querySelector(".row");
const overlay = document.querySelector(".overlay");
const btnClose = document.getElementById("btn-close");
const modalImg = document.querySelector(".modal img");
// console.log(modalImg);

// console.log(row);

//FACCIO CHIAMATA API PER RECUPERARE I DATA
// console.log(axios); //Controllo se Axios è collegato
axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
    .then(resp => {
        //Qui si gestisce la risposta dell'API
        console.log("Dati ricevuti dall'API", resp.data);
        //CREO ARRAY PER SALVARE LA RESP .DATA
        // const arrayData = resp.data;
        printCards(resp.data); //Richiamo la funzione per creare le card
        //Creo array per contenere tutte le img delle card
        const photoArray = document.querySelectorAll(".card img");
        // console.log(photoArray);
        //Faccio un ciclo for per iterare tutte le foto delle cards
        for (let i = 0; i < photoArray.length; i++){
            const currPhoto = photoArray[i];
            // console.log(currPhoto);
            
            // Prendo il src corrente di currPhoto
            const currSrc = currPhoto.src;
            
            // All'evento click sulle foto di ogni card, rimuoverà la classe display-none all'elemento overlay 
            currPhoto.addEventListener("click", function(){
                overlay.classList.remove("d-none");
            // Setto attributo src corrente a modalImg
            // modalImg.src = currSrc;
            modalImg.setAttribute("src", currSrc )
            });
        }
    });
    // Al click sul btn, aggiungerò la classe d-none all'elemento overlay
    btnClose.addEventListener("click", function(){
        overlay.classList.add("d-none");
    });

//i parametri di ingresso son variabili vuote, le riempiamo quando richiamiamo la funzione
let somma = 0;
//fai la somma dell'array
const array = [1, 39, 4, 1, 189];
for( let i = 0; i < array.length; i++){
    const currElem = array[i];
    somma += currElem;
}
console.log(somma);


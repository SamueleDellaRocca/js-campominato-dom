// SELEZIONE ELEMENTI HTML 
const bottonePlay = document.querySelector('#bottone_play');
const divContainer = document.querySelector('#container');
const inputDifficolta = document.querySelector('#difficolta');
const h2risultatoSelezionato = document.querySelector('#risultato');
// FINE SELEZIONE ELEMENTI




let arrayRisultato = [];

// SETUP GIOCO
// FUNZIONE PER CREARE IL NUMERO DI CASELLE IN BASE ALLA DIFFICOLTA
function creaNumeri(quantiNumeriDevoCreare, classeDifficolta) {

    // GENERATORE ARRAY BOMBE BOMBE 
    h2risultatoSelezionato.innerHTML = ``;
    const arrayBombe = [];
    while (arrayBombe.length < 16) {
        let numeroRandom = Math.floor(Math.random() * quantiNumeriDevoCreare) + 1;
        while (arrayBombe.includes(numeroRandom)) {
            numeroRandom = Math.floor(Math.random() * quantiNumeriDevoCreare) + 1;
        }
        arrayBombe.push(numeroRandom);
    }
    console.log(arrayBombe);
    // FINE GENERATORE ARRAY BOMBE


    // GENERATORE DI NUMERI IN BASE ALLA DIFFICOLTà
    let divNumero;
    arrayRisultato = [];
    for (let index = 1; index <= quantiNumeriDevoCreare; index++) {

        divNumero = document.createElement('div');
        divNumero.classList.add(`${classeDifficolta}`);
        divNumero.innerHTML = index;
        divContainer.append(divNumero);

        // CICLO CHE CONFRONTA I NUMERI DELLE BOMBE CON I NUMERI DELLE CELLE, PER STABILIRE BOMBE E NUMERI BUONI
        for (let index = 0; index < arrayBombe.length; index++) {

            if (divNumero.innerHTML == arrayBombe[index]) {
                divNumero.addEventListener('click', funzioneBombe);

            } else {
                divNumero.addEventListener('click', funzioneNumeriBuoni);
            }

        }
        // FINE CICLO
    }
    // FINE GENERATORE DI NUMERI

}
// FINE FUNZIONE PER CREARE IL NUMERO DI CASELLE



// FUNZIONE CLICK NUMERI BUONI
function funzioneNumeriBuoni() {
    this.classList.add('selezionata');
    arrayRisultato.push(this.innerHTML);
    console.log(arrayRisultato);
}


// FUNZIONE CLICK BOMBE
function funzioneBombe() {
    this.classList.add('bomba');
    h2risultatoSelezionato.innerHTML = `hai perso, hai fatto ${arrayRisultato.length} punti`;
}





// INIZIO DEL GIOCO
bottonePlay.addEventListener('click', gioca);

function gioca() {

    divContainer.innerHTML = "";

    if (inputDifficolta.value == 'Easy') {
        creaNumeri(100, 'carta_easy');

    } else if (inputDifficolta.value == 'Medium') {
        creaNumeri(81, 'carta_medium');

    } else {
        creaNumeri(49, 'carta_hard');

    }

}







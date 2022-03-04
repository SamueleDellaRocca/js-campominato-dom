// selezione elementi html 
const bottonePlay = document.querySelector('#bottone_play');
const divContainer = document.querySelector('#container');
const inputDifficolta = document.querySelector('#difficolta');
const h2risultatoSelezionato = document.querySelector('#risultato');

let arrayRisultato = [];

function creaNumeri(quantiNumeriDevoCreare, classeDifficolta) {

    h2risultatoSelezionato.innerHTML = ``;
    const arrayNumeriRandom = [];
    while (arrayNumeriRandom.length < 16) {
        let numeroRandom = Math.floor(Math.random() * quantiNumeriDevoCreare) + 1;
        while (arrayNumeriRandom.includes(numeroRandom)) {
            numeroRandom = Math.floor(Math.random() * quantiNumeriDevoCreare) + 1;
        }
        arrayNumeriRandom.push(numeroRandom);
    }
    console.log(arrayNumeriRandom);



    let divNumero;
    arrayRisultato = [];
    for (let index = 1; index <= quantiNumeriDevoCreare; index++) {

        divNumero = document.createElement('div');
        divNumero.classList.add(`${classeDifficolta}`);
        divNumero.innerHTML = index;
        divContainer.append(divNumero);
        divNumero.addEventListener('click', cambioColoreSfondo);

        for (let index = 0; index < arrayNumeriRandom.length; index++) {

            if (divNumero.innerHTML == arrayNumeriRandom[index]) {
                divNumero.addEventListener('click', cambioColoreSfondoRosso);
            }
        }
    }

    console.log(arrayRisultato);
}






function cambioColoreSfondoRosso() {
    this.classList.add('bomba');
    h2risultatoSelezionato.innerHTML = `hai perso, hai fatto ${arrayRisultato.length} punti`;
}

function cambioColoreSfondo() {
    this.classList.add('selezionata');
    arrayRisultato.push(this.innerHTML);
}



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







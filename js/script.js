// selezione elementi html 
const bottonePlay = document.querySelector('#bottone_play');
const divContainer = document.querySelector('#container');
const inputDifficolta = document.querySelector('#difficolta');



function creaNumeri(quantiNumeriDevoCreare, classeDifficolta) {
    for (let index = 1; index <= quantiNumeriDevoCreare; index++) {

        let divNumero = document.createElement('div');
        divNumero.classList.add(`${classeDifficolta}`);
        divNumero.innerHTML = index;
        divContainer.append(divNumero);
        divNumero.addEventListener('click', cambioColoreSfondo);
    }

    const arrayNumeriRandom = [];
    while (arrayNumeriRandom.length < 16) {
        let numeroRandom = Math.floor(Math.random() * quantiNumeriDevoCreare) + 1;
        while (arrayNumeriRandom.includes(numeroRandom)) {
            numeroRandom = Math.floor(Math.random() * quantiNumeriDevoCreare) + 1;
        }
        arrayNumeriRandom.push(numeroRandom);
    }

    console.log(arrayNumeriRandom);
}

function cambioColoreSfondo() {
    this.classList.add('selezionata');
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


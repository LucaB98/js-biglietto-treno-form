console.log('JS OK')


// scaletta


// 1 - prendere gli elemtenti che servono 
// 2 - Lego un event listener al bottone di conferma




// 1 - recuperare i valori del form
    // validazione
// 2 - calcolare il prezzo del biglietto basato sui km
// 3 - verificare se devo applicare uno sconto (e lo calcolo)
// 4 - calcolo il prezzo definitivo
// 5 - arrotondo a 2 decimali 
// 6 - svuoto i campi
// 7 - compongo il biglietto con i giusti valori
// 8 - mostro il biglietto


// FORM ELEMENT

const nameField = document.getElementById('name');
const ageField = document.getElementById('age');
const kmsField = document.getElementById('kms');
console.log(nameField, ageField, kmsField);
// BUTTONS

const resetButton = document.getElementById('reset-button');
const confirmButton = document.getElementById('confirm-button');
const buyButton = document.getElementById('buy-button');
console.log(resetButton, confirmButton, buyButton);

// TICKET

const ticketSection = document.getElementById('ticket-section');
const passangerElement = document.getElementById('passenger-name');
const rateElement = document.getElementById('rate');
const carElement = document.getElementById('car');
const pnrElement = document.getElementById('pnr');
const priceElement = document.getElementById('price');
console.log(ticketSection, passangerElement, rateElement, carElement, pnrElement, priceElement);

// ALERT    

const formAlert = document.querySelector('.alert')


// VARIABILI INIZIALI

const pricePerKms = 0.21;
let rateName = 'Tariffa Ordinaria';
console.log(pricePerKms);
// EVENT LISTENER

confirmButton.addEventListener('click', function(){
    // recupero i valori del form
    const nameValue = nameField.value.trim();
    const kmsValue = parseInt(kmsField.value);
    const ageValue = ageField.value;
    console.log(nameValue, kmsValue, ageValue);

    // VALIDAZIONE

    if(!nameValue || isNaN(kmsValue) || kmsValue < 1){
        formAlert.classList.add('alert-danger');
        formAlert.classList.remove('d-none', 'alert-success');
        formAlert.innerText = 'Ci sono errori nel form  ';
        ticketSection.classList.add('d-none')

        return;
    } else {
        formAlert.classList.remove('d-none', 'alert-danger');
        formAlert.classList.add('alert-success');
        formAlert.innerText = 'Biglietto generato con successo';
    }


    // CALCOLO IL PREZZO BASE

    let price = pricePerKms * kmsValue;

    // CALCOLO EVENTUALE SCONTO

    if(ageValue === 'under'){
        rateName =  'Tariffa Minorenni';
        price = price * 0.8;
    } else if (ageValue === 'over'){
        rateName = 'Tariffa Over 65';
        price = price * 0.6;
    }
    console.log(price, rateName)

    // RAMDOMIZZO NUMERO CARROZZA

    const car = Math.floor(Math.random() * 10) + 1;
    
    // RAMDOMIZZO NUMERO BIGLIETTO

    const pnr = Math.floor(Math.random() * (100000 - 90000)) + 90000;
    console.log(car, pnr);

    // MONTIAMO I DATI NEL BIGLIETTO

    passangerElement.innerText = nameValue;
    rateElement.innerText = rateName;
    carElement.innerText = car;
    pnrElement.innerText = pnr;
    priceElement.innerText = '€' + price.toFixed(2);
    console.log(passangerElement, rateElement, carElement, pnrElement, priceElement);
    // mostraimo la section

    ticketSection.classList.remove('d-none');
})
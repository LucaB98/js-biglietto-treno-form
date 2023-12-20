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

// BUTTONS

const resetButton = document.getElementById('reset-button')
const confirmButton = document.getElementById('confirm-button')
const buyButton = document.getElementById('buy-button')

// TICKET

const ticketSection = document.getElementById('ticket-section')
const passangerElement = document.getElementById('passanger-name')
const rateElement = document.getElementById('rate')
const carElement = document.getElementById('car')
const pnrElement = document.getElementById('pnr')
const priceElement = document.getElementById('price')

// VARIABILI INIZIALI

const pricePerKms = 0.21
let rateName = 'Tariffa Ordinaria'

// EVENT LISTENER

confirmButton.addEventListener('click', function(){
    
})
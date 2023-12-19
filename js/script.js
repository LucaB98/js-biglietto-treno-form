console.log('JS OK')


// scaletta


// 1 - prendere gli elemtenti che servono 
// 2 - chiedere eta' e km da percorrere all'utente
// 3 - calcolare il costo del biglietto 
// 4 - generare i discount (minorenni 20%, over 65 40%)
// 5 - applicare i discount
// 6 - stampare il prezzo finale con massimo 2 cifre decimali


const userAge = parseInt(document.getElementById('age'))
const userKm = document.getElementById('km')
const paragraph = document.getElementById('paragraph')
const button = document.getElementById('button')
const costForKm = 0.21
let discount = null;
console.log(userAge, userKm, paragraph, button)

// userAge = parseInt(document.getElementById('age'))
//  console.log(userAge)
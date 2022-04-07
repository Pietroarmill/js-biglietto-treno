//DATI
// costo per km €0.21
// sconto per minorenni: 20%
// sconto per over 65: 40%
const priceKm = 0.21;

// const discountOver = 40%
// const discountUnder = 20%
console.log(priceKm);

//chiedere all'utente la sua eta e i chilometri che vuole percorrere 
const yourAge = parseInt(prompt("Dimmi la tua età"));
const tripLength = parseInt(prompt("Dimmi i kilometri che percorrerai"));
console.log(yourAge, tripLength);

//calcolo il prezzo del biglietto 
let ticketPrice = tripLength * priceKm;
console.log(ticketPrice);

//applicare gli sconti 

//
//DATI
// costo per km €0.21
// sconto per minorenni: 20%
// sconto per over 65: 40%
const priceKm = 0.21;
console.log(priceKm);

//chiedere all'utente la sua eta e i chilometri che vuole percorrere 
const yourAge = parseInt(prompt("Dimmi la tua età"));
const tripLength = parseInt(prompt("Dimmi i kilometri che percorrerai"));
console.log(yourAge, tripLength);

//calcolo il prezzo del biglietto 
let ticketPrice = tripLength * priceKm;
console.log(ticketPrice);

//applicare gli sconti 
let tripPrice;

if (yourAge < 18 ) {
    tripPrice = (ticketPrice - ((ticketPrice * 20) / 100));
}   else if (yourAge > 65) {
    tripPrice = (ticketPrice - ((ticketPrice * 40) / 100));
}   else {
    tripPrice = ticketPrice ;
}

console.log(tripPrice);

const tripPriceFormatted = tripPrice.toFixed(2) + " €";
console.log(tripPriceFormatted);


//far vedere a schermo il prezzo complessivo del biglietto
document.getElementById('price').innerHTML = `Costo del biglietto: ${tripPriceFormatted}`;
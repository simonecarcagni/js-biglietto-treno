/*
Chiedere km da percorrere 
Chiedere età del passeggero
Calcolare prezzo in base ai km (0.21 € al km).

Va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
*/

const kilometers = parseInt(prompt("Inserisci i km che vuoi percorrere"));

console.log(kilometers);

const age = parseInt(prompt("Inserisci la tua età"));

console.log(age);

let ticketPrice = kilometers * 0.21;

let discountYoung = (ticketPrice * 20) / 100;

let discountOlder = (ticketPrice * 40) / 100;

let ticketYoung = ticketPrice - discountYoung;

let ticketOlder = ticketPrice - discountOlder;

let ticketYoungPerc = Math.round(ticketYoung * 100) / 100;

let ticketOlderPerc = Math.round(ticketOlder * 100) / 100;

let ticketPricePerc = Math.round(ticketPrice * 100) / 100;

if ( age < 18 ){
    document.getElementById('price').innerHTML =    
    `Hai diritto a uno sconto del 20%
     Il prezzo del tuo biglietto: ${ticketYoungPerc} €`;
} else if (age > 65){
    document.getElementById('price').innerHTML =    
    `Hai diritto a uno sconto del 40%
     Il prezzo del tuo biglietto: ${ticketOlderPerc} €`;
} else {
    document.getElementById('price').innerHTML = `Il prezzo del tuo biglietto: ${ticketPricePerc} €`;
}




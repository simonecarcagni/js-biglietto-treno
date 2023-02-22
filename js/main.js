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

const ticketPrice = kilometers * 0.21;

const discountYoung = (ticketPrice * 20) / 100;

const discountOlder = (ticketPrice * 40) / 100;

const ticketYoung = ticketPrice - discountYoung;

const ticketOlder = ticketPrice - discountOlder;

if ( age < 18 ){
    document.getElementById('price').innerHTML = "Il prezzo del tuo biglietto: " + ticketYoung + "€";
} else if (age > 65){
    document.getElementById('price').innerHTML = "Il prezzo del tuo biglietto: " + ticketOlder + "€";
} else {
    document.getElementById('price').innerHTML = "Il prezzo del tuo biglietto: " + ticketPrice + "€";
}



// // CREARE UNA FUNZIONE PER CAPIRE SE UNA PAROLA È PALINDROMA
//
// // // Variabile per dare una parola da controllare
// var parolaUtente = prompt('Dimmi un parola palindroma');
//
// // In base all'output della funzione stampo un messaggio per l'utente
// var risultato = controlloParolaPalindroma(parolaUtente);
// var messaggio = 'La parola NON è palindroma';
// if (risultato) {
//   messaggio = 'La parola è palindroma';
// }
// alert(messaggio);
// //

// // APPROCCIO 1
// // Funzione che controlla se una parola è palindroma
// // Argomento: dargli una parola attraverso un prompt
// // Restituisce vero se la parola è palindroma, falso se non lo è
// function controlloParolaPalindroma(parolaDaControllare) {
//
//   // trasformo la stringa del prompt in un array
//   var arrayParolaUtente = parolaDaControllare.split('');
//
//   // dichiarazioni variabili per la logica
//   var i = 0;
//   var controllo = 0;
//   var output = false;
//
//   // ciclo per controllare confrontare ogni singola lettera dell'array con il suo revrese
//   // assegna un puanto per ogni confronto vero
//   while ((arrayParolaUtente[i] == arrayParolaUtente.reverse()[i]) && i < arrayParolaUtente.length) {
//     controllo += 1;
//     i++;
//   }
//   // controllo del confronto che deve essere uguale alla lunghezza dell'array
//   if (controllo == arrayParolaUtente.length) {
//     output = true;
//   }
//   return output;
// }
//

// // APPROCCIO 2
// function controlloParolaPalindroma(parolaDaControllare) {
//   // trasformo la stringa del prompt in un array, la giro al contrario e la unisco nuovamente
//   var parolaInvertita = parolaDaControllare.split('').reverse().join('');
//   console.log(parolaInvertita);
//   //Se la parola da controllare è identica se invertita significa che è palindroma
//   if(parolaDaControllare == parolaInvertita) {
//     return true;
//   } else {
//     return false;
//   }
//  }

// // // APPROCCIO 3
// function controlloParolaPalindroma(parolaDaControllare) {
//   var parolaInvertita = "";
//   //eseguo un ciclo al contrario e salvo ciascuna lettera nella parola invertita.. cosi la ottengo
//   for(var i = parolaDaControllare.length - 1; i >= 0; i--) {
//     parolaInvertita += parolaDaControllare[i];
//     console.log(parolaInvertita);
//   }
//   //Se la parola da controllare è identica se invertita significa che è palindroma
//   if(parolaDaControllare == parolaInvertita) {
//     return true;
//   } else {
//     return false;
//   }
// }


// GIOCO PARI O DISPARI
// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha vinto.

// Informazioni dall'utente
var numeroUtente = parseInt(prompt('Scrivi un numero da 1 a 5'));
var scommessaUtente = prompt('Scegli se pari o dispari e scrivi qui.');
console.log(numeroUtente);
// console.log(scommessaUtente);

// Genero numero del PC
function generatoreRandom() {
  numeroRandom = Math.floor(Math.random()*5 + 1);
  return numeroRandom;
}
numeroPC = generatoreRandom();
console.log(numeroPC);

// Controllo se la somma dei due numeri è pari o dispari
// Necessita dei due numeri: utente e PC.
// Restituisce pari o dispari
function sommaPariDispari(num1,num2) {
  somma = num1 + num2;
  risultato = '';
  if (somma % 2 == 0) {
    risultato = 'pari';
  } else {
    risultato = 'dispari';
  }
  return risultato;
}

risultatoSomma = sommaPariDispari(numeroUtente,numeroPC);
console.log(risultatoSomma);

// Dichiarazione del vincitore
var messaggio = 'Ha perso!!';
if (scommessaUtente == risultatoSomma) {
  messaggio = 'Complimenti hai vinto!'
}
alert(messaggio);

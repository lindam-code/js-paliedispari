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

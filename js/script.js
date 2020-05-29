// Una funzione per capire se la parola è palindroma

// Variabile per dare una parola da controllare
var parolaUtente = prompt('Dimmi un parola palindroma');

// Funzione che controlla se una parola è palindroma
// Argomento: dargli una parola attraverso un prompt
// Restituisce vero se la parola è palindroma, falso se non lo è
function controlloParolaPalindroma(parolaDaControllare) {

  // trasformo la stringa del prompt in un array
  var arrayParolaUtente = parolaDaControllare.split('');
  
  // dichiarazioni variabili per la logica
  var i = 0;
  var controllo = 0;
  var output = false;

  // ciclo per controllare confrontare ogni singola lettera dell'array con il suo revrese
  // assegna un puanto per ogni confronto vero
  while ((arrayParolaUtente[i] == arrayParolaUtente.reverse()[i]) && i < arrayParolaUtente.length) {
    controllo += 1;
    i++;
  }
  // controllo del confronto che deve essere uguale alla lunghezza dell'array
  if (controllo == arrayParolaUtente.length) {
    output = true;
  }
  return output;
}

// In base all'output della funzione stampo un messaggio per l'utente
var risultato = controlloParolaPalindroma(parolaUtente);
var messaggio = 'La parola NON è palindroma';
if (risultato) {
  messaggio = 'La parola è palindroma';
}
alert(messaggio);

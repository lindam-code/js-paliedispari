// Una funzione per capire se la parola è palindroma

// Variabile per dare una parola da controllare
var parolaUtente = prompt('Dimmi un parola palindroma');
console.log(parolaUtente);

// Restituisce se è vero o falso
function controlloParolaPalindroma(parolaDaControllare) {

  var arrayParolaUtente = parolaDaControllare.split('');
  console.log(arrayParolaUtente);

  // se è vero cambio parolaPalindroma
  var parolaPalindroma = true;
  var i = 0
  while ((arrayParolaUtente[i] == arrayParolaUtente.reverse()[i]) && i < arrayParolaUtente.length) {
    console.log(arrayParolaUtente[i] + ' - ' + arrayParolaUtente.reverse()[i]);
    i++;
  }

  console.log(parolaPalindroma);
  // return parolaPalindroma;
}
controlloParolaPalindroma(parolaUtente);

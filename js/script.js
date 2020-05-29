// Una funzione per capire se la parola è palindroma

// Variabile per dare una parola da controllare
var parolaUtente = prompt('Dimmi un parola palindroma');
console.log(parolaUtente);

// Restituisce se è vero o falso
function controlloParolaPalindroma(parolaDaControllare) {

  var arrayParolaUtente = parolaDaControllare.split('');
  console.log(arrayParolaUtente);
  // var arrayParolaUtenteReverse = arrayParolaUtente.reverse();
  // console.log(arrayParolaUtenteReverse);
  // var stringaParolaUtenteReverse = arrayParolaUtenteReverse.toString();
  // console.log(stringaParolaUtenteReverse);

  // se è vero cambio parolaPalindroma
  var parolaPalindroma = 'la parola NON è palidroma';
  for (var i = 0; i < arrayParolaUtente.length; i++) {
    if (arrayParolaUtente[i] == arrayParolaUtente.reverse()[i]) {
      console.log(arrayParolaUtente[i] + ' - ' + arrayParolaUtente.reverse()[i]);
      parolaPalindroma = 'la parola è palidroma';
    }
  }
  console.log(parolaPalindroma);
  // return parolaPalindroma;
}
controlloParolaPalindroma(parolaUtente);

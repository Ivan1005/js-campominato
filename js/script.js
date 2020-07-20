var arrayPc = [];
var i = 0;
// GENERO ARRAY DI 16 NUMERI

for (var i = 0 ; arrayPc.length < 16 ; i++) {
  var n = getRandom (1, 100);
    if ( arrayPc.includes(n) == false){
      arrayPc.push(n);
    }
}


console.log(arrayPc);
// NUMERI DELL'UTENTE CHE NON SI RIPETERANNO
var numeri = [];
// CONTEGGIO O PUNTEGGIO UTENTE
var counter= 0;
// SE IL CONTROLLO è FALSO E NON ABBIAMO SUPERATO GLI 84 TENTATIVI IL CICLO CONTINUERà
while (numeri.length < 84 && (controllo(arrayPc,utente)) != true) {
  var utente = parseInt(prompt("inserisci un numero da 1 a 100"));
  // ORA IMPOSTO I VARI if
  if (controllo(arrayPc,utente) == true || numeri.includes(utente)) {
    alert ("HAI PERSO punteggio ottenuto: " + counter )
  }else if (numeri.includes(utente) == false && numeri.length != 84) {
    numeri.push(utente);
    counter += +1;
  }else {
    alert("hai vinto!!");
  }
}


//funzione per numero random
function getRandom (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var random = Math.floor(Math.random() * (max - min + min) + 1);
  return random;
}
// funzione controllo
function controllo(lista, numero){
  var finder = false;
  for (var i = 0; i < lista.length; i++) {
    if (lista[i] == numero) {
      finder = true;
    }
  }
  return finder;
}

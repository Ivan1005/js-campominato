var arrayPc = [];
var i = 0;
var possibilita = 84;
// GENERO ARRAY DI 16 NUMERI

while ( arrayPc.length < 16 ) {
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
while (numeri.length < possibilita && (controllo(arrayPc,utente)) != true) {
  var utente = parseInt(prompt("inserisci un numero da 1 a 100"));
  check(utente);
  // ORA IMPOSTO I VARI if
  // SE IL NUMERO INSERITO è PRESENTE NELL ARRAY O LO HA GIà USATO ACCADRà QUESTO
  if (controllo(arrayPc,utente) == true || numeri.includes(utente)) {
    alert ("HAI PERSO punteggio ottenuto: " + counter )
    // SE IL NUMERO è BUONO SI PROSEGUIRà
  }else if (numeri.includes(utente) == false && numeri.length < possibilita -1 ) {
    numeri.push(utente);
    counter += +1;
    // SE ARRIVA ALLA FINE HA VINTO
  }else {
    alert("hai vinto");
  }
}


function check (num) {
  if (  num >100 || num <= 0) {
    alert(" ATTENZIONE INSERISCI UN NUMERO DA 1 A 100");
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

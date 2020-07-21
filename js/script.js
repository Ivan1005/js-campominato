var arrayPc = [];
var i = 0;
var possibilita = 84;
var maxR = 100;
var scelta = parseInt(prompt("inserire difficoltà : 0 , 1 , 2"));

// GENERO ARRAY DI 16 NUMERI

while ( arrayPc.length < 16 ) {
  var n = getRandom (1,maxR );
    if ( arrayPc.includes(n) == false){
      arrayPc.push(n);
    }
}

if (scelta == "1") {
  possibilita = 64;
  maxR = 80;
  var utente =parseInt(prompt("inserisci un numero da 1 a 80"))
  check2(utente);
}else if ( scelta == "2") {
  possibilita = 34;
  maxR = 50;
  utente =parseInt(prompt("inserisci un numero da 1 a 50"))
  check3(utente);
}else {
  utente = parseInt(prompt("inserisci un numero da 1 a 100"));
 check(utente);
}

console.log(arrayPc);
// NUMERI DELL'UTENTE CHE NON SI RIPETERANNO
var numeri = [];
// CONTEGGIO O PUNTEGGIO UTENTE
var counter= 0;
// SE IL CONTROLLO è FALSO E NON ABBIAMO SUPERATO GLI 84 TENTATIVI IL CICLO CONTINUERà
while (numeri.length < possibilita && (controllo(arrayPc,utente)) != true) {

    var tada = utente;

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
function check2 (num) {
  if (  num >80 || num <= 0) {
    alert(" ATTENZIONE INSERISCI UN NUMERO DA 1 A 100");
  }
}
function check3 (num) {
  if (  num >50 || num <= 0) {
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

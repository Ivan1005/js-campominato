var arrayPc = [];
var i = 0;
;
var maxR = 100;

// IMPOSTO DIFFICOLTà
do {
  var diff = prompt("inserisci la difficoltà : facile , medio , difficile");
} while (diff != "medio" && diff != "facile" && diff != "difficile");

if (diff == "medio") {
  maxR = 80;
}else if (diff == "difficile") {
  maxR = 50;
}

// switch (diff) {
//   case "medio" :
//     maxR=80;
//     break;
//   case "difficile":
//     maxR = 50;
//     break;
// }

// GENERO ARRAY DI 16 NUMERI

while ( arrayPc.length < 16 ) {
  var n = getRandom (1,maxR );
    if ( arrayPc.includes(n) == false){
      arrayPc.push(n);
    }
}

var possibilita = maxR - 16 ;



console.log(arrayPc);
// NUMERI DELL'UTENTE CHE NON SI RIPETERANNO
var numeri = [];
// SE IL CONTROLLO è FALSO E NON ABBIAMO SUPERATO GLI 84 TENTATIVI IL CICLO CONTINUERà
while (numeri.length < possibilita && controllo(arrayPc,utente) != true) {
    var utente = parseInt(prompt("inserisci un numero da 1 a "+ maxR));
    if (  utente >maxR || utente <= 0) {
        alert(" ATTENZIONE INSERISCI UN NUMERO DA 1 A "+ maxR);
      }
  // ORA IMPOSTO I VARI if
  // SE IL NUMERO INSERITO è PRESENTE NELL ARRAY O LO HA GIà USATO ACCADRà QUESTO
   else if (controllo(arrayPc,utente) == true ) {
    alert ("HAI PERSO punteggio ottenuto: " + numeri.length )
    // SE IL NUMERO è BUONO SI PROSEGUIRà
  }else if (numeri.includes(utente) == false ) {
    numeri.push(utente);
     if ( numeri.length == possibilita){
      alert("hai vinto");
    }  // SE ARRIVA ALLA FINE HA VINTO
  }else if ( numeri.includes(utente)){
    alert("attenzione il numero  è già inserito");
  }
}
console.log(numeri);
// COMPLICATO INUTILMENTE
// function check (num) {
//   if (  num >100 || num <= 0) {
//     alert(" ATTENZIONE INSERISCI UN NUMERO DA 1 A 100");
//   }
// }
// function check2 (num) {
//   if (  num >80 || num <= 0) {
//     alert(" ATTENZIONE INSERISCI UN NUMERO DA 1 A 100");
//   }
// }
// function check3 (num) {
//   if (  num >50 || num <= 0) {
//     alert(" ATTENZIONE INSERISCI UN NUMERO DA 1 A 100");
//   }
// }

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

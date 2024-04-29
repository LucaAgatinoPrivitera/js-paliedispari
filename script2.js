const email = prompt("Inserisci la tua email");
let utentiRegistrati = ["prova1", "prova2", "prova3"];
utentiRegistrati.push("funziona");
console.log(utentiRegistrati);
console.log(utentiRegistrati.length, typeof utentiRegistrati.length);

let check;

for (let c = 0; c <= utentiRegistrati.length; c++) {
    if (email == utentiRegistrati[c]) {
        // console.log("Sei registrato");
        check = true;
        // document.getElementById("email").innerHTML = ("Sei iscritto");
        // utentiRegistrati.push(email); Funziona in parte, scrive infinite volte "funziona"
    }
    else {
        // console.log("Non sei registrato");
        // document.getElementById("email").innerHTML = ("Non sei iscritto");
    }
}

if (check == true) {
    document.getElementById("email").innerHTML = ("Sei iscritto");
    console.log("Sei registrato");
}
else {
    document.getElementById("email").innerHTML = ("Non sei iscritto");
    console.log("Non sei registrato");
}

// for (let c = 0; email != utentiRegistrati[c] && c <= utentiRegistrati.length; c++) {
//     if (email == utentiRegistrati[c]) {
//         console.log("Sei registrato");
//         document.getElementById("email").innerHTML = ("Sei iscritto");
//         // utentiRegistrati.push(email); Funziona in parte, scrive infinite volte "funziona"
//     }
//     else {
//         console.log("Non sei registrato");
//         document.getElementById("email").innerHTML = ("Non sei iscritto");
//     }
// }


// Non funziona innerhtml con getElement con class
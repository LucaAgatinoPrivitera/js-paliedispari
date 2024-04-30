/*
let parolaUtente = prompt("inserisci la parola");
let risultato;


function palindromo(parolaUtente) {
    parolaUtente = parolaUtente.toLowerCase();
    parolaUtenteInvertita = parolaUtente.split().reverse().join();

    if (parolaUtente == parolaUtenteInvertita) {
        risultato = document.getElementById("parole").innerHTML = "Parola Palindroma :D";
        console.log(risultato);
        return risultato;
    }
    else {
        risultato = document.getElementById("parole").innerHTML = "Parola non Palindroma D:";
        console.log(risultato);
        return risultato;
    }
}

palindromo(parolaUtente); //Funziona e non, mi da sempre palindromo
*/





//Qui problema del loop
//Dadi

let dadoTipo = prompt("Pari o dispari?");


while (dadoTipo != "pari" && dadoTipo != "dispari") {
    dadoTipo = prompt("Pari o dispari?");
}

let dadoCPU = 0;
dadoUtente = document.getElementById("dadi");
let dadoUser = 0;

document.getElementById("dadi").addEventListener("click", function dadibot() {
    console.log("Luca è stato qui", dadoUser)
    while (dadoUser < 1 || dadoUser > 5 || isNaN(dadoUser)) { //problema ora funziona, non dovevo usare && ma ||
        // while(dadoUser<0 && dadoUser>5){
        dadoUser = prompt("Inserisci il numero del tuo dado tra 1 e 5");
        console.log(dadoUser)
    }

    dadoCPU = Math.floor(Math.random() * 6);
    dadoUtente.innerHTML = (`Il tuo dado è: ` + `${dadoUser}` + `, mentre quello del PC è: ` + `${dadoCPU}`)
    let dadoRisultato = dadoUser + dadoCPU;





    if (dadoRisultato % 2 == 0) {
        let dadoRisultatoFinale = "pari";
    }
    else {
        let dadoRisultatoFinale = "dispari";
    }
    return dadoRisultato;


    if (dadoTipo == dadoRisultatoFinale) {
        dadoUtente.innerHTML += (`<br /> Hai vinto`);
    }
    else {
        dadoUtente.innerHTML += (`<br /> Hai perso`);
    }
}


)


if (dadoRisultato % 2 == 0) {
    let dadoRisultatoFinale = "pari";
}
else {
    let dadoRisultatoFinale = "dispari";
}

if (dadoTipo == dadoRisultatoFinale) {
    dadoUtente.innerHTML += (`<br /> Hai vinto`);
}
else {
    dadoUtente.innerHTML += (`<br /> Hai perso`);
}
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
document.getElementById("dadi").addEventListener("click", function () {
    dadoUser = prompt("Inserisci il numero del tuo dado");
    while (dadoUser < 1 /*&& dadoUser > 5*/) { //problema non funziona
        // while(dadoUser<0 && dadoUser>5){
        dadoUser = prompt("Inserisci il numero del tuo dado tra 1 e 5");
    }
}
)

document.getElementById("dadi").addEventListener("click", function dadibot() {

    while (dadoUser < 1 && dadoUser > 5) { //problema non funziona
        // while(dadoUser<0 && dadoUser>5){
        dadoUser = prompt("Inserisci il numero del tuo dado tra 1 e 5");
    }

    dadoCPU = Math.floor(Math.random() * 6);
    dadoUtente.innerHTML = (`Il tuo dado è: ` + `${dadoUser}` + `, mentre quello del PC è: ` + `${dadoCPU}`)
    let dadoRisultato = dadoUser + dadoCPU;
    let dadoRisultatoFinale = dadoRisultato % 2;


    if (dadoTipo == "pari"){
        if (dadoTipo == "pari" && dadoRisultatoFinale==0) {
            dadoUtente.innerHTML += (`<br /> Hai vinto`);
        }
        else {
            dadoUtente.innerHTML += (`<br /> Hai perso`);
        }
    }
    else if (dadoTipo == "dispari"){
        if (dadoTipo == "dispari" && dadoRisultatoFinale!=0) {
            dadoUtente.innerHTML += (`<br /> Hai vinto`);
        }
        else {
            dadoUtente.innerHTML += (`<br /> Hai perso`);
        }
    }

}
)
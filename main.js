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


//Dadi
/*
let dadoTipo= prompt("Pari o dispari?");


while (dadoTipo != "pari" && dadoTipo != "dispari"){
    let dadoTipo= prompt("Pari o dispari?46y54ytyjht");
}
*/

//Unic bloccone
dadoUtente = document.getElementById("dadi");
dadoUtente.addEventListener("click");
let dadoUser = prompt("Inserisci il numero del tuo dado");
while (dadoUser < 1 && dadoUser > 5) {
    // while(dadoUser<0 && dadoUser>5){
    dadoUser = prompt("Inserisci il numero del tuo dado tra 1 e 5");
}



//Questi tre sono collegati, da sistemare però
let dadoCPU = 0;
dadoUtente = document.getElementById("dadi");
document.getElementById("dadi").addEventListener("click", function dadibot() {
    dadoCPU = Math.floor(Math.random() * 6);
    return dadoCPU;
});


const dado1 = document.getElementById("dado-1");
const dado2 = document.getElementById("dado-2");

const numeroCasuale = Math.floor(Math.random() * 6);
const numeroCasuale2 = Math.floor(Math.random() * 6);


console.log(numeroCasuale)
console.log(numeroCasuale2)

dado1.append(numeroCasuale);
dado2.append(numeroCasuale2);

console.log(typeof dado1)
console.log(typeof dado2)

const user = parseInt(numeroCasuale);
const cpu = parseInt(numeroCasuale2);

if (user > cpu) {
    document.getElementById("esito").innerHTML = ("Hai vinto!");
}
else {
    document.getElementById("esito").innerHTML = ("Hai perso!");
}


// Non funziona innerhtml con getElement con class
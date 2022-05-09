
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  };

function evenOdd(num){
    if(num%2==0){
        return "pari";
    }
    else{
        return "dispari";
    }
}

const choseUser = prompt("inserisci pari o dispari");

const numberPC = getRndInteger(1, 5);

const numberPerson = Number(prompt("Inserisci un numero tra 1 e 5"));

const numbersSum = numberPC + numberPerson;

const result = evenOdd(numbersSum)

if (result == choseUser){
    console.log("Hai vinto");
}

else {
    console.log("Hai perso");
}

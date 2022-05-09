let i = 0;

while(i < 1){

    let numberPerson = Number(prompt("Inserisci un numero tra 1 e 5"));

if(numberPerson <= 5 && numberPerson > 0){
    i++;
}

};


const min = 0;
const max = 5;


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  };

const numberPC = getRndInteger(min, max);

const numbersSum = numberPC + numberPerson;

console.log(numbersSum);

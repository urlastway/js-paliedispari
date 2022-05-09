let word = String(prompt("Inserisci una parola"));

const reverseWord = wordRereverse(word);


if(word == reverseWord){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  }
  
function wordRereverse(str){
  let strReverse = str.split('').reverse().join('');  
  return strReverse;
}
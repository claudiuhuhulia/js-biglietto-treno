console.log('JS-OK')
/* 
0. colleghiamo elemento dal DOM
1. chiediamo i dati all'utente 
2. calcola il prezzo totale del viaggio
    - 0.21€ al km
    - sconto 20% ai minorenni
    - sconto 40%  over 65
*/

const price = document.getElementById('price');
console.log(price);


const km=parseInt(prompt('Inserisci i km che intendi percorrere', 15));
console.log(km);

const age=parseInt(prompt('Inserisci la tua età', 25));
console.log(age);

let travelprice=km * 0.21;
console.log(travelprice);
let travelpricefull= km * 0.21;

if(age < 18){
    travelprice=travelprice * 80 / 100
}
console.log(travelprice)

 if(age >= 65){
    travelprice=travelprice * 60 / 100
}
console.log(travelprice)


price.innerText= travelprice.toFixed(1) + "0€";


const agedom= document.getElementById('age');
const kmdom= document.getElementById('km');
const fullprice=document.getElementById('int');

console.log(kmdom);
console.log(agedom);

agedom.innerText = age;
kmdom.innerText= km + 'km';
fullprice.innerText=travelpricefull.toFixed(1) + "0€";

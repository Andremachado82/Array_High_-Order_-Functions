// MAP
// não vai alterar meu objeto
// vai retornar um novo objeto, 
//RESPEITANDO o tamanho do objeto original

const { passengers } = require('../data');

//1. Quantos anos ele tem?
const NewPassenger = passengers.map(passengers => {
  return `${passengers.name} tem ${2019 - passengers.birthYear} anos`;
});

console.table(NewPassenger);


//2. Encontre o nome palíndromo.

const founds = passengers.map(passengers => {
  const reverseName = [].map
    .call(passengers.name, letter => letter)
    .reverse()
    .join('');

  if(reverseName.toLowerCase() === passengers.name.toLowerCase()) return `this is palindromo ${passengers.name}`;
});

console.log(founds);
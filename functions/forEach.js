// FOREACH 
//não é imutável
//não retorna um novo objeto
const { passengers } = require("../data");

//1. Adicione a idade (age) para cada pessoa.

passengers.forEach(passengers =>{
  passengers.age = 2019 - passengers.birthYear;
});

console.table(passengers);

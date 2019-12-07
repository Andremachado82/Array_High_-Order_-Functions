// FIND imutável
const { passengers } = require ("../data");

//1 . Encontre o passageiro de nome Enzo.

const Enzo = passengers.find(
  passengers => passengers.name.toLowerCase() === 'enzo');

  console.log(Enzo);
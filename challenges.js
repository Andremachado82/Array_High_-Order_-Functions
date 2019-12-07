//CHALLENGES

const { childrenAge, mailList, shopCart } = require("./data");

//1. Adicione o ano de nascimento das crianças para cada elemento do array.

const year = childrenAge.map(child => {
  return {
    age: child,
    birthYear: 2019 - child
  }
});

console.table(year);

const children = childrenAge.reduce((list, age) => {
  list.push({
    age, 
    birthYear: 2019 - age
  });
  return [...list]; // spread
}, []);

console.table(children);

//2. Crie um array somente com os domínios da lista de email

const domains = mailList.map(mail => {
  const mailArray = mail.split('@');
  return mailArray[1];
});

console.table(domains);

//3. Encontre o maior preço dos produtos abaixo de 100 reais

const bellow100 = shopCart
.filter(product => product.unitPrice <= 100 )
.sort((a , b)=> b - a ) [0];

console.table(bellow100)

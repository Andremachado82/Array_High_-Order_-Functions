// FILTER
//criar um novo array
const { childrenAge, mailList } = require("../data")


//1. crianças entre 2 - 11 anos
//imutabilidade
const childrenFiltered = childrenAge.filter(
  element => element >= 2 && element<= 11  
);

console.table(childrenFiltered);


//2. Emails rocketeseat.com.br

//Primeira opção, opção mais antiga

// var filteredRocketseatMails = [];
// for (var i=0; i < mailList.length; i++) {
//   if (mailList[i].includes("@rocketseat.com")){
//     filteredRocketseatMails.push(mailList[i])
//   }
// }


// Opção com arrow function

const filteredRocketseatMails = mailList.filter(mail => 
  mail.includes("@rocketseat.com")
  );

console.table(filteredRocketseatMails);
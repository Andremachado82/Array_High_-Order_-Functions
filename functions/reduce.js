//REDUCE
//reduz um objeto a um valor único
//imutável
//reotrna o que for solicitado

const { shopCart } = require('../data');

//1. Qual o valor total desse carrinho de compra?

const totalValue = shopCart.reduce(
  (acc, item) => acc + item.quantity * item.unitPrice, 0  
);

console.log(totalValue);

//2. Quantidade total de produtos do carrinho?

const totalProducts = shopCart.reduce(
  (totalProduct, product) => {
    return totalProduct + product.quantity;
  }, 0 );

console.log(totalProducts);


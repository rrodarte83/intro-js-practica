const firstProductName = 'T-shirt';
const firstProductPrice = 15;
const firstProductQuantity = 2;

const capProductName = 'Cap';
const capProductPrice = 35;
const capProductQuantity = 2;

const firstProductTotalPrice = firstProductPrice + firstProductQuantity;
const secondProductTotalPrice = capProductPrice + capProductQuantity;

/**
 * 1. definicion
 * 2. lo que retorna
 * parametros
 * 
 */


saludo();
//greeting();

function saludo (){  
    console.log('Hola aca es un saludo');
}


// arrow function
const greeting  = () => {
    console.log('Hola aca es un greeting');
}


const calculo = (precio, quantity) =>{
    const result = precio * quantity;
    return result;
};

const resultadoFirstCalculo = calculo(firstProductPrice, firstProductQuantity);
console.log("Ese es el calculo:", resultadoFirstCalculo)


const calcOneLine = (price = 0, quantity = 0) =>(
    price * quantity
);





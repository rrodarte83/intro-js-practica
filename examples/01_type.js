
const product = 'T-shirt';
const quantity = 10;

//  Variable will not change at all
const secondProduct = 'Cap';

// camelCase es la mas usada


/* 
var :: no se usa tanto y es mala pratica


son las mas usadas
const : variables constantes / es muy comum en JS poner como const y non como let.

let: puedo cambiar 

null:
undefined:

*/

let secondProductQuantity = 20;

const name = "Rodrigo M Rodarte";


secondProductQuantity = 30;

let message = "Hola keepcoding - Yo he empezado el bootcamp";

template = `
Castellano
Zapatos
10 camisas`;

message = `hola hola  ${template} KeepCoding `;

console.log (message)

const discount = 2.25;
const soldOut = false;

console.log(typeof(discount))
console.log(typeof(soldOut))


let stock = null;
const noProduct = undefined;


console.log(typeof stock, typeof noProduct)


stock = Infinity;



/*
Operadores 

*/



const firstProductName = 'T-Shirt';
const firstProductPrice = 15;
const firstProductQuantity = 2;


const secondProductName = 'Cap';
const secondProductPrice = 35;

const thirdProductQuantity = 55;

const suma = secondProductPrice + thirdProductQuantity;

console.log (" Hicimos la soma", suma);
console.clear();



console.log(true + true); // suma ya que true es 1
console.log(20%3);
console.clear();


/* 
Comparaciones
*/

console.log(12 == 12); // true
console.log("12" == 12); // true - pero malo
console.clear();

/* 
Comparaciones e um triple igual, no con dos pero con 3
*/

console.log( "12" === 12); // Correcto
console.log( "12" !== 12); // Correcto

console.log(1<=2);
console.clear();

const inValidPrice = NaN;

/* 

Nan en

*/

console.log(isNaN(inValidPrice))

/* 

&& AND y 
|| OR 0 
??
*/

console.log()

console.log(null === null);
console.log(undefined === undefined);

console.clear();

console.log('12' === ' 12');


const thirdProduct = 'Pants', thirdProductPrice = 12, fourhtProductQuantity = 1;

const isOnline = true;
console.log(!isOnline);
console.clear()


const priceFinal = 100;
const priceFinalAgain = 100;

const productoSpain = 'Munich';


const sameQuantity = priceFinal === priceFinalAgain;



if ((priceFinal > priceFinalAgain)) {
    console.log(` si, yes mayor el producto ${productoSpain} `);
    const name_rodrigo = 'Rodrigo Meneses Rodarte';
}else if (priceFinal < priceFinalAgain){
    console.log("No, no yes mayor");
} else {
console.log("Ningum, es igual");
}

 


/*

condiçao ternaria puro se y somente um if

*/

console.clear();

mensaje = 10 < 20 ? 'true rodamos o primeiro y es verdade' : 'false';

console.log(mensaje);
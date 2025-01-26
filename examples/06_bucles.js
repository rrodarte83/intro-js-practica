// Bucles, com los metodos de los arrays.
/**
 * for (), while
 * 
 */

const products = ['Cap','T-shirt','Shoes','abrigo','abrigo_t' ,'abrigo_C', ];

const showProduct = (product) =>{
    console.log(`Producto: ${product}`);
}


for (let index = 0; index < products.length; index++){
    showProduct(products[index]);
}

console.log('######################');

let count = 0;

while (count < products.length){
    showProduct(products[count]);
    count++;
}
console.log('Final Script');

console.clear();

for (const product of products){
    console.log(" For const", product);

}
console.clear();


const numbers = [1,2,3,4,5];
let doubleNumbers = [];

for(const number of numbers){
    doubleNumbers = [...doubleNumbers, number*2];
}
console.log('Double Numbers',doubleNumbers);
console.clear();

const users = [
    'rodrigo.rodarte@keepcoding.com',
    'ellen.ricci@keepcoding.com',
    'anapaula@gmail.com'
]

let hideEmailsKeepcoding = [];
let KeepcodingUsers = [];


for (const user of users) {
    if (user.includes('@keepcoding')){
        KeepcodingUsers = [...KeepcodingUsers, user];
        hideEmailsKeepcoding = [...hideEmailsKeepcoding, user.replace('@keepcoding.com', '****')];
    }else{
        hideEmailsKeepcoding = [...hideEmailsKeepcoding, user];
    }
}
console.log(hideEmailsKeepcoding, KeepcodingUsers);
console.clear();


let evenNumbers = []; // Array para almacenar números pares
let oddNumbers = [];  // Array para almacenar números impares
let excludedElements = [];

const numbersEjercicio = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, '', false, NaN];


for (const elements of numbersEjercicio) {
    console.log(typeof(elements))
    if (isNaN(elements) || elements === false || elements === null || elements === ''){
        excludedElements = [...excludedElements, elements];
    }else if (elements %2 === 0){
        evenNumbers = [...evenNumbers, elements];
    }else if (elements %2 !== 0){
        oddNumbers = [...oddNumbers, elements];
    }
}

console.log('Excluded elements: ', excludedElements);
console.log('Array para almacenar números pares: ', evenNumbers);
console.log('Array para almacenar números impares: ', oddNumbers);
console.clear();

// Arrays de arrays


const productsDisponiblesPromo = [
    [
        'T-Shirt',
        2,
        'Descuento 2%'
    ], //promo 1
    
    [
        'cap',
         3,
        'Tercera gorra gratis'
    ] // promo 2

];



console.log(productsDisponiblesPromo[0][0]);
















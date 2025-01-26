// Objeto en JS, todo es objeto en JS


const products = ['T-shirt', 'shoes', 'TV', true, null, 123];
const prices = [1,2,3,40];
products.push("PS5")
products.unshift("PS4")

//console.log(products, products.length)

// anadir a lista
// borrar
// modificar su ordem
// acesso a sus elementos

const lista = [];

/**
 * Paso 1: Crea un array vacío llamado "numeros"
Paso 2: Agrega los números del 1 al 5. Pon entre el número 3 y 4 la palabra keepcoding
Paso 3: Imprime el contenido del array "numeros" en la consola
Paso 4: detecta con código si dentro del array está la palabra keepcoding. Si está imprime el mensaje este array no solo tiene números
Paso 5: Agrega el número 10 al inicio del array "numeros"
Paso 6: Imprime el contenido del array "numeros" en la consola
Paso 7: Utiliza el método indexOf para encontrar el índice de la palabra keepcoding
Paso 8: Elimina la palabra keepcoding a partir del índice anterior
Paso 9: Imprime el contenido del array "numeros" en la consola
Paso 10: Imprime la longitud del array "numeros" en la consola
 * 
 */

const numeros = [];
numeros.push(1,2,3,4,5)


numeros.splice(3, 0, 'keepcoding');
console.log(numeros);

numeros.includes('keepcoding') ? console.log("este array no solo tiene números") : console.log("este array solo tiene números");

numeros.unshift(10)

console.log("Adding values:", numeros);

const index = numeros.indexOf('keepcoding');
console.log("This is the index:", index)
numeros.splice(index, 1);

console.log("Eliminando a palavra keepcoding", numeros, numeros.length)

/*
Importante
*/


const productsUser1 = ['TV', 'CAR', 'PC', 'PS5'];
let productsUser2 = [...productsUser1];


const addProduct = (newProduct, productList) =>{
    const newProduclist = [...productList]; // haciendo la copia correcta.
    newProduclist.push(newProduct);
    return newProduclist;
}

console.clear();

console.log(addProduct('Cap', productsUser2));
console.log(addProduct('T-Shirt', productsUser2));
console.log('Intacto Prodcut User 2', productsUser2)


productsUser2 = addProduct('PIP', productsUser2);
productsUser2 = addProduct('PIP', productsUser2);
productsUser2 = addProduct('PIP', productsUser2);
console.log('Final:', productsUser2);

/**
 * Crea un programa que determine si un usuario puede recibir una promoción basada en su selección de productos.

Instrucciones:

Crea dos variables que representen el nombre de un producto seleccionado por el usuario y la cantidad. (En nuestro caso será usando prompt).

  
const selectedProduct = prompt('Ingresa el nombre del producto');
const selectedQuantity = parseInt(prompt('Ingresa la cantidad'));


Usa operadores lógicos para determinar si el usuario puede tener para una promoción especial:
Si selecciona un "T-shirt" y la cantidad es 2 o más, el mensaje será "¡Recibes un 10% de descuento en la segunda camiseta!".
Si selecciona un "Cap" y la cantidad es 3 o más, el mensaje será "¡Obtén una gorra gratis por la compra de 3!".
Si no cumple ninguna de las condiciones, el mensaje será "No hay promociones para esta selección".

Muestra el mensaje en un único console.log. 

 * 
 * 
 * 
 */

let selectedProduct = prompt('Ingresa el nombre del producto');
let selectedQuantity = parseInt(prompt('Ingresa la cantidad'));

selectedProduct = selectedProduct ?? 'No product selected'
selectedProduct = selectedProduct.trim().toLowerCase();

selectedQuantity = isNaN(selectedQuantity) ? 0 : selectedQuantity;

console.log(typeof(selectedQuantity), selectedQuantity)


const calcPromotion = (selectedProd, quantity) =>{

    let mensaje_intern = 'No hay promociones para esta selección';

    if (selectedProd === 't-shirt' && quantity >=3){
        mensaje_intern = '¡Recibes un 10% de descuento en la segunda camiseta!';
    }else if (selectedProd === 'cap' && quantity >=2){
        mensaje_intern = '¡Obtén una gorra gratis por la compra de 3!';
    }
    return mensaje_intern;
};
const mensajeFinal = calcPromotion(selectedProduct, selectedQuantity);
console.log(mensajeFinal)


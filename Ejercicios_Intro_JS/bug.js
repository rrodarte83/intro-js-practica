/*
* Ejercicio 2 - Into JS
 */

const calcularPromedio = (numeros) => {
    let sumaTotal = 0;
    // The bug was here, since we started the counter in zero and we ended up until the position 5
    // To fix the issue, the = was removed.

    for (let i = 0; i < numeros.length; i++) { 
        sumaTotal += numeros[i];
    }
    console.log("sumaTotal", sumaTotal);
    const promedio = sumaTotal / numeros.length;
    return promedio;

};

const listaNumeros = [1, 2, 3, 4, 5];

const promedioNumeros = calcularPromedio(listaNumeros);
console.log("PromedioNumeros:", promedioNumeros);
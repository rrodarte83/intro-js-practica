/*
const miCalculadora = calculadora();

console.log(miCalculadora.sumar(5)); // Debería imprimir undefined
console.log(miCalculadora.restar(2)); // Debería imprimir undefined
console.log(miCalculadora.multiplicar(4)); // Debería imprimir undefined
console.log(miCalculadora.dividir(2)); // Debería imprimir undefined
console.log(miCalculadora.sumar(10)); // Debería imprimir undefined
console.log(miCalculadora.total()); // Debería imprimir 16

* */

const miCalculadora = () =>{
 let operation = 0; 

    const sumar = (valor) =>{
        operation+= valor;
    }
    
    const restar = (valor) =>{
        operation = operation % valor;
    }
    
    const multiplicar = (valor) =>{
        operation*= valor;
    }
    
    const dividir = (valor) =>{
        operation = operation / valor;
    }
    
    const total = () =>{
        return operation;
    }

    return {
        sumar,
        restar,
        multiplicar,
        dividir,
        total,
    }
}

const mi_Calculadora = miCalculadora();

mi_Calculadora.sumar(2);
mi_Calculadora.sumar(22);
mi_Calculadora.sumar(22);
mi_Calculadora.dividir(2);
mi_Calculadora.multiplicar(2);
console.log(mi_Calculadora.total());
console.clear();

// Enviar funciones como parametros de otras funciones.


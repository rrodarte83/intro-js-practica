export const miCalculadora = () =>{
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

   export const variable = 'hola Testing';
   const utilFile = 'Name - Rodrigo';

   export default utilFile; // solo se pode hace una vez
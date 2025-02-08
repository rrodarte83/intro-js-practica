/*
* Ejercicio 1
Rodrigo Meneses Rodarte
 */

const usuario = {
    Nombre: 'Rodrigo',
    Appellidos: 'Rodarte',
    temasBootcamp: [
        {
            temas: 'Node.js',
            fecha: '2025-01-25'
        }, 
        {
            temas: 'Git',
            fecha: '2025-01-10'
        }, 
        {
            temas: 'React',
            fecha: '2025-02-10'
        }],
    busquedaActive: true
};

for (const element of usuario.temasBootcamp) {
    if (element.temas === 'React'){
        console.log(" Fecha del inicio de React", element.fecha);
    }    
}



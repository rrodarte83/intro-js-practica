/*
T enemos otro error que nuestro cliente nos pide arreglar. El cliente está pidiendo un usuario
y nos dice que está usando el id correcto el 1. Pero que siempre le da undefined. Nos ha
pasado el código que tenemos que revisar y arreglar. Para este problema crear un archivo
llamado bugAsync.js con la solución.
 */


function obtenerUsuario(id) {
    let usuario;
    return new Promise ((resolve) => { 
        setTimeout(() => {
            if (id === 1) {
                usuario = { id: 1, nombre: 'John Doe' };
                resolve(usuario);
            }}, 2000);
        
    });
};


async function asyncCall() {
    console.log('calling');
    const usuario = await obtenerUsuario(1);
    console.log(usuario);
  }

  asyncCall();
const streetNumber = '';
const shopNumber = streetNumber || 'No incluido';


const str = 'Hola mundo';
//console.log(str.length)

str.includes('Hola')


let username = '   KEVIN';
let password = 'KeepCoding   ';
let email = 'rodrigo.rodarte@gmail.com';

username = username.trim().toLowerCase(); // remove spacios


password = password.trim().toLowerCase(); // remove spacios

console.log(username, password);

if (username === 'kevin' && password === 'keepcoding'){
    console.log('Tienes acceso');
}else{
    console.log('No Tienes acceso');
}

email = email.replace('rodrigo.rodarte', 'roo');
console.log(email)

const  promptPrice = prompt
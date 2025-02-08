const numbers = [1,2,3,4,5];

// map and filter


let resposta = [];
let resposta_map = [];

resposta = numbers.filter( (number) =>{
    return (number > 2)
});

console.log(resposta)

let map = 0;

resposta_map = numbers.map( (number) =>{
    map = (number + 2)*3;
    return map

});

console.log(resposta_map);
console.clear();



const books = [
    {title: '1984', author: 'Rodrigo', year: 1949},
    {title: '1983 - Black Doves', author: 'Rodrigo M Rodarte', year: 2995},
    {title: '200- Codigo Da Vinci', author: 'Dan Brown', year: 2000}

];

const titles2000 = books.filter( book => book.year > 2000)
.map( book => book.title)
.join('Teste');

console.log(titles2000);

/**
 * const numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, '', false, NaN];

const result = foo(numbers) // no devolver result sino un destructuring con par e impar
 * * */


const numbersOddEven = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, '', false, NaN];


const paresImpares = (numbers) => {

const validNumbers = numbers.filter((num => typeof num === 'number' && !isNaN(num))); 

const pares = validNumbers.filter(number => number % 2 === 0);
const impares = validNumbers.filter(number => number % 2 == 1);

return [pares, impares]

}

const [pares_Teste, imapares_Teste] = paresImpares(numbersOddEven);
console.log(pares_Teste);
console.log(imapares_Teste);

const balckDoves = books.find( book => 
    {return book.title === '1983 - Black Doves'});

console.clear();
console.log(balckDoves);

const accounts = [
    {
        user: 'Kevin',
        money: 1000,
    },
    {
        user: 'Rodrigo',
        money: 122222
    },
];



// Error de mutabilidade

console.clear();
const user1 = accounts.find(account => account.user === 'Rodrigo');
console.log(user1);

user1.money = user1.money + 10;
console.log(`Money wigh bonus: ${user1.money}`);


const renderAccounts = accounts.map(account => {
    return `${account.user}: ${account.money}$`
}).join('\n');

console.log(renderAccounts)
console.clear();



let books_Final = [
    {title: '1984', author: 'Rodrigo', year: 1949},
    {title: '1983 - Black Doves', author: 'Rodrigo M Rodarte', year: 2995},
    {title: '200- Codigo Da Vinci', author: 'Dan Brown', year: 2000}

];

books_Final = books_Final.map(book => {
    if (book.title === '1983 - Black Doves'){
        return{...book, stock: 0}
    }
    return {...book, stock: 10}
});

console.log(books_Final);
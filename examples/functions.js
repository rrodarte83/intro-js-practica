
const sum = (operation, ... params) => {
// give me all the params in an array.

let result = 0;

for (const param of params) {
    if (operation === 'suma'){
        result += param;
    }else if (operation === 'resta'){
        result -= param;
    }
}
return result;
}

//console.log(sum('suma',1,2,3,4,5,6));
//console.log(sum('resta',1,2,3,4,5,6));


// cierres

const counter = () => {

    let count = 0;
    
    const increment = () => {
        count = count + 1;
    };

    const log = () => {
        console.log(count);
    };

    return {
        increment,
        log,
    };

}

const player1Score = counter();

player1Score.increment();
player1Score.increment();
player1Score.increment();

player1Score.log();
console.clear();

const products = [
    {
     id: 'p001'   , name: 'T-Shirt', price: 20, quantity: 2
    },

    {
    id: 'p002'   , name: 'Cap', price: 5, quantity: 1

    },

    {
        id: 'p003'   , name: 'Jeans', price: 40, quantity: 1
    }
]


const cart = () =>{
 
    let products = [];

    const addProduct = (product) => {
        products = [...products, product];
    };

    const listProducts = () => {
        return products;
    };
    
    return {
        addProduct,
        listProducts
    };
    
}

const user1 = cart();
user1.addProduct(products[1]);


const user2 = cart();

for (prod  of products) {
    if (prod.price <= 20){
        user2.addProduct(prod);
    }
}


console.log(user1.listProducts());
console.log(user2.listProducts());
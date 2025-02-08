console.log("Ejemplo objeto");

// Objetos

const firstProductName = 'T-shirt';
const firstProductQuantity = 12;
const firstProductPrice = 15;


const secondProductName = 'Cap';
const secondroductQuantity = 12;
const secondProductPrice = 15;


const firstProduct = {};
console.log(firstProduct, typeof(firstProduct));

firstProduct.name = 'T-shirt';
firstProduct.quantity = 15;
firstProduct.precio = 25;

const id = 123455;

const secondProduct = {
    name: 'Cap',
    quantity: 13,
    precio: 26,
    'country-city':'ES/Madrid',
    [id]:'Test' 
};

console.log("ID", id);

secondProduct.name = 'Rodrigo';
secondProduct['name'] = 'Rafa';

console.log(secondProduct["country-city"]);
console.log(secondProduct[id]);

const thirdProduct = {
    name: 'shoes',
    quantity: 12,
    price: 60,
    sizes: ['M','L','XL'], //
    atributes: {
        color: 'red',
        branc: 'nike'
    }, 
};

// Front = poco classes.
// Backend = poco classes tambien en el framework.
// Un poco del panorama que tenemos en el dia a dia.
console.log(thirdProduct.sizes.join('-'));
console.clear();

const shows = [
    {
        id: 1,
        name: 'Titanic',
        genres: 'drama'
    },

    {
        id: 2,
        name: 'Titanic_2',
        genres: 'drama / suspense'
    },

    {
        id:3,
        name: 'Titanic',
        genres: 'drama__adsfadfad'
    },

    {
        id: 4,
        name: 'Ainda Solo',
        genres: 'drama__adsfadfad'
    },
]

const renderShow = (show) =>{
    return `
    <h2>${show.name}</h2>
    <p>${show.genres}</p>
    `;
}

let template = '';

for (const show of shows) {
    console.log("show", show)    
    template = template + renderShow(show);
}

console.log(template);
console.clear();



let list_of_books = [];



  console.log(list_of_books);
  console.clear();

 const user = {
    email: 'rodrigo.r@gmail.com',
    role:'USER',
    app: 'keepcoding',
    modules: ['js','html','react'],
    info: {
        name: 'user',
        surname:'surname'
    }
 }

 console.clear();

  // 1 - JSON.stringify / parse

const admin = JSON.parse(JSON.stringify(user));

// 2 - spread operator - tienes que hacer en cada nivel
const admi = {... user};

console.log(admi)

// 3 esta eh mucho mejor por se decir
// Copia de objetos

const administrator = structuredClone(user);
user.info.name = "digao";
administrator.email = 'ellenricci@gmail.com';
console.clear();

// Destructuring - Es como una otra forma de acceder al objeto deestructurando
const { year, author, rating: { rottenTomatoes } } = {
    title: 'TW', 
    author: 'Step Mayher', 
    year: 2005,
    rating: {
        rottenTomatoes: 6,
        filmaffinity: 6,
    },
};

console.log(year, author, rottenTomatoes);

// Destructuring de arrays tambien - Es como una otra forma de acceder al objeto deestructurando
const [book1, book2, book3, book4] = [
    { 
        title: '1984',  
        author: 'George Orwell', 
        year: 1949 
    },
    {
      title: 'One Hundred Years of Solitude',
      author: 'Gabriel García Márquez',
      year: 1967,
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      author: 'J.K. Rowling',
      year: 1997,
    },
    { 
        title: 
        'The Da Vinci Code', 
        author: 'Dan Brown', 
        year: 2003 },
    { 
        title: 'Twilight', 
        author: 'Stephenie Meyer', 
        year: 2005 },
    { 
        title: 'The Hunger Games', 
        author: 'Suzanne Collins', 
        year: 2008 },
  ];

  console.clear();

  const [key, value, hey] = ['example', 12, 34, 30, 38 , 36, 35 ];

  console.log(hey);

  const getAdminUser = () => {
    return {
        name: 'admin',
        role: 'ADMIN',
        email: 'test@admin.com'}
  }

  const {name, role, email} = getAdminUser();

  console.log(email);
  console.clear();




  const csvProducts = 'T-shirt,10,Amazon\n Cap,5,Google\n Pants,15,Amazon\n Shoes,20,Google';

  const processCSV = (csv) => {

    let products = [];

    const lines = csv.split('\n');
   // console.log (lines);

    for (const line of lines) {
      const [name, precio, store] = line.split(',');
      products = [... products, {
        name, 
        price: parseInt(precio),
        store,
      }] 
    }
    return products;
  }

  const productos  = processCSV(csvProducts);
  console.log("Productos", productos);
  

console.clear();

const module = {
    bootcamp: 'keepcoding',
    edicion: 'Web18',
    name: 'General'
};


const module1 = {
    bootcamp: 'keepcoding',
    edicion: 'Web18',
    name: 'General'
};


const {edicion, ...module3} = {...module};
console.log(module3);
console.log("Rodrigo meneses rodarte");







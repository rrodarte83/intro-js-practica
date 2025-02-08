/*
* 3.1 Ejercicio
*/

const input1 = [
    'Downloads',
    'Videos',
    'capture',
    'mp4',
]
    
// create your function here
//yourFunction(input1); // 'Downloads/Videos/capture.mp4'
    
    const input2 = [
    'CodinGame',
    'python',
    'py',
];
    
//yourFunction(input2); // 'CodinGame/python.py'
    
    const input3 = [
    'programming',
    'languages',
    'easy',
    'beginner',
    'useful',
    'pythonstuff',
    'py',
    ]
//yourFunction(input3);
// 'programming/languages/easy/beginner/useful/python

const joinBySeparator = (input) => {
    return input.join('/');
} 

console.log(joinBySeparator(input1));
console.log(joinBySeparator(input2));
console.log(joinBySeparator(input3));
console.log("\n");

/*
* 3.2 Ejercicio
*/

const input = 10; // '1-0'
const secondInput = 1; // '1'
const thirdInput = 11234; // '1-1-2-3-4'


// create your function here

const transform = (input) =>{
    let str = input.toString();
    let text = '';
    for (const char of str) {
        text = text.concat(char);
        text = text.concat('-');
    }
    return text.slice(0,-1);
};    

console.log(transform(input));
console.log(transform(secondInput));
console.log(transform(thirdInput));
console.log("\n");

/*
* 3.3 Ejercicio
*/
const input1_3 = 'string'; ; // '6 gnirts'
const input2_3 = 'variable'; // '8 elbairav'
const input3_3 = 'pointer'; // '7 retniop'


const transformInvert = (input_invert) => {
    const ans = input_invert.split('').reverse().join('');
    return ( input_invert.length.toString() + " "+ ans);
}

console.log(transformInvert(input1_3));
console.log(transformInvert(input2_3));
console.log(transformInvert(input3_3));

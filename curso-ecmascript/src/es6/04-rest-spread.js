// Arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;

console.log(a, b);


// Objects

let user = { username: 'JuanSe', age: 21 };
let { username, age } = user;
console.log(username, age); 


// Spread operator

let person = { name: 'Juan Sebastian', age: 21 };
let country = 'CO';

let data = {...person, country};
console.log(data);


// Rest 

function sum( num, ...values ) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
} 

sum(5, 1, 2);
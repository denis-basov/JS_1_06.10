// let age = 11;   
// console.log(age);

/*
// получить заготовоко
let head1 = document.querySelector('h1');
head1.style.color = 'red';
console.log(head1);
*/

// console.log(1+8);

/*
let fruits = 'apple';
let animals = 6;

console.log(fruits + ' ' + animals);*/
/*
let userName = 'д\'Артаньян';
console.log(userName);*/

// console.log( 0/0 );

// console.log('cat' - 5);
// NaN - not a number

// console.log(true + 5);
// console.log(undefined + null);

// console.log(2**3);

/*
let userName = 'Anna';
let btn = 'button';
let bigBlackBtn = 'Большая черная кнопка';
let head = document.getElementById('head-1');
console.log(head);

userName + btn;

let var1 = userName + btn;
console.log(var1);*/

/*
let cats = 3;

cats = cats + 2;
cats += 2;

console.log(cats);*/

/*
let cats = 3;

cats = cats + 1;
cats += 1;
// cats++;
cats--;

console.log(cats);*/

// console.log(Math.max(1,5,8,3));

/*
const students = 11;
students++;
console.log(students);*/
/*
let userName = 'bob';
userName = 1;*/

/*
let students = 11;
console.log(students++);// 11
console.log(students);//12
*/

/*
let userName = 'Bob';
let lastName = 'Doe';
let age = 22;

console.log("My name is, " + userName + ", my last name is "+ lastName + ", i am " + age + " years old!");
console.log(`My name is, ${userName}, my last name is ${lastName}, i am ${age = age + 5} years old!`);*/

/*
let userName = 'Bob';
let lastName = 'Doe';
let age = 22;
let avatar = 'https://images.unsplash.com/photo-1542385262-cdf06b302c2c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';


let output = `
    <div class="user">
        <h2>${userName} ${lastName}</h2>
        <img src="${avatar}" alt="${userName} ${lastName}">
        <p>Age: ${age}</p>
    </div>
`;

document.write(output);
*/

// let age;
// console.log(age);

/*
let userName = '';
console.log(userName.length);


if(userName){ // если имя не пустое
    console.log(`Привет, ${userName}`);
}else{
    console.log('Введите имя');
}*/

/*
let userName = 'Яна';

if(userName.length === 0){ 
    console.log('Введите имя');
} else if (userName.length > 0 && userName.length < 3){ 
    console.log('Имя короткое');
} else {
    console.log('Добро пожаловать');
}
*/

/*
let age = 9;

if(age >= 18){
    console.log('Добро пожаловать');
}else{
    console.log('Вход запрещен');
}

age >= 18 ? console.log('Добро пожаловать') : console.log('Вход запрещен');*/

/*
let isAdmin = false;

let output = `
    <h2>Админ: ${isAdmin ? 'да' : 'нет'}</h2>
`;

document.write(output);*/

/*
let counter = 1;
while(counter < 5){
    console.log(`Счетчик равен ${counter}`);
    counter++;
}
*/

/*
let counter = 1;
while(counter > 5){
    console.log(`Счетчик равен ${counter}`);
    counter++;
}*/

/*
let counter = 10;
while(counter > 5){
    console.log(`Счетчик равен ${counter}`);
    counter--;
}

for( let counter = 10; counter > 5; counter--){
    console.log(`Счетчик равен ${counter}`);
}
*/

/*
for( let counter = 100; counter >= 0; counter -= 10){
    console.log(`Счетчик равен ${counter}`); // 100 90 80 ... 0
}*/

// let fruits1 = 'Бананы';
// let fruits2 = 'Кокосы';
// let fruits3 = 'Апельсины'; 


// массив с фруктами
let fruits = ['Бананы', 'Кокосы', 'Апельсины', 'Котлеты'];
let numbers = [10, 1, 8, 2, 3, 7, 4, 5, 6];

/*
console.log(fruits);
// console.log(fruits[1]);
console.log(fruits.length);

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
*/

// получить сумму элементов массива
// let numbers = [10, 1, 8, 2, 3, 7, 4, 5, 6];
/*

let sum = 0;
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
    sum = sum + numbers[i];
}
console.log(sum);*/

/*
let sum2 = numbers.reduce((acc, val)=> acc+val, 0);
console.log(sum2);*/

/*
for(let i = 0, sum = 0; i < numbers.length; i++){
    sum += numbers[i];
    if(i == numbers.length - 1){
        console.log(sum);
    }
}
*/

// let fruits = ['Бананы', 'Кокосы', 'Апельсины', 'Котлеты'];

// for(let i = 0; i < fruits.length; i++){
//     if(i%2 === 1){ // вывести только нечетные элементы массива
//         console.log(fruits[i]);
//     }
// }

/*
// let fruits = ['Котлеты', 'Бананы', 'Кокосы', 'Апельсины'];
// посмотреть, есть ли в массиве котлеты, если котлет нет, вывести инфо об этом
let isKotletaAvailabel = false;
for(let i = 0; i < fruits.length; i++){
    if(fruits[i] === 'Котлеты'){
        isKotletaAvailabel = true;
        break;
    }
}

isKotletaAvailabel 
    ? console.log('Котлеты найдены') 
    : console.log('Котлеты все съедены');
    */

/*    
// let fruits = ['Бананы', 'Кокосы', 'Апельсины', 'Котлеты'];
for(let i = 0; i < fruits.length; i++){
    if(i%2 === 0){ // вывести только четные элементы массива
        continue;
    }   
    console.log(fruits[i]);
}*/

// let fruits = ['Бананы', 'Кокосы', 'Апельсины', 'Котлеты'];
// for(let fruit of fruits){
//     console.log(fruit);
// }

/*
// объединить масси в строку
let fruitsStr = '';
for(let fruit of fruits){
    fruitsStr += fruit + ', ';
}
console.log(fruitsStr);

// console.log( fruits.join(', ') );

// вывести список фруктов в документ
// let fruits = ['Бананы', 'Кокосы', 'Апельсины', 'Котлеты'];

let output = '<ul class="list"><li>' + fruits.join('</li><li>') + '</li></ul>';
document.write(output);
*/


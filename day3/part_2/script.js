
/*
try{
    getUserInfo();
} catch(error){
    console.log('Ошибка');
    console.dir(error); 
    console.log(error.name);       
    // отправить данные на сервер о том, что нет данных    
}*/

//let fName = 'Иван'; // только кириллица

//let output = `Привет, ${user.fName}`;

/**
 * регулярные выражения
 */

/*
let message = 'Я изучаю JavaScript';
let regExp = /Java/g;
let result = message.match(regExp);
console.log(result);*/

/*
// test()
let regExp = /.+@.+\..+/;
let str = 'test@te';

let res = regExp.test(str);

res ? console.log('Соответствует'): console.log('Не соответствует');
*/

/*
let fName = 'иван';
fName = fName[0].toUpperCase() + fName.slice(1);

console.log(fName);*/

/*
let message = 'Я изучаю JavaScript';
console.log(message.split(' ').reverse().join(' '));*/

/*
let message = 'Я изучаю JavaScript';
console.log(message.split(' ').join('').split(''));*/


/*
let numbers = [6,3,2,5];

let JSONstr = JSON.stringify(numbers);
console.log(JSONstr);

console.log(JSON.parse(JSONstr));*/


/**
 * REST API
 */


/*
async function getData(){
    let responce = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
    let data = await responce.json();

    console.log(data);
    showData(data);
}

getData();


function showData(data){
    document.write(data[0].title);
}*/

/*
let fnameEl = document.querySelector('#fname');
console.dir(fnameEl);

fnameEl.addEventListener('blur', function(){
    console.log(fnameEl.value);
});*/


/**
 * restcountries
 */

/*
let getCountry = async function(country){
    let responce = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    let data = await responce.json();

    console.log(data[0]);
    // document.write(`<img src="${data[23].flags.svg}">`);
}

getCountry('russia');*/
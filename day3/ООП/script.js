// console.log([1,2,3]);

/*
let book = {
    title: 'Питер Пен',
    pages: 221
}
let book2 = {
    title: 'Питер Пен',
    pages: 221
}
*/

/*
// конструктор
let Books = function(parTitle, parPages){
    this.title = parTitle;
    this.pages = parPages;
};

// создаем объекты
let book1 = new Books('Питер Пен', 221);
let book2 = new Books('Война и мир', 4213);

console.log(book1);
console.log(book2);*/


let Books = function(title, pages){
    // свойства
    this.title = title;
    this.pages = pages;

    // методы
    // this.bookInfo = function(tag){
    //     document.write(`<${tag}>Название: ${this.title}, страниц: ${this.pages} шт.</${tag}>`);
    // };
};

// создаем объекты
let book1 = new Books('Питер Пен', 221);
let book2 = new Books('Война и мир', 4213);

// book1.bookInfo('h2');
// book2.bookInfo('p');

// записываем в прототип конструктора метод для вывода инфо об объектах
Books.prototype.bookInfo = function(tag){
    document.write(`<${tag}>Название: ${this.title}, страниц: ${this.pages} шт.</${tag}>`);
};

// console.log(book1);
// book1.bookInfo('h2');
// book2.bookInfo('p');

/**
 * Классы ES6
 */
class Cats{

    constructor(name, color, weight, age){
        this.name = name;
        this.color = color;
        this.weight = weight;
        this.age = age;
    }

    // метод для получения значения name
    getName(){
        return this.name;
    }

    getCatInfo(){
        return `Имя: ${this.getName()}, цвет шерсти: ${this.color}, масса: ${this.weight}, возраст: ${this.age}.`;
    }

}

let barsik = new Cats('Барсик', 'рыжий', 3, 8);
//console.log(barsik);
console.log(barsik.getCatInfo());

/**
 * наследование
 */
class ExcibitionCats extends Cats {
    constructor(name, color, weight, age, priseCount){
        super(name, color, weight, age);// вызываем конструктор родительского окласса
        this.priseCount = priseCount;
    }

    getCatInfo(){
        return `Имя: ${this.getName()}, цвет шерсти: ${this.color}, масса: ${this.weight}, возраст: ${this.age}, количество призов: ${this.priseCount}`;
    }
}

let murka = new ExcibitionCats('Мурка', 'черный', 2, 6, 12);
//console.log(murka);
console.log(murka.getCatInfo());


let cats = [murka, barsik];

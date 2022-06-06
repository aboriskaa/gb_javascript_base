// 1. (это задание делайте по желанию) 
// Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
// мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
// - единицы (в свойстве units)
// - десятки (в свойстве tens)
// - сотни (в свойстве hundereds)
// Например, для числа 45 мы должны получить следующий объект:
// {
// units: 5, //это единицы
// tens: 4, //это десятки
// hundreds: 0, //это сотни
// }
// Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
// необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

// !!!РАСЧИТАНО НЕ ТОЛЬКО НА ТРЕХЗНАЧНЫЕ ЧИСЛА =)))!!!

'use strict';

let x_1 = prompt('Введите число в интервале значений [0, 999]:');
x_1 = Number(x_1);
function makeObjectDischarges(v_1) {
    let objVal = { units: 0, tens: 0, hundreds: 0 }
    if (Number.isInteger(v_1) && v_1 > 0 && v_1 < 1000) {
        let v1_length = String(v_1).length;
        switch (v1_length) {
            case 1:
                objVal.units = v_1;
                break;
            case 2:
                objVal.units = v_1 % 10;
                objVal.tens = Math.floor(v_1 / 10);
                break;
            default:
                objVal.units = v_1 % 10;
                objVal.tens = Math.floor((v_1 % 100) / 10);
                objVal.hundreds = Math.floor(v_1 / 100);
                break;
        }
    } else {
        console.log("Число " + v_1 + " не являнтся целым числом или не находится в интервале значений [0, 999]:")
        alert("Число " + v_1 + " не являнтся целым числом или не находится в интервале значений [0, 999]:");
    }
    return objVal
}

console.log(makeObjectDischarges(x_1))

// 1.1 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры наследования -> типы на es5 и es6), конструктор Product, который принимает параметры name и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный объект-прототип (как объект transport в уроке).

// СТИЛЬ ES5
function Product(name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.make25PercentDiscount = function () {
    this.price = (this.price - (this.price * 0.25))
}
let Obj1 = new Product('beer', 270);
Obj1.make25PercentDiscount(); // <- это же метот прототип?
console.log(Obj1);

// СТИЛЬ ES6
class Product1 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        this.price = (this.price - (this.price * 0.25))
    }
}
let Obj2 = new Product1('chees', 100);
Obj2.make25PercentDiscount(); // <- это же метод прототип, а не объект прототип?
console.log(Obj2);

// 1.2 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры наследования -> механика наследования),
// а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
// б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
// Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству highlighted значение true.

// СТИЛЬ ES5
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text) {
    this.text = text;
}

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date)
    this.highlited = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;
AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlited = true;
}

let Obj1_2 = new AttachedPost('Jonni D.', '@amberheard is a dumb bitch...', '2022.05.28');
Obj1_2.edit('@amberheard is a dumb bitch!!!');
Obj1_2.makeTextHighlighted();
console.log(Obj1_2);

// СТИЛЬ ES6
class Post1 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(text) {
        this.text = text;
    }
}
class AttachedPost1 extends Post1 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlited = false;
    }
}
AttachedPost1.prototype.makeTextHighlighted = function () {
    this.highlited = true;
}

let Obj1_3 = new AttachedPost1('Jonni D.', '@amberheard is a dumb bitch...', '2022.05.28');
Obj1_3.edit('@amberheard is a dumb bitch!!!');
Obj1_3.makeTextHighlighted();
console.log(Obj1_3);

// Practical Task №3

// 1. С помощью цикла for написать алгоритм для вывода чисел(выводите в консоль,
//     с помощью console.log) от 0 до 10 включительно, чтобы результат выглядел так:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

let div = document.querySelector("div");
let text = "<br>Практическая задача № 1:<br>";

let x = prompt('Введите число 10 (это по условию задачи) - а при желании, можете развлекаться:');
if (!Number(x)) {
    console.log('Ну ***! Come one, число вводи');
    text += 'Ну ***! Come one, число вводи'
}
for (let i = 0; i <= x; ++i) {
    if (i == 0) {
        console.log(i + ' - это ноль');
        text += i + ' - это ноль<br>';
    } else if (i % 2 == 0) {
        console.log(i + ' - это четное число');
        text += i + ' - это четное число<br>';
    } else {
        console.log(i + ' - это нечетное число');
        text += i + ' - это нечетное число<br>';
    }
    if (i >= 1000) {
        text += 'А дальше не будем перегружать процессор<br>';
        break;
    }
}

// 2. Выведите в консоль значения, указанные рядом с комментариями:

text += "<br>Практическая задача № 2:<br>";
const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

text += post.author + "<br>";
text += post.comments[0].rating.dislikes + "<br>";
text += post.comments[1].userId + "<br>";
text += post.comments[1].text + "<br>";

// 3. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый
// товар применить скидку 15 %, можете использовать метод forEach https://mzl.la/1AOMMWX :
text += "<br>Практическая задача № 3:<br>";
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach((e) => {
    e.price = Number(e.price - (e.price * 0.15))
    text += "ID product: " + e.id + " Price: " + e.price + "<br>";
})

console.table(products);


// 4. Перед вами находится массив с продуктами в интернет - магазине.Вам нужно:
// 1. Получить все товары, у которых есть фотографии, можете использовать метод filter
// https://mzl.la/2qROQkT
// 2. Отсортируйте товары по цене(от низкой цены к высокой), можете использовать
// метод sort https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например
// здесь https://youtu.be/O2pusOp0gC0 или в дополнительных видео в материалах урока.
text += "<br>Практическая задача № 4 (Два в одном / Filter/Sort):<br>";
const moreProducts = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

const filteredMoreProducts = moreProducts.filter(e => (e.photos && e.photos.length > 0));

filteredMoreProducts.sort((a, b) => { return a.price - b.price })

filteredMoreProducts.forEach(e => text += "Product ID: " + e.id + " Product price: " + e.price + "<br>");

console.table(filteredMoreProducts);


// В первом пункте у вас должен получиться такой массив из двух элементов https://yadi.sk/i/9IBcmLEP6nId9w
// Во втором пункте массив должен стать таким https://yadi.sk/i/-xKIq_prDx3Txg

// 5.(По желанию, т.к.такая особенность практически не используется) Вывести с помощью цикла
// for числа от 0 до 9, НЕ используя тело цикла.То есть выглядеть должно примерно так:
// for (…) {/* здесь пусто */ }
// Помните, что в первом, втором и третьем раздела цикла можно не только писать условия,
// или увеличивать счетчик например на 1, допустимы любые выражения, например вызовы функций.
text += "<br>Практическая задача № 5: =>>>в консоли<<<=<br>";
for (let i = 0; i <= 9; console.log(i++)) {
}

// 6.  Нарисовать горку с помощью console.log(используя цикл for), как показано на рисунке,
//     только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx
text += "<br>Практическая задача № 6:<br>";
let t = "*"
for (let i = 1; i <= 20; i++) {
    console.log(t.repeat(i));
    text += ("№" + i + " " + t.repeat(i) + "<br>")
}

div.innerHTML = text;
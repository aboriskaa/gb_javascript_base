// 1. Объясните почему код даёт именно такие результаты?
// Подсказка. Чтобы лучше разобраться возьмите этот код и запустите в отладчике в 
// браузере со включенными точками остановки.
//пример 1
let a = 1, b = 1, c, d;
c = ++a;
console.log(c); // ответ: 2
//  1) объявление переменных "a,b,c,d" c присвоением переменных "a= 1", "b=1"
//  2) присвоение переменной "c" значения "2", что является 
//     результатом работы префиксного инкремента по переменной "a" со значением "1" увиличееным на "1" и возвращенным результатом

//пример 2
d = b++;
console.log(d); //ответ: 1
// присвоение переменной "d" значения 1 резутата работы постфиксного инкремента по переменной "b" (возвращает 1, до добавления 1 к переменной операнду)
//пример 3

c = 2 + ++a;
console.log(c); //ответ: 5
// переменная "a" объявлена в блоке кода и ей присвоено значение 2, значение операнда преинкементируется и переменной "а" присваевается значение 3
// переменной "с" присваевается результат сложения цифры 2 и значения переменной "а"=3

//пример 4
d = 2 + b++;
console.log(d); //ответ: 4
// переменная "b" объявлена в блоке кода и ей присвоено значение 2, значение операнда постинкементируется и переменной "b" присваевается значение 3, но после выполнения операций
// переменной "d" присваевается результат сложения цифры 2 и значения переменной "b"=2 (до инкрементации)

console.log(a); //3
console.log(b); //3

// 2. Чему будут равны переменные x и a в примере ниже? Написать почему так произошло
// (описать последовательность действий).
let aa = 2;
let x = 1 + (aa *= 2);

// Переменная "aa" объявляется ("a" переименована в "аа", так как "а" объявлена ранее в блоке)
// значение "aa" умножается на 2, результат переменная "аа" содержит значение 4
// переменная "x" объявляется и для нее прсиваевается значение операции 1 + 4 (значение "aa"), результат 5

// 3. Объявить две переменные a и b и задать им целочисленные произвольные начальные значения.
// Затем написать скрипт, который работает по следующему принципу:
// - если a и b положительные, вывести их разность (ноль можно считать положительным числом);
// - если а и b отрицательные, вывести их произведение;
// - * (этот пункт по сложнее, делайте по желанию) если а и b разных знаков, вывести их сумму;

let a1 = 2, b1 = -5;
if (a1 >= 0 && b1 >= 0) {
    console.log(a1 - b1)
} else if (a1 <= 0 && b1 <= 0) {
    console.log(a1 * b1)
} else if (a1 * b1 < 0) {
    console.log(a1 + b1)
}

// 4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с
// двумя параметрами. Т.е. например, функция для сложения должна принимать два числа,
// складывать их и возвращать результат. Обязательно использовать оператор return.

let a4 = 3, b4 = -1

x41 = (a, b) => { return a + b }; console.log(x41(a4, b4))

x42 = (a, b) => { return a - b }; console.log(x41(a4, b4))

x43 = (a, b) => { return a / b }; console.log(x41(a4, b4))

x44 = (a, b) => { return a * b }; console.log(x41(a4, b4))

// 5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
// переданного значения операции (использовать switch) выполнить одну из арифметических операций
// (использовать функции из задания 4) и вернуть полученное значение.


function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return x41(arg1, arg2);
        case "-":
            return x42(arg1, arg2);
        case "/":
            return x43(arg1, arg2);
        case "*":
            return x44(arg1, arg2);
        default:
            return console.log(operation + "<= это г..о не из арифметики");
    }
}
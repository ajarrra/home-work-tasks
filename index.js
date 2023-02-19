//1. Напишите функцию, которая выводит ваше имя и фамилию.

function myName(name, surname) {
    console.log("My name is " + name, surname);
}
myName("Ajar", "Koshoeva");

//2 Напишите функцию, которая выводит объем конуса по заданным параметрам - высота (height) и радиус (radius).
let pi = 3.14;
function coneVolume(height, radius) {
    console.log("Объем конуса равен " + (height * pi * radius ** 2) / 3);
}
coneVolume(7, 6);

// 3 Напишите функцию, которая принимает строку и возвращает ее длину.
function getLenght(line) {
    console.log("длина равна " + line.length);
    return line.length
}
getLenght("Ajara");

// 4 Напишите функцию, которая принимает число и проверяет, четное оно или нечетное.
function number(num) {
    if (num % 2 === 0) {
        console.log(" число четное" + num);
    }
    else if (num % 2 === 1) {
        console.log("число нечетное " + num);
    }
    else {
        console.log("это не число " + num);
    }
}
number("булочка");
number(7);
number(2);

// 5 Напишите функцию, которая возвращает квадрат числа.
function getSquare(a) {
    return a * a;
}
console.log(getSquare(6));
console.log(getSquare(66));

// 6 Напишите функцию, которая возвращает корень числа.
function geRoot(a) {
    return a ** (1 / 2);
}
console.log(geRoot(8));

//7. Напишите функцию, которая возвращает периметр пятиугольника.
function perimeter(a, b, c, d, i) {
    return a + b + c + d + i;
}
console.log(perimeter(6, 8, 2, 4, 7));

//8. Напишите цикл, который выводит каждое третье число в промежутке от 0 до 33. 
//0 3 6 9     
for (let i = 0; i < 34; i += 3) {
    console.log(i);
}

//9. Напишите цикл, вычисляющий факториал числа 8. (8!)
let factorial = 1;
for (let i = 1; i < 9; i++) {
    factorial = factorial * i;
}
console.log(factorial);

//10. Напишите цикл, который выводит квадраты чисел от 1 до 10.
// 1 4 9 ...
for (let i = 1; i < 11; i++) {
    console.log(i ** 2);
}

//11. Напишите цикл, который вычисляет сумму чисел от 1 до 25.
for(let i = 1; i < 25 ; i++ ){
    console.log(i);
}


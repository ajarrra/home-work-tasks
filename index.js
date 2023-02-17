//1. Напишите функцию, которая выводит ваше имя и фамилию.

function myName(name, surname) {
    console.log("My name is " + name, surname);
}
myName("Ajar", "Koshoeva");

//Напишите функцию, которая выводит объем конуса по заданным параметрам - высота (height) и радиус (radius).
let pi = 3.14;
function coneVolume(height, radius) {
    console.log("Объем конуса равен " + (height * pi * radius ** 2) / 3);
}
coneVolume(7, 6);

//Напишите функцию, которая принимает строку и возвращает ее длину.
function getLenght(line) {
    console.log("длина равна " + line.length);
}
getLenght("Ajara");

//Напишите функцию, которая принимает число и проверяет, четное оно или нечетное.
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

// Напишите функцию, которая возвращает квадрат числа.
function getSquare(a) {
    return a * a;
}
console.log(getSquare(6));
console.log(getSquare(66));


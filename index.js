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
function getLenght (line){
    console.log ("длина равна " + line.length);
}
getLenght("Ajara");

//Напишите функцию, которая принимает число и проверяет, четное оно или нечетное.

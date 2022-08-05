import { rgbToHex } from "./dist";

/* Функциональный синтаксис */
console.log(rgbToHex("rgba(51, 170, 51, .1)", true), "#33aa331a");
console.log(rgbToHex("rgba(51, 170, 51,  1)"), "#33aa33");

/* Синтаксис c пробелами */
console.log(rgbToHex("rgba(51 170 51 / 0.4)", true), "#33aa3366");
console.log(rgbToHex("rgba(51 170 51 / 40%)", true), "#33aa3366");

/* Функциональный синтаксис со значением floats */
console.log(rgbToHex("rgba(255, 0, 153.6, 1)", true), "#ff009a");
console.log(rgbToHex("rgba(100, 5, 0.5, 25%)", true), "#64050040"); // TODO: Некорректное округление.
console.log(rgbToHex("rgba(1e2, .5e1, .5e0, +.25e2%)", true), "#64050040"); // TODO: Некорректное округление.

console.log(rgbToHex("rgb(0 0 0 / 50%)"), "#000000");
console.log(rgbToHex("rgb(100%, 0, 60%)")); // TODO: обрабатывать ошибку. Такой синтаксис не допускается.
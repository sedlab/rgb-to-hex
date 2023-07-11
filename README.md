# rgb-to-hex

Библиотека для конвертирования цвета RGB(A) в HEX.

## Установка

`npm install dsedinkin/rgb-to-hex#latest --save` или `yarn add dsedinkin/rgb-to-hex#latest`

## Использование

> ES6

```js
import { rgbToHex } from "rgb-to-hex";
```

> ES5

```js
const { rgbToHex } = require("rgb-to-hex");
```

## Пример

```js
/* Функциональный синтаксис */
rgbToHex("rgba(51, 170, 51, .1)", true); // "#33aa331a"
rgbToHex("rgba(51, 170, 51,  1)"); // "#33aa33"

/* Синтаксис c пробелами */
rgbToHex("rgba(51 170 51 / 0.4)"); // "#33aa3366"
rgbToHex("rgba(51 170 51 / 40%)"); // "#33aa3366"

/* Функциональный синтаксис со значением floats */
rgbToHex("rgba(255, 0, 153.6, 1)"); // "#ff009a"
```
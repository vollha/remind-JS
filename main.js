'use strict';
let numbersArr = [2, 15, 8, 25, 8, 17, 66, 35, 0, 6, 11, 21];
let arr = ['Bel', 'Russia', 'Poland', 'USA', 'Germany', 'Uz'];
let lol = 'Brest';

// Array's methods
const filt = () => arr.filter(el => el.length > 3);
console.log(filt());

const slice = arr.slice(1,4);
console.log(slice);

const splice = arr.splice(1,2);
console.log(splice);

const join = arr.join('-');
console.log(join);

arr[100] = 100;
console.log(arr);

const newArr = Array.from('Brest');
console.log(newArr);

const newArr2 = Array.of('Brest', 20, 77);
console.log(newArr);

// String's methods
const split = lol.split('');
console.log(split);

var str = 'Смотри главу 3.4.5.1 для дополнительной информации';
var re = /смотри (главу \d+(\.\d)*)/i;
var found = str.match(re);
console.log(found);

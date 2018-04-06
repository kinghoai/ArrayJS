const arr = [1, 3, 5, 4, 2, 6, 7];

const people = [
    { name: 'Teo', age: 10, height: 100 },
    { name: 'Ti', age: 15, height: 90 },
    { name: 'Tun', age: 12, height: 110 },
    { name: 'Tuan', age: 14, height: 115 },
];

//const arrChan = arr.filter(function (a) {return a % 2 === 0});
const arrChan = arr.filter(a => a % 2 === 0);
const peopleOld = people.filter(a => a.age >= 14);
const peopleMap = people.map(a => a.name);
const index = arr.indexOf(2);
const find = people.find(a => a.age + a.height > 120);
//sap xep tuoi tu nho den lon
const sort = people.sort((a, b)=> a.age - b.age);
//Tinh tong arr
const reduce = arr.reduce((a, b)=> a + b);
// Tinh tong chieu cao 4 ban
const arrHeight = people.map(a => a.height);
const tongHeight = arrHeight.reduce((a,b) => a + b);
console.log(tongHeight);
//Напишите функцию, которая возвращает вложенный массив вида 
//[[key, value], [key, value]] 
//Ожидаемый результат: 
//({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]

function convertObjToArr(obj){
    return Object.entries(obj);
}

const obj = {a:1, b:2}
const result = convertObjToArr(obj)
console.log(JSON.stringify(obj) + ' => ' + JSON.stringify(result))
//Данна строка 'DDADSADASDAAADS' вывести все 
//уникальные символы в строке (в ответе должно получиться "DAS")

const string = 'DDADSADASDAAADS';
console.log([...new Set(string)].join(''));

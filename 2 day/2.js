//В переменной month лежит какое-то число из интервала от 1 до 12(можно рандомайзер сделать). 
//Определите в какую пору года попадает этот месяц (зима, лето, весна, осень). 
//В переменной year лежит какой то год например 2022. 
//Определите високосный это год или нет.

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const GetSeason = (month) => {
    switch (month){
        case 12:
        case 1:
        case 2:
            return 'зима'
        case 3:
        case 4: 
        case 5:
            return 'весна'
        case 6: 
        case 7:
        case 8:
            return 'лето'
        case 9: 
        case 10:
        case 11:
            return 'осень'
        default:
            return 'Неверный месяц'
    }
}
const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
}

const date = {
    month: getRandomInt(0, 12),
    year: 2022
}

const season = GetSeason(date.month);

console.log(`Месяц ${date.month}, пора года ${GetSeason(date.month)}`)
console.log(`Год ${date.year} ${isLeapYear(date.year)?'високосный':'не високосный'}`)
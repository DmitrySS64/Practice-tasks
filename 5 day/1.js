//Модифицируйте класс Worker из предыдущей задачи следующим образом: 
//для свойства rate и для свойства days сделайте еще и методы-сеттеры. 

class Worker {
    #name;
    #surname;
    #rate;
    #days;
    constructor(name, surname, rate, days){
        this.#name = name;
        this.#surname = surname;
        this.#rate = rate;
        this.#days = days;
    }
     
    getName(){
        return this.#name;
    }
    getSurname(){
        return this.#surname;
    }
    getRate() {
        return this.#rate;
    }
    getDays() {
        return this.#days;
    }
    getSalary(){
        return this.#rate * this.#days;
    }

    setRate(value){
        if (value < 0){
            throw new Error('Rate must be greater than 0')
        }
        this.#rate = value;
    }
    setDays(value){
        if (value < 0){
            throw new Error('Days must be greater than 0')
        }
        this.#days = value;
    }
}

const worker = new Worker('Иван', 'Иванов', 100, 20)
console.log(`${worker.getName()} ${worker.getSurname()}, зарплата: ${worker.getSalary()} р`)
try {
    worker.setRate(120);
    worker.setDays(22);

    console.log('После изменения ставки и дней:');
    console.log(`Ставка: ${worker.getRate()}`);
    console.log(`Дни: ${worker.getDays()}`);
    console.log(`Зарплата: ${worker.getSalary()}`);
    
    worker.setRate(-50);
} catch (error) {
    console.error(error.message);
}
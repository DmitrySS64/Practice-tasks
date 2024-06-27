//Модифицируйте класс Worker из предыдущей задачи следующим образом: 
//сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры.


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
}

const worker = new Worker('Иван', 'Иванов', 100, 20)
console.log(`${worker.getName()} ${worker.getSurname()}, зарплата: ${worker.getSalary()} р`)
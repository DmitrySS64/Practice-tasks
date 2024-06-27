//Реализуйте класс Worker (Работник), который будет иметь следующие свойства: 
//name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). 
//Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. 
//Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days

class Worker {
    constructor(name, surname, rate, days){
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary(){
        return this.rate * this.days;
    }
    showSalary(){
        console.log(`Зарплата ${this.name} ${this.surname}: ${this.getSalary()}`)
    }
}

const worker = new Worker('Иван', 'Иванов', 100, 20)
worker.showSalary()
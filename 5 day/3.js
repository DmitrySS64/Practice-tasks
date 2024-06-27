//создать класс calculation , в котором будет одна переменная calculationLine. методы: 
//setterCalculationLine который будет к переменной приравнивать значение которое передается, 
//setLastSymbolCalculationLine который будет в конец строки прибавлять символ, 
//gettercalCulationLine который будет выводить переменную, 
//lastSymbol получение последнего символа, 
//deleteLastSymbol удаление последнего символа из строки

class Calculation{
    #calculatioLine
    constructor(){
        this.#calculatioLine = '';
    }

    setCalculationLine(value){
        this.#calculatioLine = value.toString();
    }
    setLastSymbolCalculationLine(symbol){
        this.#calculatioLine += symbol;
    }
    getCalculationLine(){
        return this.#calculatioLine;
    }
    getLastSymbol(){
        return this.#calculatioLine.slice(-1);
    }
    deleteLastSymbol(){
        this.#calculatioLine = this.#calculatioLine.slice(0,-1);
    }
}

const calc = new Calculation();

calc.setCalculationLine(12345);
console.log(calc.getCalculationLine());

calc.setLastSymbolCalculationLine(6);
console.log(calc.getCalculationLine());
console.log(calc.getLastSymbol());

calc.deleteLastSymbol();
console.log(calc.getCalculationLine());
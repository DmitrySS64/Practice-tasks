//вывести все числа делящиеся только на себя и на единицу до 100

function findPrimeNumbers(limit) {
    let primeNumbers = [];

    for (let number = 2; number <= limit; number++) {
        let isPrime = true;

        for (let divisor = 2; divisor < number; divisor++) {
            if (number % divisor === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeNumbers.push(number);
        }
    }

    return primeNumbers;
}

console.log(findPrimeNumbers(100));
//вывести числа фибаначи до 200

function fibonacci(limit){
    const fibNum = [0, 1];
    var nextNum = fibNum[0] + fibNum[1];
    
    while (nextNum <= limit) {
        fibNum.push(nextNum);
        var length = fibNum.length;
        nextNum = fibNum[length - 1] + fibNum[length - 2];
    }

    return fibNum;
}

console.log(fibonacci(200));
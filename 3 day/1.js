//отфильтровать выборкой массив и бинарным поиском найти элемент. 
//массив:[6,1,7,3,5,8,0,-1,3,2,4,5] искомое число 0

const arr = [6,1,7,3,5,8,0,-1,3,2,4,5];

const SortArray = (arr) => {
    return arr.sort((a,b) => a - b);
}

function binarySearch(arr, target){
    let L = 0;
    let R = arr.length - 1;

    while (L <= R){
        let M = Math.floor((L + R)/2)

        if (arr[M] === target){
            return M;
        } else if (arr[M] < target) {
            L = M + 1;
        } else {
            R = M - 1;
        }
    }
    
    return -1;
}

const targetNumber = 0;
const sortArray = SortArray(arr);
const index = binarySearch(sortArray, targetNumber);

if (index !== -1) {
    console.log(`Элемент ${targetNumber} найден в массиве на позиции ${index}`);
} else {
    console.log(`Элемент ${targetNumber} не найден в массиве`);
}
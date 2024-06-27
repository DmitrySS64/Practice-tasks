//Cортируем этот массив методом пузырька [1,2,3,6,8,1,6,3,2,1,0,4] 
//и склеиваем с массивом строк ['one', 'two','three'] 
//решенным заданием будет сичтаться массив 
//[0, 1, 1, 1, 2, 2, 3, 3, 4, 6, 6, 8, 'one', 'two','three']

function bubbleSort(arr){
    const length = arr.length;
    let swapped;

    do{
        swapped = false;
        for (let i = 0; i < length -1; i++){
            if(arr[i] > arr[i+1]){
                const temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

let numbersArray = [1, 2, 3, 6, 8, 1, 6, 3, 2, 1, 0, 4];
let stringsArray = ['one', 'two', 'three'];

numbersArray = bubbleSort(numbersArray);

const mergedArray = [...numbersArray, ...stringsArray];

console.log(mergedArray);
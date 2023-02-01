const numbers = [3, 8, 0, 11, 2, 29, 1, 5, 99, 58];

function bubbleSort(arr: number[]) {
    for (let i = 0; i < arr.length - 1; i++) {  		//O(n^2)
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
}

bubbleSort(numbers);
console.log(numbers);
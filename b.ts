const numbers = [3, 8, 0, 11, 2, 29, 1, 5, 99, 58];
console.log(`original: ${numbers}`)

function insertionSort(arr: number[]) { //O(n^2)
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[0]) {
            const holding = arr.splice(i, 1)
            arr.unshift(...holding)
        } else {
            if (arr[i] < arr[i - 1]) {
                for (let j = 1; j < i; j++) {
                    if (arr[i] >= arr[j - 1] && arr[i] < arr[j]) {
                        arr.splice(j, 0, ...arr.splice(i, 1))
                    }
                }
            }
        }
    }
}

insertionSort(numbers)
console.log(`selectionSort: ${numbers}`)
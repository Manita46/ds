const numbers = [3, 8, 0, 11, 2, 29, 1, 5, 99, 58];
console.log(`original: ${numbers}`)

function selectionSort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i
        let holding = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        arr[i] = arr[minIndex]
        arr[minIndex] = holding
    }
}
selectionSort(numbers)
console.log(`selectionSort: ${numbers}`)

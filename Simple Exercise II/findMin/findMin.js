function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) { // i要從1開始，因為0已經先被拿去做比較基準了Ｆ
        if (arr[i] < min) {
            min = arr[i];
        } else if (arr.length == 0) {
            return undefined
        }
    }
    return min;
}

console.log(findMin([1, 2, 5, 6, 99, 4, 5])); // returns 
console.log(findMin([])); // returns undefined
console.log(findMin([1, 6, 0, 33, 44, 88, -10])); // returns -10
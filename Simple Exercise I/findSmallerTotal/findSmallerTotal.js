function findSmallerTotal(arr, n) {
    let sum = 0;  //預設不用空值
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < n) {
            sum += arr[i];
        }
    }
    return sum;
}


console.log(findSmallerTotal([1, 2, 3], 3)) //3
console.log(findSmallerTotal([1, 2, 3], 1)) //0
console.log(findSmallerTotal([3, 2, 5, 8, 7], 999)) //25
console.log(findSmallerTotal([3, 2, 5, 8, 7], 0)) //0

function findSmallCount(arr, n) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < n) {
            counter++;
        }
    }
    return counter;
}

//在arr中有多少數字小於最後的整數
console.log(findSmallCount([1, 2, 3], 2)); //1
console.log(findSmallCount([1, 2, 3, 4, 5], 0)) //0

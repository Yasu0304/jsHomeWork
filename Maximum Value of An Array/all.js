

// function findBiggest(arr) {
//     return Math.max(newArr);
// }

let newArr = [15, 20, 22, 16, 7];
// let biggestNumber = findBiggest(arr);
// console.log(biggestNumber)

// const numbers = [1, 5, 3, 9, 2, 8];
// const maxNumber = findMax(numbers);
// console.log(maxNumber); 


function findBiggest(arr) {
    if (arr.length == 0) {
        return undefined;
    }

    let biggestNumber = -100000000;
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i], biggestNumber);
        if (arr[i] > biggestNumber) {
            biggestNumber = arr[i];
        }
    }
    return biggestNumber;
}

console.log(findBiggest([]));
// function addUpTo(n) {

//   return result;
// }


// 迴圈解
// function addUpTo(n) {
//     let result = 0;
//     for (let i = 0; i <= n; i++) {
//       result += i;
//     }
//     return result;
//   }

//   console.log(addUpTo(10))

// 公式解:等差級數 = ((首項 + 末項) * 項數) / 2

function addUpTo(n) {
    let result = ((1 + n) * n) / 2;
    return result;
}

console.log(addUpTo(100))
// 整個想太多

// function reverse(str) {
//     let reverseStr = [];
//     if (str.toUpperCase().indexOf(" ") == -1) {
//         for (let i = 0; i < str.split("").length; i++) {
//             reverseStr.unshift(str[i])
//         }
//     } else if (str.toUpperCase().indexOf(" ") == 1) {
//         for (let i = 0; i < str.split(" ").length; i++) {
//             reverseStr.unshift(str.split(" ")[i]);
//         }
//     }
//     return reverseStr
// }

function reverse(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

console.log(reverse("abcd")); // returns "dcba"
console.log(reverse("I am a good guy.")); // returns ".yug doog a am I"


// let str = `abcd`;
// console.log(str.toUpperCase().indexOf(" ")); //-1
// console.log(str.toUpperCase().indexOf("")); //0
// console.log(str.split(" "));
// console.log(str.split(""));
// // console.log(typeof str)
// let str2 = "I am a good guy."
// console.log(str2.toUpperCase().indexOf(" "));  //1
// console.log(str2.toUpperCase().indexOf(""));  //0
// console.log(str2.split(" "));
// console.log(str2.split(""));
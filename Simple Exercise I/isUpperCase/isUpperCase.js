function isUpperCase(str) {
    // let originStr = str.split("");
    // let strUpperCase = str.toUpperCase().split("");
    // console.log(originStr[0], strUpperCase[0], typeof str);


    // while (true) {
    //     if (typeof str === `string`) {
    //         return false;
    //     }
    //     if (originStr[0] === strUpperCase[0]) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    if (str.length == 0) {
        return false;
    }
    // if (str[0] == str[0].toUpperCase()) {
    //     return true;
    // } else {
    //     return false;
    // }

    return str[0] == str[0].toUpperCase() //這件判斷原屬boolean，所以return的時候就是true/false
}

// isUpperCase("ABCD");,

console.log(isUpperCase(""))

// let str = "abcjo"
// console.log(str.toUpperCase().split(""));
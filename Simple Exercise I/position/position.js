function position(str) {
    // let oringinStr = str.split("");
    // let allUpperCaseStr = str.toUpperCase().split("");
    // console.log(oringinStr[2], allUpperCaseStr)

    // for (let i = 0; i <= str.length; i++) {
    //     if (oringinStr[i] === allUpperCaseStr[i] && oringinStr[i] != undefined) {
    //         return oringinStr[i],+" "+i;
    //     } else if (oringinStr[i] === allUpperCaseStr[i] && oringinStr[i] == undefined) {
    //         return -1;
    //     }
    // }

    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase()) {
            return str[i] + " " + i
        }
    }
    return -1

}

console.log(position(""))
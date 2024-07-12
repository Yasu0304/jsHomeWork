function isAllUpperCase(str) {
    // let originStr = str.split("");
    // let allUpperCaseStr = str.toUpperCase().split("");
    // console.log(originStr, allUpperCaseStr)
    if (str.length == 0) {
        return false;
    }
    for (let i = 0; i <= str.length; i++) {
        if (str[i] == str[i].toUpperCase()) {
            return true
        } else {
            return false;
        }
    }
}

console.log(isAllUpperCase("ABJ"));
function makeStars(n) {
    let result = "*";
    for (let j = 2; j <= n; j++) {
        let str = `\n`;
        for (let k = 0; k < j; k++) {
            str += "*"
        }
        result += str;
    }
console.log(result)
}
// 自動換行\n
makeStars(1)
console.log(`----------------`)
makeStars(2)
console.log(`----------------`)
makeStars(5)

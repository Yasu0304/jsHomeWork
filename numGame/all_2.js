let ansNum = Math.floor(Math.random() * 100);
let min = 0;
let max = 99;

while (true) {
    let guessAns = parseInt(prompt("此遊戲為終極密碼，請輸入一個數字 (" + min + " ~ " + max + ")"));
    console.log(guessAns, ansNum, min, max)
    if (guessAns < min || guessAns > max) {
        alert(`請重新猜一個數字`);
        continue;
    }

    if (guessAns == ansNum) {
        alert(`您答對了，答案為` + ansNum);
        break;

    } else if (guessAns < ansNum) {
        min = guessAns;
        console.log(`更新後的 min: ${min}`);
    } else if (guessAns > ansNum) {
        max = guessAns;
        console.log(`更新後的 max: ${max}`);
    }
}
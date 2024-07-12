// 0-12 兒童票 100元
// 12-65 成人票 250元
// 65以上 敬老票 150元

let age = prompt("請輸入你的年齡：");
//處理非數字以外的防呆
console.log(typeof age); //string

age = Number(age);
console.log(age, typeof age); //在有中字情況下是 Nan ,number

//isNaN 判斷是否有字母
//不能使用 age == NaN,age === NaN 所有的型別跟NaN比較都是false
if (isNaN(age)) {
    alert("請輸入阿拉伯數字");
} else {
    if ((age > 0) && (age < 12)) {
        alret("兒童票100元");
    } else if ((age >= 12) && (age < 65)) {
        alret("成人票250元");
    } else if ((age >= 65) && (age < 120)) {
        alert("敬老票250元");
    }
}

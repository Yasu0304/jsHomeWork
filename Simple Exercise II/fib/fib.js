function fib(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

//遞迴，在本身的程式裡面在執行自己

fib(0); // returns 0
fib(1); // returns 1
fib(2); // returns 1
fib(3); // returns 2
console.log(fib(8)); // returns 21

//比較好的演算法
function fib2(n) {
    let arr = [0, 1];
    let i = 0;
    while (arr.length <= n) {
        arr.push(arr[i] + arr[i + 1]); // 數列的第n項，由前兩個相加
        i++;
    }

    console.log(arr);
    console.log(arr[n]);
    return arr[n];
}

console.log(fib2(8));
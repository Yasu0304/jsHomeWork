function stars2(n) {
    for (let i = 1; i <= n; i++) {
        let line = "";
        for (j = 0; j < i; j++) {
            line += `*`;
        }
        console.log(line)
    }
    for (let i = n - 1; i > 0; i--) {
        let line = "";
        for (let j = 0; j < i; j++) {
            line += `*`;
        }
        console.log(line)
    }
}

stars2(1);
console.log(`---------`)
stars2(2);
console.log(`---------`)
stars2(3);
console.log(`---------`)
stars2(4);
console.log(`---------`)

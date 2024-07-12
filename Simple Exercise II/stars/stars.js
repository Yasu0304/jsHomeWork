function stars(n) {
    for (let i = 1; i <= n; i++) {
        //行數
        // i為星星
        let line = "";
        for (let j = 0; j < i; j++) {
            line += `*`;
            //每一行有多少星星
        }
        console.log(line)
    }
}

stars(4);
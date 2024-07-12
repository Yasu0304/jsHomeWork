function stars(n) {
    let star = ``;
    for (let i = 1; i <= n; i++) {
        star += `*`;
    }
    return star;
}

console.log(stars(9))
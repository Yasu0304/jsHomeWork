let friends = ["Harry", "Ron", "Snap"];
let reverse_friends = [];


for (let i = friends.length - 1; i >= 0; i--) {
    let friend = friends[i];
    reverse_friends.push(friend);

}
console.log(reverse_friends);
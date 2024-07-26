let addList = document.querySelector("form button");
let section = document.querySelector("section");
console.log(section);
addList.addEventListener("click", e => {
    // console.log(e.target);
    e.preventDefault(); // 停止預設送出表單的動作
    // console.log(e.target.parentElement); // 預期會找到按鈕的父元素，內容物會變成陣列資料＋其他資料

    //取得資料
    let form = e.target.parentElement;
    let toDoText = form.children[0].value;
    let toDoM = form.children[1].value;
    let toDoD = form.children[2].value;
    // console.log(toDoText, toDoM, toDoD); //內容就是子元素

    // 把取得的資料放入section << 練習點
    let toDo = document.createElement("div");
    toDo.classList.add("todo");
    let text = document.createElement("p");
    text.classList.add("toDoText");
    text.innerText = toDoText
    let time = document.createElement("p");
    time.classList.add("toDoTime");
    time.innerText = toDoM + "/" + toDoD
    toDo.appendChild(text);
    toDo.appendChild(time);
    section.appendChild(toDo);
    console.log(toDo)

    // 加入完成、刪除按鈕
    let doneBtn = document.createElement("button");
    doneBtn.innerHTML = `<span class="material-symbols-outlined">check_small</span>`;
    doneBtn.classList.add("doneBtn");
    let delBtn = document.createElement("button");
    delBtn.innerHTML = `<span class="material-symbols-outlined">delete</span>`
    delBtn.classList.add("delBtn")
    toDo.appendChild(doneBtn);
    toDo.appendChild(delBtn);

})
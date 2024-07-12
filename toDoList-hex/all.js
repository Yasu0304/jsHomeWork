const input = document.querySelector("input");
const btnAdd = document.querySelector(".btn_add");
const list = document.querySelector(".list");
let data = [
    {
        text: "早",
        tabStatus: "unfinish"
    },
    {
        text: "午安",
        tabStatus: "finish"
    },
    {
        text: "晚安",
        tabStatus: "all"
    }

]

//渲染畫面
function renderData() {
    let str = "";
    data.forEach((item, index) => {
        str += `<li>
    <label class="checkbox" for="">
        <input type="checkbox" />
        <span>${item.text}</span>
    </label>
    <a href="#" class="delete" data-num="${index}"></a>
</li>`
    })
    list.innerHTML = str
}
renderData();

//新增待辦
btnAdd.addEventListener("click", function (e) {

    if (input.value == "") {
        alert("請輸入待辦事項");
        return;
    }
    let obj = {};
    obj.text = input.value;
    data.push(obj);
    renderData();
})

//刪除待辦
renderData();
list.addEventListener("click", function (e) {
    // console.log(e.target.getAttribute("class")=="delete");
    if (e.target.getAttribute("class") !== "delete") {
        return;
    }
    let num = e.target.getAttribute("data-num");
    // console.log(num);
    data.splice(num, 1);
    renderData();
})

//check完成
renderData();
const tab = document.querySelector(".tab")
let tabContent = `<li data-value="all">全部</li>
    <li data-value="unfinish">待完成</li>
    <li data-value="finish">已完成</li>`;
tab.innerHTML = tabContent;

tab.addEventListener("click", function (e) {
    if (tab.value == undefined) {
        alert(`點歪`);
        return;
    }
    let tabStr = "";
    data.forEach((item, index) => {
        
    })
})


//待完成項目
const list_footer = document.querySelector(".list_footer")
data.forEach((item, index) => {
    if (item.tabStatus == "unfinish") {
        let unfinishNum = "";
        unfinishNum += 1;
        let unfinshStr = `<p>${unfinishNum} 個待完成項目</p>
<a href="#">清除已完成項目</a>`
        list_footer.innerHTML = unfinshStr;
        renderData();
    }
})

//刪除已完成
// const deleteFinish = document.querySelector()

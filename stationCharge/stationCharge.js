let data = [
    {
        Charge: "免費",
        name: "信義充電站"
    },
    {
        Charge: "投幣式",
        name: "小花充電站"
    },
    {
        Charge: "投幣式",
        name: "小明充電站"
    },
    {
        Charge: "投幣式",
        name: "小天充電站"
    }
];

//初始化資料，把資料庫的東西呈現到網頁
const list = document.querySelector(`.list`);
init = () => {
    let str = "";
    data.forEach((item, index) => {
        // console.log(item.Charge, item.name, index);
        content = `<li>${item.Charge}，${item.name}</li>`;
        str += content;
    })
    list.innerHTML = str;
}
init();

//篩資料
const fliter = document.querySelector(`.fliter`);
fliter.addEventListener(`click`, function (e) {
    if (e.target.value == undefined) {
        alert(`沒點到按鈕`);
        return;
    }
    let str = "";
    data.forEach((item, index) => {
        if (e.target.value == item.Charge) {
            content = `<li>${item.Charge}，${item.name}</li>`;
            str += content;
        } else if (e.target.value == "全部") {
            content = `<li>${item.Charge}，${item.name}</li>`;
            str += content;
        }
    })
    list.innerHTML = str;
})

//新增資料
let stationName = document.querySelector(`.stationName`);
let stationCharge = document.querySelector(`.stationCharge`);
let saveBtn = document.querySelector(`.saveBtn`);

saveBtn.addEventListener(`click`, function (e) {
    console.log(e.target.value);
    let obj = {};
    obj.Charge = stationCharge.value;
    obj.name = stationName.value;
    data.push(obj);
    init();
})
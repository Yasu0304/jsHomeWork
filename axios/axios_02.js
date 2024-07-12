// 透過函式處理非同步

let ary =[]; // 取得新資料

axios.get('https://hexschool.github.io/ajaxHomework/data.json')
  .then(function (response) { // 暫存區域
    console.log(`資料回傳`); //1
    ary = response.data;
renderData(); // 在這邊使用渲染畫面，確保下面的操作有資料被執行
  })

function renderData(){ // 渲染畫面的指令，會先記憶這個function
    console.log(ary); // 2
    const title = document.querySelector(".title");
    console.log(title);
    title.textContent = ary[0].name; // 在上的面的時候，ary的新陣列已經被傳進去
}


  console.log(ary); //3

  //執行順續為312，資料只是暫存，並沒有被職行所以會從3開始，這時後1的function才被執行，最後跑完1的function才會接著執行2的function

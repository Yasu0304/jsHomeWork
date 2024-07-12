// https://hexschool.github.io/ajaxHomework/data.json
axios.get('https://hexschool.github.io/ajaxHomework/data.json')
  .then(function (response) { // 伺服器要回傳資料之後才會觸發function，已註冊好等帶被執行
    console.log(response.data); // 要抓取的資料
    console.log(response.status); // 狀態碼，如果非目標，可以寫轉跳
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });

  axios.get('https://hexschool.github.io/ajaxHomework/data.json')
  .then(function (response) { 
    let data = response.data;
    console.log(data[0].name); //這邊就要檢測有沒有抓到要抓的資料“內容”
    let title = document.querySelector(".title")
    console.log(title);
    title.textContent = data[0].name;
  });
// import books from "./data.js";
// console.log(books);

let books = [
  {
    id: 1,
    name: "Luật tâm thức",
    price: 220000,
    provider: "Fahasha",
  },
  {
    id: 2,
    name: "Chiến binh cầu vồng",
    price: 140000,
    provider: "Fahasha",
  },
  {
    id: 3,
    name: "Nghệ thuật tập trung",
    price: 90000,
    provider: "Tuổi trẻ",
  },
  {
    id: 4,
    name: "Bye Béo",
    price: 305000,
    provider: "Kmin Books",
  },
  {
    id: 5,
    name: "Sát thủ bán hàng",
    price: 180000,
    provider: "Fahasha",
  },
  {
    id: 6,
    name: "Hoàng tử bé",
    price: 50000,
    provider: "Kmin Books",
  },
  {
    id: 7,
    name: "Tâm lý học tội phạm",
    price: 400000,
    provider: "Kmin Books",
  },
  {
    id: 8,
    name: "Hiểu về trái tim",
    price: 130000,
    provider: "Tuổi trẻ",
  },
];

//Hàm đổi màu
function changeColor() {
  let color = document.getElementsByClassName('color');
  for (let i = 0; i < color.length; i++) {
    color[i].onclick = function () {
      if (this.id === "yellow") {
        document.querySelector('header').style.backgroundImage = 'none';
        document.querySelector('header').style.backgroundColor = '#fcbf16';
      } else if (this.id === "red") {
        document.querySelector('header').style.backgroundImage = 'none';
        document.querySelector('header').style.backgroundColor = '#992154';
      } else if (this.id === "blue") {
        document.querySelector('header').style.backgroundImage = 'none';
        document.querySelector('header').style.backgroundColor = '#173451';
      } else if (this.id === "gradient") {
        document.querySelector('header').style.backgroundImage = 'linear-gradient(to right, #fcbf16, #992154)';
      }
    }
  }
}


function renderBooks(books) {                               // In ra sách
  let list = document.getElementById("list");
  list.innerHTML = '';

  for (let i = 0; i < books.length; i++) {
    let div = document.createElement("div");
    div.className = "item";
    list.appendChild(div);

    let img = document.createElement("img");
    img.src = `./images/0${books[i].id}.jpg`
    div.appendChild(img)

    let h2 = document.createElement("h2");
    h2.innerHTML = books[i].name;
    div.appendChild(h2);

    let p = document.createElement("p");
    p.innerHTML = `${books[i].price}`;
    div.appendChild(p);
  }
}



function searchBooksPriceKeyword(min, max, keyword) {
  let result = [];
  keyword = keyword.toUpperCase();
  for (let i = 0; i < books.length; i++) {
    let price = books[i].price;
    if (books[i].name.toUpperCase().indexOf(keyword) != -1 && price >= min && price <= max) {
      result.push(books[i]);
    }
  }
  return result;
}

function searchBooks(keyword) {                               //Search khi nhập vào ô input  
  let result = [];
  keyword = keyword.toUpperCase();
  for (let i = 0; i < books.length; i++) {
    if (books[i].name.toUpperCase().indexOf(keyword) != -1) {
      result.push(books[i]);
    }
  }
  return result;
}


function filterBooks() {
  let search = document.getElementById('search');
  search.oninput = function () {
    let keyword = document.getElementById('search').value;
    let result = searchBooks(keyword);
    renderBooks(result);
  }
}

function filterBooksByPrices() {                                      //Search khi click button 
  let searchByPrices = document.getElementById('apply-price-filter');
  searchByPrices.onclick = function () {
    let min = document.getElementById("min-price").value;
    let max = document.getElementById("max-price").value;
    let key = document.getElementById('search').value;

    document.getElementById('search').value = "";
    document.getElementById("min-price").value = "";
    document.getElementById("max-price").value = "";

    let result = searchBooksPriceKeyword(min,max,key);
    renderBooks(result);
  }
}


function searchByProvider(provider) {
  let result= [] ;
  for(let i = 0 ; i< books.length ; i ++) {
    if(books[i].provider === provider) {
      result.push(books[i]);
    }
  }
  return result;
}
function searchAllProvider () {
  let resultFinal = [] ;


  let checkBox1 = document.getElementById("provider-1");
  let searchByProvider1 = [] ;

  if(checkBox1.checked === true) {
    let labelText = document.getElementById("provider-1").labels[0].textContent;
    searchByProvider1 = searchByProvider(labelText);
    for(let i = 0 ; i < searchByProvider1.length;i++) {
      resultFinal.push(searchByProvider1[i]);
    } 
  }

  let checkBox2 = document.getElementById("provider-2");
  let searchByProvider2 = [] ;

  if(checkBox2.checked === true) {
    let labelText = document.getElementById("provider-2").labels[0].textContent;
    searchByProvider2 = searchByProvider(labelText);
    for(let i = 0 ; i < searchByProvider2.length;i++) {
      resultFinal.push(searchByProvider2[i]);
    } 
  }


  let checkBox3 = document.getElementById("provider-3");
  let searchByProvider3 = [] ;

  if(checkBox3.checked === true) {
    let labelText = document.getElementById("provider-3").labels[0].textContent;
    searchByProvider3 = searchByProvider(labelText);
    for(let i = 0 ; i < searchByProvider3.length;i++) {
      resultFinal.push(searchByProvider3[i]);
    } 
  }

  renderBooks(resultFinal);
}

function sortNameBooks(books) {
  let result = [];
  for (let i = 0; i < books.length - 1; i++) {
    for (let j = i + 1; j < books.length; j++) {
      if (books[i].name > books[j].name) {
        let tam = books[i];
        books[i] = books[j];
        books[j] = tam;
      }
    }
  }
  result = books;
  
  return result;
}
function sortPricesBooks(books) {
  let result = [];
  for (let i = 0; i < books.length - 1; i++) {
    for (let j = i + 1; j < books.length; j++) {
      if (books[i].price > books[j].price) {
        let tam = books[i];
        books[i] = books[j];
        books[j] = tam;
      }
    }
  }
  result = books;
  
  return result;
}

function sortBooks () {                         // Event sort
  let sortBtn = document.getElementById('sort-by');
  sortBtn.addEventListener('change',function(event) {
    if(event.currentTarget.value === 'sort by name') {
      let sortArr = sortNameBooks(books);
      renderBooks(sortArr);
    }else {
      let sortPricesArr = sortPricesBooks(books);
      renderBooks(sortPricesArr)
    }
  });
}

let provider1 = document.getElementById("provider-1");
  provider1.onchange = function() {
    searchAllProvider();
  };
let provider2 = document.getElementById("provider-2");
provider2.onchange = function() {
  searchAllProvider();
};
let provider3 = document.getElementById("provider-3");
provider3.onchange = function() {
  searchAllProvider();
};



//Lời gọi hàm-----------------------------------------------------------
changeColor();
renderBooks(books);
filterBooks();
filterBooksByPrices();
sortBooks();
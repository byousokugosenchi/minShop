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
let item = document.getElementsByClassName('item');

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

//Hàm sửa lại text mặc định
function addBooks(book) {
  let arrName = [];
  let arrPrice = [];
  let arrProvider = [];
  for (let i = 0; i < book.length; i++) {
    arrName.push(book[i].name);
    arrPrice.push(book[i].price);
    arrProvider.push(book[i].provider);
  }
  for (let i = 0; i < item.length; i++) {
    let oldValue = item[i].children[1];   // Lấy node mặc định
    let newEle = document.createElement('h2');
    newEle.innerText = `${book[i].name}`;
    oldValue.parentNode.replaceChild(newEle, oldValue);  // Replace text 

    let oldPrice = item[i].children[2];
    let newPrice = document.createElement('p');
    newPrice.innerText = `${book[i].price}`;
    oldPrice.parentNode.replaceChild(newPrice, oldPrice);
  }


}

function searchBooks() {
  let arrSort = [];
  let objBooks;
  let buttonPrice = document.getElementById('apply-price-filter');


  buttonPrice.addEventListener("click", function () {
    for (let i = 0; i < books.length; i++) {
      let inputValue = document.getElementById('search').value;
      if (books[i].name.indexOf(inputValue) !== -1) {
        objBooks = books[i];
        arrSort.push(objBooks);
      }

    }
    for (let j = 0; j < item.length; j++) {
      arrSort.forEach(function (element) {
        if (item[j].children[1].innerText !== element.name) {
          item[j].style.display = "none";
        } else {
          item[j].style.display = "block";
        }
      })
    }
  })
}

//Lọc theo giá và tên sách 
function sortbooks() {
  let btn = document.getElementById('sort-by');
  let newArrObj = [];
  
  newArrObj = sortNameBooks(books);
  let arrTmp = [];
  // let arrPricesTmp = [];
  // let newArrObjPrices =[]; 
  // newArrObjPrices = sortPricesBooks(newArrObj);
  // console.log(newArrObjPrices)

  for (let i = 0; i < newArrObj.length; i++) {
    for (let j = 0; j < item.length; j++) {
      if (item[j].children[1].innerText === newArrObj[i].name) {
        arrTmp.push(item[j]);
        break;
      } 
    }
  }


  // Xử lí sự kiện click
  btn.addEventListener("change", function () {
    if (btn.value == "sort by name") {
      for (let i = 0; i < item.length; i++) {
        item[i].outerHTML = arrTmp[i].outerHTML;
      }
    } 

  })
}


function sortNameBooks(objBooks) {
  for (let i = 0; i < objBooks.length - 1; i++) {
    for (let j = i + 1; j < objBooks.length; j++) {
      if (objBooks[i].name > objBooks[j].name) {
        let tam = objBooks[i];
        objBooks[i] = objBooks[j];
        objBooks[j] = tam;
      }
    }
  }
  return objBooks;
}
function sortPricesBooks(bookPrices) {
  for (let i = 0; i < bookPrices.length - 1; i++) {
    for (let j = i + 1; j < bookPrices.length; j++) {
      if (bookPrices[i].price > bookPrices[j].price) {
        let tam = bookPrices[i];
        bookPrices[i] = bookPrices[j];
        bookPrices[j] = tam;
      }
    }
  }
  return bookPrices;
}



//




//Lời gọi hàm-----------------------------------------------------------
changeColor();
addBooks(books);
searchBooks();
sortbooks();
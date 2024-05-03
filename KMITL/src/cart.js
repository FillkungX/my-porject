let shopItemsData = [
  {
    id: "product1",
    name: "product1",
    price: 45,
    desc: "product1",
    img: "",
  },
  {
    id: "product2",
    name: "product2",
    price: 100,
    desc: "product2",
    img: "",
  },
  {
    id: "product3",
    name: "product3",
    price: 25,
    desc: "product3",
    img: "",
  },
  {
    id: "product4",
    name: "product4",
    price: 300,
    desc: "product4",
    img: "",
  },
  {
      id: "product5",
      name: "product5",
      price: 300,
      desc: "product5",
      img: "",
    },
    {
      id: "product6",
      name: "product6",
      price: 300,
      desc: "product6",
      img: "",
    },
    {
      id: "product7",
      name: "product7",
      price: 300,
      desc: "product7",
      img: "",
    },
    {
      id: "product8",
      name: "product8",
      price: 300,
      desc: "product8",
      img: "",
    },
    {
      id: "product9",
      name: "product9",
      price: 300,
      desc: "product9",
      img: "",
    },
];


let label = document.getElementById("label")
let ShopingCart = document.getElementById("shopping-cart")

console.log(shopItemsData)

let basket = JSON.parse(localStorage.getItem("data")) || [];




let calculation = () => {
  let cartIcon = document.getElementById("cartamout");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  };



  calculation();

  let generateCartItem = () => {
    if(basket.length !==0){
      return (ShopingCart.innerHTML = basket.map((x) => { 
        let {id,item} = x;
        let search = shopItemsData.find((y) => y.id === id) || [];
        return `
        <div class = "cartproduct  ">
          <img class="carti" src=${search.img} alt="" />
          
              <div class="textfont textleft carti ">
                  <h4 class="textfont ">
                    <p>${search.name}</p>
                    <p class="price">$ ${search.price}</p>
                  </h4>
                
              </div>
              
              
            
          

          </div>
        </div>
        `;
      }).join(""));
    }
    else{
      ShopingCart.innerHTML = ``;
      label.innerHTML = `
      <h2 class="textfont" >ตระกร้าว่างเชียว ;-; จะไม่ซื้อหน่อยหรอ</h2>
    <a href="index.html">
      <button class="HomeBtn">ไปซื้อเร็วว</button>
    </a>   
      `;
      console.log("ตะกร้าว่างเชียว ;-; จะไม่ซื้อวชิหน่อยหรอ");
    }
  };
    generateCartItem();

    
    let clearCart = () => {
      basket = [];
      generateCartItem();
      localStorage.setItem("data", JSON.stringify(basket));
    };
    
    let TotalAmount = () => {
      if (basket.length !== 0) {
        let amount = basket
          .map((x) => {
            let { item, id } = x;
            let search = shopItemsData.find((y) => y.id === id) || [];
    
            return item * search.price;
          })
          .reduce((x, y) => x + y, 0);
        // console.log(amount);
        label.innerHTML = `
        <h1 class = "textfont">ราคา : $ ${amount}</h2>
        <a href="finished.html">
        <button class="add-to-cart">จ่ายตัง</button>
        </a>
        <button onclick="clearCart()" class="recart">ล้างวชิ</button>
        `;
      } else return;
    };
    
    TotalAmount();
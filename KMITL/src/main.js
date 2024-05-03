let shop = document.getElementById("shop");


let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x;
      let search = basket.find((x) => x.id === id) || [];
      return `
      <div id=product-id-${id} class="product-cards center">
      <div class="product-card">
      <div id="${id}" class="cart-item">
        ${search.item === undefined ? 0 : search.item}
      </div>
      <img height="300px" width="280px" src=${img} alt="">
      <div class="textfont">
        <h3>${name}</h3>
        <p>${desc}</p>
        </div>
        <div class="product-price price center">
          <h2>$ ${price} </h2>
          <div>
          
          </div >
          <button id="add" onclick="increment(${id});"class="add-to-cart">หิ้วใส่ตะกร้า</button>
        </div>
      </div>
    </div>
    `;
    })
    .join(""));
};

generateShop();

let increment = (id) => {
  let selecteditem = id;
  let search =  basket.find((x) => x.id === selecteditem.id);

  if(search === undefined){
    basket.push({
      id: selecteditem.id,
      item: 1,
    })
  }
 else if(search.item === 1){
  document.getElementById("add").addEventListener("click",addnoti());
  
  return;
 }
  else{
 

    search.item += 1;
    
    
    
  }
  localStorage.setItem("data", JSON.stringify(basket));
  update(selecteditem.id);

}

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  caculation();
};
let addnoti = () => {
  // alert("aaaaa")
  // console.log("add icon is change")



  
}
let caculation = () => {
  let carticon = document.getElementById("cartamout");
  carticon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x + y,0);
  // console.log(basket.map((x) => x.item).reduce((x,y) => x + y,0));
};
caculation();

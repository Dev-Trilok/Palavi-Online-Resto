let addToCart = document.querySelector(".add-to-cart");
import axios from "axios";
import noty from 'noty'

let cartCounter = document.querySelector("#cartCounter");
function updateCart(pizza) {
  axios.post("/update-cart", pizza).then((res) => {
    cartCounter.innerText = res.data.totalQty;
    new noty({
        type:"alert",
        timeout:1000,
        progressBar:false,
        text:'Item Added to Cart'
    }).show();
  }).catch(err=>{
    new noty({
        type:"error",
        timeout:1000,
        progressBar:false,
        text:'omething went wrong'
    }).show();
  })
  ;
}
addToCart.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let pizza = JSON.parse(btn.dataset.pizza);
    console.log(pizza);
    updateCart(pizza);
  });
});

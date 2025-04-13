let shoppingCart = [
    {name:"T-shirt", price: 20};
    {name:"Jeans", price: 50};
    {name:"Sneakers", price: 80};
    {name:"Backpack", price: 30};
];

const totalMsg = document.querySelector("#total");
const discountMsg = document.querySelector("#discount");

function calculateTotal(){
let total = 0;
for(let i=0; i < 4; i++){
    total = total + shoppingCart[i].price;
    console.log("total price is")
}

totalMsg.innerHTML = `${total}`;
let discount = 0.1;
let discountedPrice = 0;
if (total>100){
    discountedPrice = total - total*discount
}
console.log(discountPrice);
discountedMsg.innerHTML = `$(discountedPrice)`;

}
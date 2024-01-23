const btnCart=document.querySelector('#icon-cart')
const cart=document.querySelector('.cart');
const btnClose=document.querySelector('.cart-close');
const order=document.querySelector('.btn-buy');
// const addcart=document.querySelectorAll('.addcart');

btnCart.addEventListener('click', () => {
   cart.classList.add('cart-active');
})
btnClose.addEventListener('click', () => {
    cart.classList.remove('cart-active');
})
order.addEventListener('click',() => {
    alert("you ordered successfully, visit again!");
})
function add()
{
    var num1 =document.getElementById("count");
    var currentValue = parseInt(num1.value); 
    var newValue = currentValue + 1;
    num1.value = newValue;
}

// addcart.addEventListener('click',()=>
// {
    
//             var num1 =document.getElementById("count");
//             var currentValue = parseInt(num1.value); 
//             var newValue = currentValue + 1;
//             num1.value = newValue;
    
// })

// document.addEventListener('DOMContentLoaded',loadFood);
// function loadFood(){
// loadContent();
// }
// function loadContent(){
    
//     let btnRemove=document.querySelectorAll('.cart-remove');
//     btnRemove.forEach((btn)=>{
//         btn.addEventListener('click',removeItem);
//     });

//     let qtyElements=document.querySelectorAll('.cart-quantity');
//     qtyElements.forEach((input)=>{
//         input.addEventListener('change',changeQty);
//     });

//     // addtocart
//     let cartBtn=document.querySelectorAll('.addcart');
//     cartBtn.forEach((btn)=>{
//         btn.addEventListener('click',addCart);
//     })
// }
// function removeItem(){
//     // console.log("click");
//     if(confirm('Are you sure to remove'))
//     {
//     this.parentElement.remove();
// }
// }
// function changeQty(){
//     if(isNaN(this.value)|| this.value<1){
//         this.value=1;
//     }
// }
// function addCart(){
//     let food=this.parentElement;
//     let title=food.querySelector('.title').innerHTML;
//     let price=food.querySelector('.price').innerHTML;
//     let imgSrc=food.querySelector('.food-img').src;
// let newProductElement=createCartProduct(title,price,imgSrc);
// let element=document.createElement('div');
// element.innerHTML=newProductElement;
// let cartBasket=document.querySelector('.cart-content');
// cartBasket.append(element);
// loadContent();

// }
// function createCartProduct(title,price,imgSrc)
// {
//     return
//     <div class="cart-box">
//             <img src="${imgSrc}" class="cart-img">
//             <div class="detail-box">
//             <div class="cart-food-title">${title}</div>
//             <div class="price-box">
//             <div class="cart-price">${price}</div>
//             <div class="cart-amnt">${price}</div>
//             </div>
//             <input type="number" value="1" class="cart-quantity"></div>
//             <i class="fa fa-trash-o" style="font-size:24px;color:red;cursor: pointer;" class="cart-remove"></i>
//             </div>
//     ;
// }
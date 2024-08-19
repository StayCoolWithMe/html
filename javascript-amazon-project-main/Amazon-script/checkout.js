import {cart,RemoveAnArray,updateDeliveryOption} from '../data/cart.js';
import { products } from '../data/products.js';
import {deliveryOptions,getDeliveryOption} from '../Amazon-script/deliveryOption.js';
import {payment} from'./payment.js';

// Example usage
const now = dayjs().format('YYYY-MMMM-DD dddd');
console.log(now);

function renderpage()
{


let cartsumary = ''; 
cart.forEach((cartitem)=>
{
    let productId=cartitem.productId;
    let quantity = cartitem.quantity;
        let ismatchitem;
    products.forEach((product)=>
    {
        if(productId===product.id)
        {
            ismatchitem=product;
        }
    });
    if(ismatchitem)
    {
      let deliveryOption='';
      let deliveryOptionId=cartitem.deliveryOptionId;

      deliveryOptions.forEach((options)=>
      {
        if(deliveryOptionId===options.id)
        {
          deliveryOption=options;
        }
      })

              
        let today=dayjs();
        let deliveryDate=today.add(
          deliveryOption.deliveryTime,'days'
        );
        let datestring=deliveryDate.format('MMMM-DD dddd');

      cartsumary+=
      `<div class="cart-item-container cart-item-${ismatchitem.id} is-editing-quantity">
              <div class="delivery-date">
                Delivery date: ${datestring}
              </div>
  
              <div class="cart-item-details-grid">
                <img class="product-image"
                  src="${ismatchitem.image}">
  
                <div class="cart-item-details">
                  <div class="product-name">
                    ${ismatchitem.name}
                  </div>
                  <div class="product-price">
                    ${(ismatchitem.priceCents/100).toFixed(2)} 
                  </div>
                  <div class="product-quantity">
                    <span>
                      Quantity: <span class="quantity_label">${quantity}</span>
                    
                    </span>
                    <span class="update-quantity-link link-primary update_link" data-update-id="${ismatchitem.id}">
                      <span class="Update_text">Update</span>
                      <input class="quantity-input ">
                      <span class="save-quantity-link link-primary save_link">Save</span>
                    </span>
                    <span class="delete-quantity-link link-primary " data-product-id="${ismatchitem.id}">
                      Delete
                    </span>
                  </div>
                </div>
  
                <div class="delivery-options">
                  <div class="delivery-options-title">
                    Choose a delivery option:
                  </div>

      
                  
                  ${deliveryOptionHTML(ismatchitem,cartitem)}
                </div>
                
              </div>
            </div>`
            console.log(ismatchitem.quantity);
        payment();
    }
})

function deliveryOptionHTML(ismatchitem,cartItem)
{
  let html='';

        
  deliveryOptions.forEach((deliveryOption)=>
  {
    let today=dayjs();
    let deliveryDate=today.add(
      deliveryOption.deliveryTime,'days'
    );
    let ischeck=deliveryOption.id===cartItem.deliveryOptionId;

    let datestring=deliveryDate.format('MMMM-DD dddd');
    let priceString=deliveryOption.deliveryPrice===0
    ?'FREE'
    :`${(deliveryOption.deliveryPrice)/100}-`;


html+=
  `  <div class="delivery-option js-delivery-menu" data-product-id="${ismatchitem.id}" data-delivery-option-id="${deliveryOption.id}">
                    <input type="radio"
                    ${ischeck?'checked':''}
                      class="delivery-option-input"
                      name="delivery-option-${ismatchitem.id}">
                    <div>
                      <div class="delivery-option-date">
                        ${datestring}
                      </div>
                      <div class="delivery-option-price">
                        $${priceString} Shipping
                      </div>
                    </div>
                  </div> 
    `
  })
  return html;
}




let totalquantity=0;
function CalculateTheTotalQuantity()
{
  totalquantity=0;
  cart.forEach((cartitem)=>
  {
    totalquantity+=cartitem.quantity;
  });

  return totalquantity;
}

function UpdateCheckoutHeader() {
  let CheckoutHeader = document.querySelector(".CheckoutHeader");
  CheckoutHeader.innerHTML = `Checkout(${CalculateTheTotalQuantity()})`;
}
UpdateCheckoutHeader();


console.log(cartsumary);

document.querySelector(".order-summary").innerHTML=cartsumary;

document.querySelectorAll(".delete-quantity-link").forEach((link)=>
{
          link.addEventListener("click",function()
        {
          let productId=link.dataset.productId;
          console.log(productId);
          RemoveAnArray(productId);
          let container = document.querySelector(`.cart-item-${productId}`);
          container.remove();

          UpdateCheckoutHeader();
          payment();
        })
})


document.querySelectorAll(".update_link").forEach((OneUpdate)=>
{
  OneUpdate.addEventListener(("click"),function()
{

  let OneUpdateId=OneUpdate.dataset.updateId;
  console.log(OneUpdateId);

  let quantityInput = OneUpdate.querySelector(".quantity-input");
    let saveButton = OneUpdate.parentElement.querySelector(".save_link");

    quantityInput.style.display = 'inline-block';
    saveButton.style.display = 'inline-block';

    let Update_text=OneUpdate.parentElement.querySelector(".Update_text");
    let quantityLabel = OneUpdate.parentElement.querySelector(".quantity_label");
    if(Update_text)
    {
      Update_text.style.display="none";

    }
    if(quantityLabel)
    {
      quantityLabel.style.display='none';
    }
});
})


document.querySelectorAll('.save_link').forEach((OneSave) => {
  OneSave.addEventListener("click", function() {
    let OneUpdate = OneSave.closest('.update-quantity-link');
    let quantityInput = OneUpdate.querySelector(".quantity-input");
    let Update_text = OneUpdate.querySelector(".Update_text");
    let quantityLabel = OneUpdate.parentElement.querySelector(".quantity_label");

    Update_text.style.display = "inline-block";
    quantityLabel.style.display = 'inline-block';
  });
});

//make the checking interactive , when click on a option, the date will also get change
document.querySelectorAll(".js-delivery-menu").forEach((Element)=>
{
  Element.addEventListener("change",function()
  {

    let {productId,deliveryOptionId}=Element.dataset;
    updateDeliveryOption(productId,deliveryOptionId);
    renderpage();   
  })
})

}

renderpage();

payment();
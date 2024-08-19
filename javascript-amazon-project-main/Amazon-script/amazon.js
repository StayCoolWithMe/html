import { products } from "../data/products.js";
import { cart } from "../data/cart.js";
import { savestorage } from "../data/cart.js";




let productsHTML='';
products.forEach((product)=>{
    productsHTML+=`
     <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}"> 
          </div>
          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>
          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>
          <div class="product-price">
            $${(product.priceCents/100).toFixed(2)}
          </div>
          <div class="product-quantity-container">
            <select class="select-option" data-select-id="${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div class="product-spacer"></div>
          <div class="added-to-cart AddedToCart" data-product-add="${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>
          <button class="add-to-cart-button button-primary" data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
    `;

});

//this code generate HTML for the whole page


let productGrid = document.querySelector('.products-grid');
productGrid.innerHTML=productsHTML;
let cartQuantity=0;

let ischeck=0;


document.addEventListener("DOMContentLoaded", function() {
    // Initialize totalQuantity from localStorage if available
    let totalQuantity = 0;
    if (cart) {
        cart.forEach(item => {
            totalQuantity += item.quantity;
        });
    }

    document.querySelectorAll('.add-to-cart-button').forEach((button) => {
      button.addEventListener("click", function() {
            let productId = this.dataset.productId;
            let selectedQuantity = parseInt(document.querySelector(`.select-option[data-select-id="${productId}"]`).value, 10);

            let isMatch = false;
            cart.forEach((item) => {
                if (productId === item.productId) {
                    isMatch = true;
                    item.quantity += selectedQuantity;
                }
            });

            if (!isMatch) {
                cart.push({
                    productId: productId,
                    quantity: selectedQuantity,
                    deliveryOptionId:'1'
                });
            }

            savestorage(); // Save cart to localStorage

            // Update totalQuantity based on updated cart
            totalQuantity = 0;
            cart.forEach((item) => {
                totalQuantity += item.quantity;
            });

            document.querySelector(".cart-quantity").textContent = totalQuantity;

            // Show "Added" message (optional)




            //THIS WILL TARGET A CORESPONING ELEMENT
            let AddedToCart=document.querySelectorAll('.AddedToCart');
            AddedToCart.forEach((element)=>
            {
              if(element.dataset.productAdd===productId)
              {
                element.style.opacity=1;
              }
              else{
                element.style.opacity=0;

              }


            });
            
            
        });
    });
});





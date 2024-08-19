import { cart } from '../data/cart.js';
import { getcart } from '../data/products.js';
import {getDeliveryOption} from "../Amazon-script/deliveryOption.js"

export function payment() {
   let productPriceCents = 0;
   let shippingPriceCents = 0;
 
   cart.forEach((cartItem) => {
     let product = getcart(cartItem.productId);
     
     // Ensure product is defined
     if (product) {
       productPriceCents += product.priceCents * cartItem.quantity; // Accumulate total product price
 
       // Get delivery option and ensure it exists
       const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
       if (deliveryOption) {
         shippingPriceCents += deliveryOption.deliveryPrice; // Accumulate total shipping price
       } else {
         console.warn(`Delivery option with ID ${cartItem.deliveryOptionId} not found.`);
       }
     } else {
       console.warn(`Product with ID ${cartItem.productId} not found.`);
     }
   });
 
   // Output the results
   console.log(`Product Price: ${(productPriceCents / 100).toFixed(2)}`);
   console.log(`Shipping Price: ${(shippingPriceCents / 100).toFixed(2)}`);

   let TotalbeforeTax=productPriceCents+shippingPriceCents;
   let Estimate_tax=TotalbeforeTax*0.1;
   let Total=TotalbeforeTax+Estimate_tax;

   let calculateHTMl=`<div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">${(productPriceCents/100).toFixed(2)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">${(shippingPriceCents/100).toFixed(2)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">${(TotalbeforeTax/100).toFixed(2)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">${(Estimate_tax/100).toFixed(2)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">${(Total/100).toFixed(2)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>`;

   document.querySelector(".payment_summary").innerHTML=calculateHTMl;
 }
 
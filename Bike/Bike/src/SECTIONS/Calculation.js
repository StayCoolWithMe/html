// How to store value to array
import { json } from "react-router-dom";
import { Arival_Feature } from "../CONSTAINTS";


    export const cart_array=JSON.parse(localStorage.getItem("cart_array"))|| [];
  

    export const handleAddtoCart=(id)=>{
     const item=Arival_Feature.find((feature)=>(feature.id)==id); 
     let size_selection_options=document.getElementById("size_selection_options").value;
     let Quantity=parseInt(document.getElementById("quantity_selection").value, 10) || 1;
    if(item &&size_selection_options)
    {
      console.log("Indivitual item/size "+item+size_selection_options);
      //add selected size to the item
      const selected_item={...item,size:size_selection_options,quantity:Quantity};
      // check if the items is in the cart
      const existingItem = cart_array.find(cartItem => cartItem.id === item.id && cartItem.size === size_selection_options);
     if(existingItem)
     {
      cart_array[existingItem].quantity+=Quantity;
     }
     else{
      cart_array.push(selected_item);
     }

      console.log("ALL item:"+cart_array);
      console.log("Lenght:"+cart_array.length); 
      console.log("ID: "+item.id);
          handlePrice();
      save_to_local();
     
    }
        
  }

  export function save_to_local(){
    localStorage.setItem("cart_array", JSON.stringify(cart_array));
    alert("Item added to cart!");
    window.location.reload();

  }
  export const handlePrice=()=>{
    let price_div = document.getElementById("price_div");
    let total=0;
   if(cart_array &&Array.isArray(cart_array))
   {
    cart_array.forEach((Element)=>{
      if(Element.price&&Element.quantity)
      {
        total+=Element.quantity*Element.price;
      }
    })
   }
   price_div.innerHTML=total.toString();

  }


  

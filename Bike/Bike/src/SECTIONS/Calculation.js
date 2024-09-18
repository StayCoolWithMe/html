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
      existingItem.quantity+=Quantity;
     }
     else{
      cart_array.push(selected_item);
     }

      console.log("ALL item:"+cart_array);
      console.log("Lenght:"+cart_array.length); 
      console.log("ID: "+item.id);
      save_to_local();
      handlePrice();
      
    
     
    }
        
  }

  export function save_to_local(){
    localStorage.setItem("cart_array", JSON.stringify(cart_array));
    alert("Item added to cart!   Please refresh the cart page, if the prices are not visible");
    
    

  }
  export const handlePrice=()=>{

   let price=document.getElementById("price");
   let price2=document.getElementById("price2");
   let total_with_tax=document.getElementById("total_with_tax");
   let overall=document.getElementById("overall");

   let total=0;
    if(cart_array)
    {
      cart_array.forEach((item)=>{
        total+=(parseFloat(item.price)*parseFloat(item.quantity));
      })
    }
    if(price)
    {
      price.innerHTML=`$${(total).toFixed(2)}`;
      let totaL=(total).toFixed(2);
      price2.innerHTML=`$${(total).toFixed(2)}`;
      total_with_tax.innerHTML=`$${(total*0.1).toFixed(2)}`;
      let tax=(total*0.1).toFixed(2);
      let final=parseFloat(tax)+parseFloat(totaL);
      overall.innerHTML=`$${final.toFixed(2)}`;
      
    }
 
  }
  window.onload=()=>{
    handlePrice();
  }



  

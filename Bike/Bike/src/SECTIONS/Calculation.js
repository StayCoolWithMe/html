// How to store value to array
import { json } from "react-router-dom";
import { Arival_Feature } from "../CONSTAINTS";


    export const cart_array=JSON.parse(localStorage.getItem("cart_array"))|| [];;
  

    export const handleAddtoCart=(id)=>{
     const item=Arival_Feature.find((feature)=>(feature.id)==id); 
     let size_selection_options=document.querySelector(".size_selection_options");
      
    if(item)
    {
      console.log("Indivitual item/size "+item+size_selection_options);



      cart_array.push(item);
      



      console.log("ALL item:"+cart_array);
      console.log("Lenght:"+cart_array.length); 
      console.log("ID: "+item.id);
      save_to_local();
    }
    
    
    
    

    
  }

  export function save_to_local(){
    localStorage.setItem("cart_array", JSON.stringify(cart_array));
    alert("Item added to cart!");
    window.location.reload();
  }


  

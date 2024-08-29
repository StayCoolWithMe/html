// How to store value to array
import { json } from "react-router-dom";
import { Arival_Feature } from "../CONSTAINTS";
    export const cart_array=JSON.parse(localStorage.getItem("cart_array"))|| [];

    export const handleAddtoCart=(id)=>{
//If the find() method finds an element that matches the condition, the value of item will be the entire object that was found.
     const item=Arival_Feature.find((feature)=>(feature.id)==id); 
    let answer =null;
    if(item)
    {
      console.log("Indivitual item"+item);
      cart_array.push(item);
      answer=cart_array.length;
      console.log("ALL item:"+cart_array);
      console.log("Lenght:"+cart_array.length); 
      console.log("ID: "+item.id);
      save_to_local();
    }
    
    console.log("answer:"+answer);

    let duck=document.getElementById("duck");
    duck.innerHTML=answer;
    
    
  }

  export function save_to_local(){
    localStorage.setItem("cart_array", JSON.stringify(cart_array));

  }

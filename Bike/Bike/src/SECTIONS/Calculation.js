
import { Arival_Feature } from "../CONSTAINTS";
    export const cart_array=[];
    
   export const handleAddtoCart=(id)=>{
//If the find() method finds an element that matches the condition, the value of item will be the entire object that was found.
    const item=Arival_Feature.find((feature)=>(feature.id)==id); 
    
    // const newWindow = window.open("about:blank", "_self");
    if(item)
    {
      console.log("Indivitual item"+item);
      cart_array.push(item);
      console.log("ALL item:"+cart_array);
      console.log("Lenght:"+cart_array.length); 
    }
  }

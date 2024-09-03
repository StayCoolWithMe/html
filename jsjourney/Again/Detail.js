console.log('hi');

let container=document.querySelector(".container");
container.innerHTML='';
const get_from_local=() =>{

    let items_from_local=JSON.parse(localStorage.getItem("ITems"))||[];
    console.dir(items_from_local);
    return items_from_local;
};

get_from_local().map((item)=>{
    let div=document.createElement("div");
    
    div.innerHTML+=`<p>${item.name}</p>
                    <p>${item.price}</p>
    `;
    container.appendChild(div);
})



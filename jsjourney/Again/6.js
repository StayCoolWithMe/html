let Name_input = document.querySelector(".Name_input");
let Number_input = document.querySelector(".Number_input");
let date_display = document.querySelector(".date_display");
let submit_btn = document.querySelector(".submit_btn");
let result = document.querySelector(".result");

let name_array = [];
let deposit_array = [];

submit_btn.addEventListener("click", () => {
    let Name_input_value = Name_input.value.trim();
    let Number_input_value = Number_input.value.trim();

    // Check if the name is valid
    if (!is_name_valid(Name_input_value)) {
        alert("Invalid name, please enter a valid name");
        return;
    }

    // Check if the name is duplicate
    if (is_name_duplicate(Name_input_value)) {
        alert("This name is already taken, please enter another one");
        Name_input.value = '';
        Number_input.value = '';
        return;
    }

    // Check if the deposit is valid 
    if (!is_deposit_valid(Number_input_value)) {
        alert("Deposit is invalid, please ensure valid number input");
        return;
    }

    // Add the name and deposit to the arrays
    name_array.push(Name_input_value);
    deposit_array.push(Number_input_value);

    // Rebuild the result content
    updateResultHTML();

    // Clear the input fields
    Name_input.value = '';
    Number_input.value = '';
});

function updateResultHTML() {
    let resultContent = '';
    for (let i = 0; i < name_array.length; i++) {
        let nAme = name_array[i];
        let deposit = deposit_array[i];

        let button = document.createElement("button");
        button.classList.add("delete");
        button.innerHTML = "Delete";
        button.setAttribute("data-index", i);

        resultContent += `Name: ${nAme}<span style="margin-left: 100px;">Deposit: ${deposit}</span>`;
        resultContent += button.outerHTML + '<br>';
    }
    result.innerHTML = resultContent;
    deleteHTML();
}

function deleteHTML() {
    let all_delete = document.querySelectorAll(".delete");
    all_delete.forEach((one_delete) => {
        one_delete.addEventListener("click", function() {
            let index = this.getAttribute("data-index");
            name_array.splice(index, 1);
            deposit_array.splice(index, 1);
            updateResultHTML(); // Rebuild the list after deletion
        });
    });
}






function is_name_duplicate(name)
{
   if(name_array.includes(name))
   {
    return true;
   }
   else{
    return false;
   }
}

function is_name_valid(name)
{
     const nameRegex = /^[a-zA-Z\s]+$/; 
     if(nameRegex.test(name)&& name.length>=2)
     {
        return true;
     }
     else{
        return false;

     }
}

function is_deposit_valid(number)
{
    if (number >= 0 && number <= 1000000) {
        return true;
        }
        else{
            return false;
            }
    
}

// --------------------------------------------------------------------------------------------------
const items=[
    {
        id:1,
        text:"Shoes",
        price:1000,
        made:'China'
    },
    {
        id:2,
        text:"Shirt",
        price:500,
        made:'India',
    },
    {
        id:3,
        text:"Pants",
        price:800,
        made:'USA',
    },
    {
        id:4,
        text:"Watch",
        price:2000,
        made:'Japan',
    },
    {
        id:5,
        text:"Bike",
        price:15000,
        made:'Germany',
    },
]

let container=document.querySelector(".container");
items.forEach((item)=>{
    const div=document.createElement("div");
    const info=`
    <p>${item.text}</p>
    <p>Price: $${item.price}</p>
    <p> Made in: ${item.made}</p>
    `

    let button =document.createElement("button");
    button.textContent="Add to cart";
    button.onclick=()=>handleAdd(item.id);

    div.innerHTML=info;
    div.appendChild(button);
    container.appendChild(div);
})

const array1=[];

function handleAdd(id){
    const item=items.find((Element)=>(Element.id)===id);
    if(item)
    {
        console.log("Indivitual item: "+item);
        array1.push(item);
        console.log("ALL item: "+array1);
        display();    }
}


function display(){
    let dumb=document.querySelector(".dumb");
    dumb.innerHTML='';
    array1.forEach((array2)=>{
        let ht=document.createElement("div");
        ht.innerHTML=`
            <p>${array2.text}</p>
    <p>Price: $${array2.price}</p>
    <p> Made in: ${array2.made}</p>
        `
        let button =document.createElement("button");
        button.textContent="Remove";
        button.onclick=()=>handleRemove(array2.id);
        ht.appendChild(button);
        dumb.appendChild(ht);

    })
}
function handleRemove(id)
{
    const index=array1.findIndex((item)=>(item.id)===id);
    if(index!=-1)
    {
        array1.splice(index,1);
        display();
    }
}


// -------------------------------------------------------------------
const products=[
    {
        name:'shoes',
        price: 100,
        made: 'china',
        id:1,
        type:'cloth',
    },
    {
        name:'bag',
        price:50,
        made: 'india',
        id:2,
        type:'cloth',
    }
    ,{
        name:'shirt',
        price: 70,
        made: 'usa',
        id:3,
        type:'cloth',
    },
    {
        name:'basketball',
        price: 80,
        id:4,
        made: 'usa',
        type:'sport',
    },
    {
        name:'football',
        price: 90,
        made: 'usa',
        id:5,
        type:'sport',
    }
];
let show=document.querySelector(".show");
display_products();
function display_products(){
let holder=document.querySelector(".holder");

products.forEach((product)=>{
    let diV=document.createElement("div");
    diV.innerHTML='';
    diV.innerHTML+=`<p>Product Name: ${product.name}</p>
                    <p>ID: ${product.id}</p>
                    <p>Made from: ${product.made}</p>
                    <p>Price: ${product.price}</p>`;
    let button=document.createElement("button");
    button.textContent="Add to Cart";
    button.onclick=()=>handle_add_product(product.id);
    diV.appendChild(button);
    holder.appendChild(diV);
})
}

 let products_array=[];
function handle_add_product(id){
    const product=products.find((element)=>(element.id)==id);
    if(product)
    {
        console.log("Item indivitually :"+ product);
        products_array.push(product);
        console.log("All item: "+products_array);
        display_product();
    }
}

function display_product(){
    show.innerHTML='';
    
    products_array.forEach((array)=>
    {
        let HTmL=document.createElement("div");
        HTmL.innerHTML+=`<p>Product Name: ${array.name}</p>
                        <p>ID: ${array.id}</p>
                        <p>Price: ${array.price}</p>`;
        let button=document.createElement("button");
        button.innerHTML="Remove from cart";
        button.onclick=()=>handleRemove_product(array.id);
        HTmL.appendChild(button);
        show.appendChild(HTmL);
    })
}

function handleRemove_product(id)
{
    const index=products_array.findIndex((element)=>(element.id)==id);
    if(index!==-1)
    {
        products_array.splice(index,1);
        display_product();
    }
}

let selection=document.querySelector(".selection");
selection.addEventListener("change",function(){
    if(this.value='hi_to_low')
    {
        products.sort((a,b)=>b.price=a.price);
    }
    else{
        products.sort((a,b)=>a.price-b.price);
    }
    display_products();
    
   
})




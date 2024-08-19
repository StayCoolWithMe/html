let cafe_input = document.querySelector(".cafe_input");
let cafe_button = document.querySelector(".cafe_button");
let Dispaly_cafe = document.querySelector(".Dispaly_cafe");

let Cafe_Menu_Array = [];

cafe_button.addEventListener("click", function() {
    let cafe_input_byUser = cafe_input.value.trim().toLowerCase();

    Cafe_Menu_Array.push(cafe_input_byUser);

    Display_Menu_Function();

    cafe_input.value = '';  
});

function Display_Menu_Function() {
    let CafeHTML = '';
    for (let i = 0; i < Cafe_Menu_Array.length; i++) {
        CafeHTML += `<div>
        <h3>Menu: ${Cafe_Menu_Array[i]}</h3> 
        </div>`;

        let Cafe_Delete_Button = document.createElement("button");
        Cafe_Delete_Button.innerHTML = "Delete";
        Cafe_Delete_Button.classList.add("Cafe_Delete_Button");
        Cafe_Delete_Button.setAttribute("index", i);

        CafeHTML += Cafe_Delete_Button.outerHTML;
    }
    Dispaly_cafe.innerHTML = CafeHTML;

    let All_Cafe_Delete_Button = document.querySelectorAll(".Cafe_Delete_Button");
    All_Cafe_Delete_Button.forEach((One_Cafe_Delete_Button) => {
        One_Cafe_Delete_Button.addEventListener("click", function() {
            let index = One_Cafe_Delete_Button.getAttribute("index");
            Cafe_Menu_Array.splice(index, 1);
            Display_Menu_Function();
        });
    });
}

let isSearchBook_Index = 0;
let Search_button = document.querySelector(".Search_button");
let Search_input = document.querySelector(".Search_input");
let Search_Display_div = document.querySelector(".Search_Display_div");

let Search_Menu_Array = [];

Search_button.addEventListener("click", function() {
    let search_input_byUser = Search_input.value.trim().toLowerCase();

    Search_Menu_Array.push(search_input_byUser);

    Search_And_Update_Function(search_input_byUser);
    Search_input.value = '';
});

let INPUT = document.querySelector(".INPUT");
let Chagne_Array = [];
let ISchangeFound = 0;
let currentUpdateIndex = null; // To store the index of the item being updated
let change_Div=document.querySelector(".change_Div");

function Search_And_Update_Function(search_input_byUser) {
    let SearchHTML = '';
    for (let i = 0; i < Cafe_Menu_Array.length; i++) {
        if (Cafe_Menu_Array[i].toLowerCase().includes(search_input_byUser)) {
            isSearchBook_Index = 1;
            SearchHTML += `<div>
            <h3>Search Found</h3><br>
            <h3>Menu: ${Cafe_Menu_Array[i]}</h3>
            <button class="UpdateBTN" data-index="${i}">Update</button> 
            </div>`;
        }
    }
    if (isSearchBook_Index == 0) {
        SearchHTML += `<div>
        <h3>Search not Found</h3><br>
        </div>`;
    }
    isSearchBook_Index = 0;

    Search_Display_div.innerHTML = SearchHTML;

    document.querySelectorAll(".UpdateBTN").forEach((One_UpdateBTN) => {
        One_UpdateBTN.addEventListener("click", function() {
            currentUpdateIndex = One_UpdateBTN.getAttribute("data-index");
            INPUT.innerHTML = '';
            let New_Name_Input = document.createElement("input");
            New_Name_Input.setAttribute("placeholder", "Enter new menu name");
            New_Name_Input.classList.add("New_Name_Input");

            INPUT.appendChild(New_Name_Input);

            let Change = document.createElement("button");
            Change.innerHTML = "Change";
            Change.classList.add("Change");

            INPUT.appendChild(Change);

            Change.addEventListener("click", function() {
                let New_Name_Input_Byuser = New_Name_Input.value.trim();
                if (New_Name_Input_Byuser) {
                    if (currentUpdateIndex !== null) {
                        Cafe_Menu_Array[currentUpdateIndex] = New_Name_Input_Byuser;
                        console.log(Cafe_Menu_Array);
                        let ChangeHTML='';
                        for (let i = 0; i < Cafe_Menu_Array.length; i++) {
                        ChangeHTML+=`<div>item  has successfully changed to ${New_Name_Input_Byuser}</div>`
                        }
                        change_Div.innerHTML=ChangeHTML;

                        
                        INPUT.innerHTML = ''; // Clear the input field
                    } else {
                        console.log("Update index is not set");
                    }
                }
            });
        });
    });
}



let pass=document.querySelector(".pass");
let checkbox=document.querySelector(".checkbox");

checkbox.addEventListener('change',function()
{
    if(checkbox.checked)
        {
            pass.type='text';
        }
        else{
            pass.type='password';
        }
})

const list = document.getElementById('myList');

// Attach event listener to the parent
list.addEventListener('click', function() {
    // Check if the clicked element is a list item
    if (target.tagName === 'LI') {
        alert(`You clicked on: ${target.textContent}`);
    }
});

let text_input=document.querySelector(".text_input");
let sm_btn=document.querySelector(".sm_btn");
let text_result=document.querySelector(".text_result");

let text_array=[];

sm_btn.addEventListener("click",function(event)
{
    event.preventDefault();
    let text_inputed=text_input.value;
    text_array.push(text_inputed);

    display_text();


    text_input.value='';
})

function display_text()
{
    let texthtml='';
    for(let i=0;i<text_array.length;i++)
    {
        texthtml+=`<li>${text_array[i]}`;

        

        let button=document.createElement('button');
         button.classList.add("button");
         button.innerHTML='Delete';
         button.setAttribute("index",i);

         texthtml+=button.outerHTML;
         texthtml += '</li>';
        }
        text_result.innerHTML=texthtml;
        
        document.querySelectorAll('.button').forEach((One_button)=>{
           One_button.addEventListener('click',function()
           {
               let index=One_button.getAttribute('index');
               text_array.splice(index,1);
               display_text();
           })
        })

}

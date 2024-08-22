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

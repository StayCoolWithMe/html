function Sum(num1,num2)
{
    return num1+num2;
}
console.log(Sum(3,4));

function HigestInArray(array)
{
    let higest=array[0];
    if(Array.isArray(array))
    {
        for(let i of array)
        {
            if(i>higest)
            {
                higest=i;
            }
        }
    return higest;
    }
}
console.log(HigestInArray([3,4,5,879,2.45]));

let Evennumber=[];
let Oddnumber=[];
for(let i=0;i<100;i++)
{
    if(i %2 ==0)
    {
        Evennumber.push(i);
    }
    else
    {
        Oddnumber.push(i);
    }
}
console.log(Evennumber);
console.log(Oddnumber);


let vowel=[];
function ReverseString(string)
{
    let reverse= string.split('').reverse().join('');
    for(let i=0;i<string.length;i++)
    {
        let char=string[i].toLowerCase();
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") 
            {
            vowel.push(char);
            }
        }
    return reverse;

}
console.log(ReverseString("Hello"));
console.log(vowel);

/*---------------------------------------------*/

let Calculate=document.querySelector(".Calculate");
let CalculateDiv=document.querySelector(".CalculateDiv");
let Arrayresult=[];
Calculate.addEventListener("click",function()
{
    let num1=parseFloat(document.querySelector(".num1").value);
    let num2=parseFloat(document.querySelector(".num2").value);

    let sum=num1+num2;
    let different=num1-num2;
    let product=num1*num2;
    let quotient=num1/num2;

    Arrayresult.push(
        "The sum is: " + sum,
        "The difference is: " + different ,
        "The product is: " + product,
        "The quotient is: " + quotient
    );
 
     CalculateDiv.innerHTML = Arrayresult.join("<br>"); 
});
/*-----------------------------------------------------------*/
//ERRR000RR
let Fruit=['apple','pinapple','lemon','banana','kiwi'];
let FruitDisplay=document.querySelector(".FruitDisplay").innerHTML=Fruit.join("---");


let AddNewFruit=document.querySelector(".AddNewFruit");
let SortFruit=document.querySelector(".SortFruit");
let DeleteFruit=document.querySelector(".DeleteFruit");

let AddFruit_Input=document.querySelector(".AddFruit_Input");
AddNewFruit.addEventListener("click",function()
{
    AddFruit_Input.style.display='block';
   let submit_fruit=document.querySelector(".submit_fruit");
   submit_fruit.addEventListener("click",function()
   {
    let fruitValue = AddFruit_Input.querySelector("input").value;
    Fruit.push(fruitValue);
    let FruitDisplay=document.querySelector(".FruitDisplay").innerHTML=Fruit.join("---");
    AddFruit_Input.querySelector("input").value = "";
   })
});

DeleteFruit.addEventListener("click",function()
{
    let deleteFirstFruit=Fruit.splice(0,1);
    let FruitDisplay=document.querySelector(".FruitDisplay").innerHTML=Fruit.join("---");

})

SortFruit.addEventListener("click",function()
{
    let SortFruit=Fruit.sort();
    let FruitDisplay=document.querySelector(".FruitDisplay").innerHTML=Fruit.join("---");
})


let RandomNumber = Array.from({ length: 101 }, (_, i) => i);

let NUmbers=document.querySelector(".NUmbers");
let DoubleEven=document.querySelector(".DoubleEven");
let TripleOdd=document.querySelector(".TripleOdd");
let SqareRoot=document.querySelector(".SqareRoot");

NUmbers.innerHTML=`Number:${RandomNumber}`;
let doubleEvenNumber=[];
let TripleOddNumber=[];
let ReplaceGreaterWithSquare=[];
for(let i of RandomNumber)
{
    if(i%2==0)
    {
        
        doubleEvenNumber.push(i*2);
        
    }
     if(i%2 !==0)
    {
       
        TripleOddNumber.push(i*3);

    }
    if(i>10)
    {
        
        ReplaceGreaterWithSquare.push(Math.sqrt(i));
       
    }
    SqareRoot.innerHTML=ReplaceGreaterWithSquare;
    TripleOdd.innerHTML=TripleOddNumber;
    DoubleEven.innerHTML=doubleEvenNumber;
}


    let todo_Display=document.querySelector(".todo_Display");
    let todoInput=document.querySelector(".todoInput");
    let Dates=document.querySelector('.Date');
    let submitBTN=document.querySelector(".submitBTN");

    let Todo=[];


    submitBTN.addEventListener("click",function()
    {
       
        let todoItem=todoInput.value;
        let DateItem=Dates.value;
        
        if(todoItem && DateItem)
        {
            Todo.push(`To Do list: ${todoItem}, Date:${DateItem}`);
            console.log(Todo);

            todoInput.value='';
            Dates.value='';

            display_Todo();
        }
    })

    function display_Todo()
    {
        todo_Display.innerHTML="";

        Todo.forEach((item,index)=>
        {
            let itemContainer=document.createElement("div");
            itemContainer.classList.add("itemContainer");
            itemContainer.style.display='flex';
            itemContainer.style.gap='70px';

            itemContainer.textContent=item;
    

            let button=document.createElement("button");
            button.innerHTML="Delete";
            button.classList.add("delete");
           button.addEventListener("click",function()
            {
                Todo.splice(index,1);
                display_Todo();
            })


            itemContainer.appendChild(button);
            todo_Display.appendChild(itemContainer);            
        })
    }



    let SubmitNote=document.querySelector('.SubmitNote');
    let note_description=document.querySelector('.note_description');
    let note_tittle=document.querySelector('.note_tittle');
    let NotesDisplay=document.querySelector('.NotesDisplay');

    let Notes_Title_Array=[];
    let Notes_Description_Array=[];

    SubmitNote.addEventListener("click",function()
{
    let note_description_Input=note_description.value;
    let note_tittle_Input=note_tittle.value;

    Notes_Description_Array.push(note_description_Input);//pushes
    Notes_Title_Array.push(note_tittle_Input);

    note_description.value='';//clear value
    note_tittle.value='';

    display_Notes();
})

function display_Notes()
{
    NotesDisplay.innerHTML='';
    let Result_String='';
    for(let i=0;i<Notes_Title_Array.length;i++)
    {
      
        Result_String+=`Tittle:${Notes_Title_Array[i]}<br>
                        Description:${Notes_Description_Array[i]}<br><br>`

        
        let button=document.createElement("button");
        button.classList.add("delete");
        button.innerHTML="Delete";
        button.setAttribute("data-index",i);

        button.style.display="block";

        Result_String+=button.outerHTML;
        NotesDisplay.innerHTML=Result_String;

        let ButtonBTN=document.querySelectorAll(".delete");
        ButtonBTN.forEach((BTN_Link)=>
        {
            BTN_Link.addEventListener("click",function()
        {
            let index=button.getAttribute("data-index");
            Notes_Title_Array.splice(index,1);
            Notes_Description_Array.splice(index,1);
            display_Notes(); ///refresh the function

        });
        })
    }
}



let title_field=document.querySelector(".title-field");
let author_field=document.querySelector(".author-field");
let year_field=document.querySelector(".year-field");
let Bookbtn=document.querySelector(".Bookbtn");
let BookAddedDisplay=document.querySelector(".BookAddedDisplay");

//ADD BOOK
let Book_Tittle_array=[];
let author_Title_array=[];
let year_field_array=[];

Bookbtn.addEventListener("click",function()
{
    let title_input=title_field.value;//save the input by user 
    let author_input=author_field.value;
    let year_input=year_field.value;

    Book_Tittle_array.push(title_input);
    author_Title_array.push(author_input);
    year_field_array.push(year_input);

    DisplayBook();
    title_field.value='';
    author_field.value='';
    year_field.value='';
})

function DisplayBook()
{
    let Bookresult='';
    for(let i=0;i<Book_Tittle_array.length;i++)
    {
        Bookresult+=`<div>
                    <h3>Tittle:${Book_Tittle_array[i]}</h3>
                    <h3>Author:${author_Title_array[i]}</h3>
                    <h3>Year of Publish:${year_field_array[i]}</h3>
                    </div>`


        let button=document.createElement("button");//create button
        button.innerHTML="Delete";
        button.classList.add("deleteBook");
        button.setAttribute("BookIndex",i);//create index for each of the book 

        Bookresult+=button.outerHTML;//appendchild the button
    }
    BookAddedDisplay.innerHTML=Bookresult;

    let AlldeleteBTN=document.querySelectorAll(".deleteBook");
    AlldeleteBTN.forEach((One_Delete_BtN)=>
    {
        One_Delete_BtN.addEventListener("click",function()
    {
        let index=One_Delete_BtN.parentElement.getAttribute("BookIndex");
        Book_Tittle_array.splice(index,1);
        author_Title_array.splice(index,1);
        year_field_array.splice(index,1);
        DisplayBook();
    })

    })
}

//Search BOOK
let search_btn=document.querySelector(".search_btn");
let search_field=document.querySelector(".search_field");
let search_result=document.querySelector(".search_result");

let search_Array=[];
let is_search_Found=0;
search_btn.addEventListener("click",function()
{
    let search_Input=search_field.value.trim();
    search_Array.push(search_Input);
    let searchDisplay='';
    search_Array.forEach((serched_Book)=>
    {
        for(let i=0;i<Book_Tittle_array.length;i++)
        {
            let title=Book_Tittle_array[i].trim();
            let author=author_Title_array[i].trim();
            if(title==serched_Book || author===serched_Book)
            {
                is_search_Found=1;
                searchDisplay+=`<div>Book title:${Book_Tittle_array[i]}, Author:${author_Title_array[i]} Found</div><br>`
                    
            }
        }
        if(is_search_Found===0)
        {
            search_result.innerHTML=`<div>Book title:${serched_Book} Not Found</div`;
        } 
        is_search_Found=0;
    })
    search_result.innerHTML=searchDisplay;

})


/*  EROROR WITH THE DELETE OF SEARCH BUTTON
for(let i =0;i<Book_Tittle_array.length;i++)
    {

        let search_delete_BTN=document.createElement("button");
        search_delete_BTN.classList.add("deleteSearch");
        search_delete_BTN.innerHTML="Delete Search";
        search_delete_BTN.setAttribute("search_Index",i);
    
        searchDisplay+=search_delete_BTN.outerHTML;
    
        let Allsearchdelet=document.querySelectorAll(".deleteSearch");
        Allsearchdelet.forEach((searchDelete)=>
        {
            searchDelete.addEventListener("click",function()
            {
                let search_Index=this.getAttribute("search_Index");
                search_Array.splice(search_Index,1);
                DisplayBook();
    
                
            })
        })
    }*/







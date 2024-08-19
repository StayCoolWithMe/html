let Submit=document.querySelector('.submit');
let TODOs=[];
let DATEs=[];
Submit.addEventListener('click',function()
{
    let input=document.querySelector('.input').value;
    let date=document.querySelector('.date').value;
    let output=document.querySelector('.output');
    DATEs.push(date);
    TODOs.push(input);
   output.innerHTML='';
   render ();
})  
function render()
{
    let output=document.querySelector('.output');
    output.innerHTML='';
    for(let i=0;i<TODOs.length;i++)
   {
    let item=document.createElement('div');
    item.classList.add('todo-item');
    item.innerHTML = `<span>Todo: ${TODOs[i]}</span> <span>Date: ${DATEs[i]}</span>`;

    let button=document.createElement('button');
    button.innerHTML='Delete';
    button.classList.add('delete');
    button.addEventListener('click', (function(index) {
        return function() {
            TODOs.splice(index, 1);
            DATEs.splice(index, 1);
            render();
        };

    })(i));
    item.appendChild(button);
    output.appendChild(item);
    }
}

let numbers=[1,5,8,9];
let sum=0;
function Total()
{
    
     for(let i=0;i<numbers.length;i++)
     {
        sum+=numbers[i];
     }
     return sum;
};
let display=Total();
console.log(display);
let double=numbers.map((element)=>element*2);
console.log(double);

let changelastindex=[10,20,30,40];
let change=changelastindex.map((value, index, array)=>{
    if(index===(array.length-1))
    {
        return 99;
    }
    else {
        return value;
    }
}
)
console.log(change);

let Lastvalues=[1,20,30,55,70,88];
let Lastvalue=Lastvalues.reduce((previous,value,index,array)=>{
    if(index==array.length-1)
    {
        return value;
    }
    else 
    {
        return previous;
    }
})
console.log(Lastvalue);

let LastStrings=['hello','how are you','Not really good'];
let LastString=LastStrings.reduce((previous,value,index,array)=>{
    if(index===array.length-1)
    {
        return value;
    }
    else{
        return previous;
    }
})
console.log(LastString);

let swapArray=[1,3,5,6,7,8];
let SwapedArray=swapArray.reverse();
console.log(swapArray);

let StringSwap=['hello','kon papa','how are you'];
let StringSwaped=StringSwap.reverse();
console.log(StringSwaped);

let Addone=[1,-2,-3,4,5];
let OneMore=Addone.map((value)=>{
   
        return value+1;
    
   
})
console.log(OneMore);

let ReturnNum=[[1,2,3,4,5],2];
let ReturnNumber=ReturnNum.map((value,num)=>{
    if(Array.isArray(value))
    {
        return value.map((value)=> value+ReturnNum[1]);
    }
    else {
        return ReturnNum[1];
    }
})
console.log(ReturnNumber);

let MinMaxs=[-5,-4,1,4,6,9,-8];
let Min=Math.min(...MinMaxs);
let Max=Math.max(...MinMaxs);
console.log(`Max:${Max},Min:${Min}`);

let Words=["apple","banana","hello","apple","hello"];
let count=[];
for(let i of Words)
{
    if(count[i])
    {
        count[i]++;
    }
    else{
        count[i]=1;
    }
}console.log(count);
function FindSearch(searcH)
{
    let foundIndex=-1;
    for(let i=0;i<searcH.length;i++)
    {
        if(searcH[i]==='search')
        {
            foundIndex=i;
            console.log(`Found 'search' at index:${foundIndex}`);
            break;
        }
        else{
            console.log("-1");
        } 
    }
}FindSearch(['hello','search','search','search']);

function FindIndex(aray,value)
{
    let Find=-1;
    for(let i=0;i<aray.length;i++)
    {
        if(aray[i]===value)
        {
            Find=1;
            console.log(`Found ${value} at index:${Find}`);
            break;
        }
        else{
            console.log("-1");
        }
    }
}
FindIndex(['hello','world','there','is'],'world');

function RemoveEgg(array)
{
    for(let i=0;i<array.length;i++)
    {
        if(array[i]==='egg')
        {
            array.splice(i,1);
            i--;
           
        }
        console.log(array);
    }
}
RemoveEgg(['milk','egg','pizza','egg']);

function RemoveDuck(array)
{
    let NoDuck=[];
    let remove=0;
    for(let i=0;i<array.length;i++)
    {
        if(array[i]!='duck' || remove<2)
        {
            NoDuck.push(array[i]);
            remove++;
        }
       
    }
    console.log(NoDuck);
    return NoDuck;
}
RemoveDuck(['pig','duck','quack','fish','duck','duck']);

let starT=document.querySelector('.starT');
setTimeout(function(){
    starT.innerHTML="Finished";
},1000);

let continuebtn =document.querySelector('.continuebtn');
continuebtn.addEventListener('click',function(){
    if(continuebtn.innerHTML==="Continue")
    {
        continuebtn.innerHTML="stop";
    }
    else if(continuebtn.innerHTML==="stop")
    {
        continuebtn.innerHTML="Continue";   
    }
})


let stArt=document.querySelector('.stArt');
setInterval(function(){
    stArt.innerHTML="Loading...";
    setInterval(function(){
        stArt.innerHTML="Finished";
    },3000);
},3000);

let ADD=document.querySelector('.ADD');
let Add_result=document.querySelector('.Add_result');
ADD.addEventListener('click',function(){
    Add_result.innerHTML="Item has been added";
});
setInterval(function(){
    Add_result.innerHTML="";
},4000);

let NUmber=0;
setInterval(function(){
    document.title=`started from ${NUmber}`;
    NUmber++;
    setTimeout(function(){
        document.title=`Now in ${NUmber}`;
    },1000);
},3000);











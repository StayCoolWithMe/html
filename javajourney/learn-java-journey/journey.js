let cartquantity=0;
const name=`Vutha`;
console.log(`Name : ${name}`);
let cost=0;
cost=5+(2*3)+9;
const tax=cost*0.1;
console.log(` price: ${cost}`);
console.log(`Tax :${tax}`);
console.log(`Total price:$${cost+tax}`);
let calculator=``;
let age=18;
let holiday=true;
if((age<=6 || age>=65) && !holiday )
{
    console.log("Congratulation!You got a discount");
}
else{
    console.log(`You dont have any discount`);
}
console.log('hello world');

//this is the rock paper scissor
let Computermove='';

let result='';
function function1()
{

    let randomnumber=Math.random();
        if(randomnumber>=0 && randomnumber<=1/3)
        {
           Computermove='Rock';
        }
        else if(randomnumber>=1/3 && randomnumber<=2/3 )
        {
            Computermove='Paper';
        }
        else if(randomnumber>=2/3 && randomnumber<=1)
        {
            Computermove='Scissor';
        }
        console.log(`Computer move is: ${Computermove}`);
}
function function2(playerMove)
{
    if(playerMove==='Rock')
    {

        if(Computermove==='Rock')
        {
            result ='Tie';
        }
        else if(Computermove==='Scissor')
        {
            result='Win';
        }
        else if(Computermove==='Paper'){
            result='lose'
        }
    }
    if(playerMove==='Paper')
    {
        if(Computermove==='Rock')
    {
        result ='Win';
    }
    else if(Computermove==='Scissor')
    {
        result='Lose';
    }
    else if(Computermove==='Paper'){
        result='Tie'
    }
    }
    if(playerMove==='Scissor')
    {
        if(Computermove==='Rock')
    {
        result ='Lose';
    }
    else if(Computermove==='Scissor')
    {
        result='Tie';
    }
    else if(Computermove==='Paper'){
        result='Win'
    }
    }

}
//rock paper scissor end


let headortail='';
function function3(){
    let generatednum=Math.random();
    if(generatednum<=0.5)
    {
        headortail='Head';
    }
    else{
        headortail='Tail';
    }
    console.log(`The result of coin flip is ${headortail}`);
}
guess='Head';
function function4(PlayerMove){
    if(PlayerMove==='Head')
    {
        if(guess===headortail)
        {
            console.log(`You have won`);
        }
        else{
            console.log(`You have lost`);
        }
    }
    if(PlayerMove==='Tail')
    {
        if(guess===headortail)
        {
            console.log(`You have won`);
        }
        else{
            console.log(`You have lost`);
        }
    }

}
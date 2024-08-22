'use strict';
let Multiply=[5,2,4,5];
let Multiplied=Multiply.map((value,index,array)=>{
    return value*2;
});
console.log(Multiplied);

let Positive=[10,2,3,4,6,8,-6,-5,-9,-8];
let Positived=0;
function CountPositive(){
    for(let i of Positive)
    {
        if(i>=0)
        {
           Positived++;
        }
    }
    return Positived;//return should be outside the loop
};
console.log(CountPositive());

function AddNum(array,num){
 if(Array.isArray(array))
 {
    return array.map(value=>value+num);
 }
 return [];
}
console.log(AddNum([2,3,4,5,6,7],3));

let WithoutEgg=[];
function DeleteEgg(array)
{
    let egg=0;
    for(let i of array)
    {
        if(i ==='egg' && egg<2)
        {
            egg++;
            continue;
        }
    WithoutEgg.push(i);
    }
    return WithoutEgg;
}
console.log(DeleteEgg(['pig','egg','duck','egg','hamster','egg','cat']));

let add=document.querySelector('.add');
let add_result=document.querySelector('.add_result');
add.addEventListener('click',function()
{
    setTimeout(function(){
        add_result.innerHTML='Added';
        setTimeout(function(){
            add_result.innerHTML='';  
        },3000);
    },3000);
});





let submit = document.querySelector('.submit');
let UserMove = document.getElementsByName('choice');
let gameResult = document.querySelector('.gameResult'); // Initialize gameResult correctly
gameResult.innerHTML = ''; // Clear the game result initially

submit.addEventListener('click', function () {
    gameResult.innerHTML = '';
    let USerMoves;
    let computerMove = OponentMove();

    for (let i of UserMove) {
        if (i.checked) {
            USerMoves = i.value;
            let consolUser = document.createElement('div');
            consolUser.classList.add('USERMOVE');
            consolUser.innerHTML = `User Move is: ${USerMoves}`;
            gameResult.appendChild(consolUser);
            break;
        }
    }

    let resultMessage = whowin(USerMoves, computerMove);
    let Track=scoreTrack(resultMessage);
    let consolResult = document.createElement('div'); // Create a new div element for result message
    consolResult.classList.add("RESULT");
    consolResult.innerHTML = resultMessage;

    let score=document.createElement('div');
    score.classList.add("SCORE");
    score.innerHTML=Track;
    gameResult.appendChild(consolResult); // Append result message to gameResult
    gameResult.appendChild(score);
});
gameResult.innerHTML = '';

let computerRandomNumber;
let computerMove;

function OponentMove() {
    computerRandomNumber = Math.random();
    if (computerRandomNumber > 0 && computerRandomNumber <= 1 / 3) {
        computerMove = 'rock';
    } else if (computerRandomNumber > 1 / 3 && computerRandomNumber <= 2 / 3) {
        computerMove = 'paper';
    } else if (computerRandomNumber > 2 / 3 && computerRandomNumber <= 1) {
        computerMove = 'scissor';
    }
    let computerBTN = document.createElement("div");
    computerBTN.classList.add("COMPUTER");
    computerBTN.innerHTML = `Computer Move is: ${computerMove}`;
    gameResult.appendChild(computerBTN);
    return computerMove;
}

function whowin(USerMoves, computerMove) {
    let resultMessage;
    if (USerMoves === computerMove) {
        resultMessage = `It's a tie`;
    } else if ((USerMoves === 'rock' && computerMove === 'paper') ||
               (USerMoves === 'paper' && computerMove === 'scissor') ||
               (USerMoves === 'scissor' && computerMove === 'rock')) {
        resultMessage = 'You have lost';
    } else {
        resultMessage = "You Have Win";
    }
    return resultMessage;
}

document.addEventListener('keydown',function (event){
    if(event.key==='s' || event.key==='S')
        {
            let selectedMove=document.querySelector('input[name=choice]:checked');
            if(selectedMove)
                {
                    let USerMoves=selectedMove.value;
                    let computerMove = OponentMove();
                    let resultMessage = whowin(USerMoves, computerMove);
                    alert(resultMessage);
                      scoreTrack(resultMessage); 
                }
                else {
                    console.log("Please select a move first");
                }
        }

    })

    let WIN=0;
    let LOSE=0;
    let TIE=0;
    function scoreTrack(resultMessage)
    {
        let Scoremessage;
        if(resultMessage==='You Have Win')
            {
                WIN++;
                Scoremessage = `Win: ${WIN}, Lose: ${LOSE}, Tie: ${TIE}`;
            }
           else if(resultMessage==='You have lost')
                {
                    LOSE++;
                    Scoremessage = `Win: ${WIN}, Lose: ${LOSE}, Tie: ${TIE}`;
                }
            else if(resultMessage===`It's a tie`)
                {
                    TIE++;
                    Scoremessage = `Win: ${WIN}, Lose: ${LOSE}, Tie: ${TIE}`;
                }

                console.log(Scoremessage);
                updateScore(Scoremessage);
            return Scoremessage;
   
    }

    function updateScore(Scoremessage) {
        let gameResult = document.querySelector('.gameResult');
        gameResult.textContent = Scoremessage;
    }
    
    let ResetBTN = document.querySelector('.ResetBTN');
    ResetBTN.addEventListener('click', function() {
        WIN = 0;
        LOSE = 0;
        TIE = 0;
        let Scoremessage = `Win: ${WIN}, Lose: ${LOSE}, Tie: ${TIE}`;
        console.log(Scoremessage);
        let gameResult = document.querySelector('.gameResult');
        gameResult.textContent = Scoremessage;
    });
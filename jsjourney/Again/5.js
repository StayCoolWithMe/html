let Email=document.querySelector(".Email");
let password=document.querySelector(".password");
let checkbox=document.querySelector(".checkbox");
let submit_BTN=document.querySelector(".submit_BTN");

let Email_Array=[];
let password_Array=[];

let isEmailValid=0;

//SHow OR Hide Password
checkbox.addEventListener("change",function()
{
    if(checkbox.checked)
    {
        password.type="password";
    }
    else{
        password.type="text";
    }
})


submit_BTN.addEventListener("click",function()
{
    let Email_input=Email.value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    Email_Array.push(Email_input);
    console.log(Email_Array);
    isEmailValid=0;

    if(emailPattern.test(Email_input))
    {
        isEmailValid=1;
        console.log(`Email ${Email_input} is valid`);
    }
    else{
        console.log(`Email ${Email_input} is not valid`);
        isEmailValid=0;
    }

    Email.value='';


    let password_input=password.value;
    password_Array.push(password_input);
    console.log(password_Array);
    password.value='';
})


let date=document.querySelector(".date");
let time=document.querySelector(".time");
let service=document.querySelector(".service");
let namE=document.querySelector(".name");
let email=document.querySelector(".email");
let submit_form=document.querySelector(".submit_form");

let date_Array=[];
let time_Array=[];
let service_Array=[];
let name_Array=[];
let email_Array=[];

let date_output=document.querySelector(".date_output");
let time_output=document.querySelector(".time_output");
let service_output=document.querySelector(".service_output");
let name_output=document.querySelector(".name_output");
let email_output=document.querySelector(".email_output");
let sumary=document.querySelector(".sumary");


submit_form.addEventListener("click",function(e)

{
    e.preventDefault();
    let date_input=date.value;
    let time_input=time.value;
    let service_input=service.value;
    let name_input=namE.value;
    let email_input=email.value;

    if(date_input==="" || time_input===""|| service_input==="" || name_input===""|| email_input==="")
    {
        alert("Please fill all the fields");
        
    date.value='';
    time.value='';
    service.value='';
    namE.value='';
    email.value='';
        return;
    }

    if(email.input="" || !isvalidEmail(email_input))
    {
        alert("Email is not valid,please enter a valid one");
        
        date.value='';
        time.value='';
        service.value='';
        namE.value='';
        email.value='';
        return;
    }

    date_Array.push(date_input);
    time_Array.push(time_input);
    service_Array.push(service_input);
    name_Array.push(name_input);
    email_Array.push(email_input);

    displayForm();

    date.value='';
    time.value='';
    service.value='';
    namE.value='';
    email.value='';
})

//check if the email is valid
function isvalidEmail(email)
{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
    
}
function displayForm()
{
    let timeHTML="";


    let dateHTML="";
    let serviceHTML="";
    let nameHTML="";
    let emailHTML="";
    for(let i=0;i<date_Array.length;i++)
    {
        timeHTML+=`<p>Time: ${time_Array[i]}</p>`;
        dateHTML+=`<p>Date: ${date_Array[i]}</p>`;
        serviceHTML+=`<p>Service: ${service_Array[i]}</p>`
        nameHTML+=`<p>Name:${name_Array[i]}</p>`
        emailHTML+=`<p>Email: ${email_Array[i]}</p>`   

        date_output.innerHTML=dateHTML;
        time_output.innerHTML=timeHTML;
        service_output.innerHTML=serviceHTML;
        name_output.innerHTML=nameHTML;
        email_output.innerHTML=emailHTML;

        sumary.style.display='block';


    }

}


let Plus_btn=document.querySelector(".Plus_btn");
let Counter_Tracker=document.querySelector(".Counter_Tracker");
let Minus_btn=document.querySelector(".Minus_btn");

let count=0;
Counter_Tracker.innerHTML=count;
Plus_btn.addEventListener("click",()=>{
    count++;
    Counter_Tracker.innerHTML=count;
})
Minus_btn.addEventListener("click",()=>{
    if(count>0)
        {
            count--;
            Counter_Tracker.innerHTML=count;
            }
            else
            {
                alert("You can't go below 0");
                }
})

//Color chnage Function
let green_color =document.querySelector(".green_color");
let black_color =document.querySelector(".black_color");
let white_color =document.querySelector(".white_color");
let background_text=document.querySelector(".background-text");
let color_optionns=document.querySelector(".color_optionns");

color_optionns.addEventListener("change",function()
{
    let selectcolor=color_optionns.value;
    if(selectcolor=="Green")
    {
        background_text.style.backgroundColor='Green';
    }
    else if(selectcolor=='Black')
    {
        background_text.style.backgroundColor='Black';
    }
    else if(selectcolor=="White")
    {
        background_text.style.backgroundColor='White';
    }


})


//Slider
let pre=document.querySelector(".pre");
let next=document.querySelector(".next");
let slides=document.querySelectorAll(".slides img");    
let intervallId=null; // null mean no value
let current=0;
slider_Function();

function slider_Function()
{
    if(slides.length>0)
    {
    slides[current].classList.add("displayslide");
    
    }

}
function showslide(index)
{
    if(index>=slides.length)
    {
        current=0;
    }
    else if(index<0)
    {
        current=slides.length-1;
    }

    slides.forEach((slide)=>{
        slide.classList.remove("displayslide");

    })
    slides[current].classList.add("displayslide"); //display the img again
}

function preslide()
{
    
    current--;
showslide(current);
}
function nextslide()
{
    
    current++;
    showslide(current);
}

// Digital Clock
let date_reuslt = document.querySelector(".date_reuslt");
let clockk_result = document.querySelector(".clockk_result");

function Data_Function() {
    let date = new Date();
    let hourhtml = date.getHours();
    let hour12 = hourhtml % 12 || 12;
    let ampm = hourhtml >= 12 ? "PM" : "AM";  // Corrected ternary operator
    let Minutehtml = date.getMinutes();
    let Secondshtml = date.getSeconds();

    let clockk_resultHtml = `${hour12.toString().padStart(2, "0")}:${Minutehtml.toString().padStart(2, "0")}:${Secondshtml.toString().padStart(2, "0")} ${ampm}`;
    clockk_result.innerHTML = clockk_resultHtml;

    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();

    let date_resultHTML = `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, "0")}/${year.toString()}`;
    date_reuslt.innerHTML = date_resultHTML;
}

setInterval(Data_Function, 1000);

// Loan Calculator
let amount_input = document.querySelector(".amount_input");
let interest_input = document.querySelector(".interest_input");
let year_input = document.querySelector(".year_input");
let calculate_btn = document.querySelector(".calculate_btn");

calculate_btn.addEventListener("click", () => {
    let amount = amount_input.value;
    let interest = (interest_input.value) / 100;
    let r = interest / 12;
    let months = year_input.value * 12;

    let monthly = (amount * r) / (1 - Math.pow((1 + r), -months));  // Corrected Math.pow()

    // Display the result (you may need to handle this part)
    alert(`Monthly payment: ${monthly.toFixed(2)}`);
});

// Mobile Number Validation
let number_input = document.querySelector(".number_input");
let submit_number = document.querySelector(".submit_number");
let reminder = document.querySelector(".reminder");

submit_number.addEventListener('click', function () {
    let number = number_input.value;
    const phoneRegex = /^0?\d{9,12}$/;

    let is_number_valid = 0;
    if (phoneRegex.test(number)) {
        reminder.innerHTML = 'Your Phone Number is valid';
    } else {
        reminder.innerHTML = 'Your Phone Number is not valid';
    }
    number_input.value = '';  // Corrected typo
});

// Weather API Fetch
let country = document.querySelector(".country");
let get_weather = document.querySelector(".get_weather");
let wrather = document.querySelector(".wrather");

get_weather.addEventListener("click", async function () {
    const city = country.value; // Ensure you use the input value for the city
    const API_Key = `29a8a0b211cf599290b1d2620b494755`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        const weather = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
        wrather.innerHTML = weather;
    } catch (error) {
        wrather.innerHTML = `<p>${error.message}</p>`;
    }
});

// Stopwatch Class Example
class Stopwatch {
    constructor() {
        this.start=document.querySelector(".start");
        this.stop = document.querySelector(".stop");
        this.reset = document.querySelector(".reset");
        this.continueBtn = document.querySelector(".continuebtn");
        this.displayWatch = document.querySelector(".display_watch");
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;

        this.timer=null;

        this.start.addEventListener("click",()=>this.starttime());
        this.stop.addEventListener("click",()=>this.stopfunction());
        this.reset.addEventListener("click",()=>this.resetFunction());

    }

    displayTime() {
        const formattedHours = String(this.hours).padStart(2, '0');
        const formattedMinutes = String(this.minutes).padStart(2, '0');
        const formattedSeconds = String(this.seconds).padStart(2, '0');
        this.displayWatch.innerHTML = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
        
    }

    starttime(){
        if(this.timer) return;  //prevent from multiple timers
        this.timer=setInterval(()=>{
            this.seconds++;
            if(this.seconds===60)
            {
                this.seconds=0;
                this.minutes++;
            }
            if(this.minutes===60)
            {
                this.minutes=0;
                this.hours++;
            }
            this.displayTime();
        },1000);
    }

    stopfunction(){
        clearInterval(this.timer);  //clear interval is use to stop the interval
        this.time=null;
    }

    resetFunction(){

       clearInterval(this.timer);
       this.timer=null;
        this.hours=0;
        this.minutes=0;
        this.seconds=0;
        this.displayTime();
    }

}


const watch = new Stopwatch();
watch.displayTime(); 


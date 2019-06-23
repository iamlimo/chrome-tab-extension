//DOM Elements
const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus');



function setTime(){
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    secs = today.getSeconds()
    let amPm= "";

    if(hour >= 12){
       amPm= "PM";
    }
    else{
        amPm = "AM";
    }
    var newH = hour % 12 || 12;
    time.innerHTML = `${hour} : ${min} : ${secs} ${amPm}`

    setTimeout(setTime,1000)
}
function setBg(){
    let today = new Date();
    let hour = today.getHours();

    if(hour < 12){
        greeting.innerHTML = 'Good Morning'
        
    }
    else if( hour < 18){
        greeting.innerHTML = 'Good Afternoon';
        document.body.style.backgroundImage  = "url('./img/afternoon.jpg')"
    }
    else{
        greeting = 'Good Evening'
        document.body.style.backgroundImage  = "url('./img/night.jpg')"
    }
}
//Add Zeros

function addZero(n){
    return (parseInt(n, 10) < 10 ? '0' : '') + n
}

//Set Name
function setName(e){
    if(e.type === 'keypress'){
        //Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('name', e.target.innerText)
        }
    } else{
        localStorage.setItem('name', e.target.innerText)
    }
}

//Set Name
function setFocus(e){
    if(e.type === 'keypress'){
        //Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('focus', e.target.innerText)
        }
    } else{
        localStorage.setItem('focus', e.target.innerText)
    }
}


//Get Name
function getName(){
    if(localStorage.getItem('name') === null){
        name.innerHTML = '[Enter Name]'
    }
    else{
        name.innerHTML = localStorage.getItem('name')
    }
}

//Get Focus
function getFocus(){
    if(localStorage.getItem('focus') === null){
        focus.innerHTML = '[Enter Focus]'
    }
    else{
        focus.innerHTML = localStorage.getItem('focus')
    }
}

name.addEventListener('keypress', setName);
focus.addEventListener('keypress', setFocus);
//name.addEventlistener('blur', setName);

getName()
getFocus()
setTime()
setBg()
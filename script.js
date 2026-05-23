let count = document.querySelector("#value")
let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus")
let number = 0;
let reset = document.querySelector(".bi-arrow-clockwise")
let num = 0
plus.addEventListener(
"click",
function(){

    number++;

    count.textContent =
    number;

})

minus.addEventListener(
"click",
function(){

    if(number>0)
    {
        number--;
        count.textContent =
        number;
    }
    else
    {
        number
    }

})

reset.addEventListener(
"click",
function(){

    
    number = 0;

    count.textContent = number;

})

let plusBtn =
document.querySelector(".bi-plus-circle");

let settingBtn =
document.querySelector(".bi-gear");

let plusPage =
document.querySelector(".plus-page");

let settingPage =
document.querySelector(".setting-page");



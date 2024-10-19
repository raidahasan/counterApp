let count = document.getElementById("count-el");
count.innerHTML = 0;
let list = "Previous entries: ";

/*
let title = document.getElementsByTagName("h1");
title[0].innerHTML = "Students entered: ";
*/

function increment(){
    let num = parseInt(count.innerHTML);
    count.innerHTML = num+1;
    console.log("Num of times clicked: " + count.innerHTML)
}

function save(){
    record[0].innerHTML = record[0].innerHTML + " - " + count.innerHTML;
}

function people(){

    let container = document.getElementById("container");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for (let i = 0; i < count.innerHTML; i++) {
        let img = document.createElement('img');
        img.src = "stickFigurewithout-removebg-preview.png";
        img.alt = "person";
        img.style.width = "50px";
        img.style.length = "100px";
        container.appendChild(img);
    }
}

let record = document.getElementsByTagName("p");
record[0].innerHTML = "Previous entries: "
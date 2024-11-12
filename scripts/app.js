


let btnChange1 = document.getElementById("btnChange1");
let btnChange2 = document.getElementById("btnChange2");
let btnChange3 = document.getElementById("btnChange3");
let btnChange4 = document.getElementById("btnChange4");
let btnChange5 = document.getElementById("btnChange5");
let btnChange6 = document.getElementById("btnChange6");
let btnChange7 = document.getElementById("btnChange7");
let btnChange8 = document.getElementById("btnChange8");
let btnChange9 = document.getElementById("btnChange9");
let btnChange10 = document.getElementById("btnChange10");


let affectMe1 = document.getElementById("affectMe1");
let affectMe2 = document.getElementById("affectMe2");
let affectMe3 = document.getElementById("affectMe3");
let affectMe4 = document.getElementById("affectMe4");
let affectMe5 = document.getElementById("affectMe5");
let affectMe6 = document.getElementById("affectMe6");
let affectMe7 = document.getElementById("affectMe7");
let affectMe8 = document.getElementById("affectMe8");
let affectMe9 = document.getElementById("affectMe9");
let affectMe10 = document.getElementById("affectMe10");


btnChange1.addEventListener("click", function(){
    // alert("button clicked")
    affectMe1.innerText = "I changed cuh"
});


btnChange2.addEventListener("click", function(){
    // alert("button clicked")
    affectMe2.innerText = "I changed 2 cuh"
    affectMe2.className = "newsStyle";
});

btnChange3.addEventListener("click", function(){
    // alert("button clicked")
    affectMe3.innerText = "me too, cuh!"
    affectMe3.className = "newsStyle " + "wiggle";
    
});

btnChange4.addEventListener("click", function(){
    // alert("button clicked")
    affectMe4.innerText = "you are not my cousin"
    affectMe4.className = "stranger " + "pulse";
    
});

btnChange5.addEventListener("click", function(){
    // alert("button clicked")
    affectMe5.innerText = "hawk 1: Boo"
    affectMe5.className = "hawk1 " + "shake";
    
});

btnChange6.addEventListener("click", function(){
    // alert("button clicked")
    affectMe6.innerText = "hawk 2: AAHHHH"
    affectMe6.className = "hawk2 " + "barrelRoll";
    
});

btnChange7.addEventListener("click", function(){
    // alert("button clicked")
    affectMe7.innerText = "are you Jose?"
    affectMe7.className = "newsStyle " + "wiggle";
    
});

btnChange8.addEventListener("click", function(){
    // alert("button clicked")
    affectMe8.innerText = "no I'm Joseph"
    affectMe8.className = "stranger " + "pulse";
    
});

btnChange9.addEventListener("click", function(){
    // alert("button clicked")
    affectMe9.innerText = "So I went to see my friend and-"
    affectMe9.className = "hawk1";
    
});

btnChange10.addEventListener("click", function(){
    // alert("button clicked")
    affectMe10.innerText = "Bro visited his friend💀"
    affectMe10.className = "hawk2 " + "barrelRoll";
    
});
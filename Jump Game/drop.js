var character = document.getElementById("character");
var block = document.getElementById("block")
var panel = document.getElementById("panel")
var number = document.getElementById("numberPlaceHolder")
var ending = document.getElementById("lose")
var body = document.getElementById("body");
var startButton = document.getElementById("start");
var h6 = document.getElementById("numberDisplayer");
var html = document.getElementsByTagName("html");
var gameConsole = document.getElementById("game");


var count = 0;
function jump() {
    count++;
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500)
    console.log(count);
    
}

var checkDead = setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft < 50 && blockLeft > 0 && characterTop>=479) {
        block.style.animation = "none";
        panel.style.animation = "none";
        block.style.display = "none";
        character.style.display = "none";
        panel.style.display = "none";
        ending.style.display = "block";
        body.style.background = "black";
        
    }
}, 10);



var randomNumber = setInterval(function() {
    
    var panelLeft = parseInt(window.getComputedStyle(panel).getPropertyValue("left"));
    if(panelLeft < -200) {
       randomNumberGen();
    }
    
})

// refreshes the page
function restart() {
    location.reload();
}

function begin() {
    panel.style.animation = "block2 4s infinite";
    block.style.animation ="block 2s infinite";
    startButton.style.display = "none";
    randomNumberGen();
    h6.style.display = "none";
    gameConsole.style.border ="2px solid black";

}
let x;

function randomNumberGen(){
    x = Math.floor((Math.random()*10)+1) ;
    number.innerHTML = x;           

}

function checkValue() {
    var value = document.querySelector('input').value;
    if (value == 5){
        console.log("woohoo")
    }
}



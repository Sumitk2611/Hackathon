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
var submitButton = document.getElementById("submit");
var restartButton = document.getElementById("restart");
var numberReceiver = document.getElementById("theNumber");
var h3 = document.getElementById("content")

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        jump();
    }
}
var count = -1;
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

    if(blockLeft < 65 && blockLeft > 0 && characterTop>=450) {
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
    
    if(panelLeft <= -400) {
      let y = randomNumberGen();
    }
    
}, 2352)

// refreshes the page
function restart() {
    location.reload();
}

function begin() {
    panel.style.animation = "block2 4s infinite";
    block.style.animation ="block 2s infinite";
    startButton.style.display = "none";
    let y = 0;
    randomNumberGen();
    h6.style.display = "none";
    gameConsole.style.border ="2px solid black";

}

var x;
var numbers = [];
let i = 1;
function randomNumberGen(){
    x = Math.floor((Math.random()*10)+1) ;
    number.innerHTML = x;    
    numbers.push(x);
    //stores the random number everytime this function runs (everyone can use)       
    window.localStorage.setItem(i, x);
    i++;
}
console.log(numbers);



function checkValue() {
    var value = document.querySelector('input').value;
    // gets the stored number and uses it in a condition. (everyone can use)
   
    var sum = firstNumber + secondNumber + thirdNumber + fourthNumber + fifthNumber;
    console.log(sum);
    if (value == sum){
        document.getElementById("won").style.display = "block";
        console.log("win")
        window.localStorage.clear();
    } else {
        document.getElementById("lost").style.display = "block";
        console.log("lost")
        window.localStorage.clear();
    }
    submitButton.style.display = "none";
    // restartButton.style.display = "none";
    numberReceiver.style.display = "none";
    content.style.display = "none";

}

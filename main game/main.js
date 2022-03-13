var jumpingGame = document.getElementById("jumpingStickman");
var jumpGameinfo = document.getElementById("jumpGameInfo");

//falling blocks
var falling_blocks_game = document.getElementById("falling-blocks");
var fallingBlockInfo = document.getElementById("fallingGameInfo");

// Drop Game
var dropGame = document.getElementById("dropGame");
var dropGameInfo = document.getElementById("dropGameInfo")

//flappy Bird
var flappyBird = document.getElementById("flappyBird");
var flappyBirdInfo = document.getElementById("flappyGameInfo")

jumpingGame.addEventListener("mouseover", function() {
    if(fallingBlockInfo.style.display = "block" || dropGameInfo.style.display == "block" || flappyBirdInfo.style.display == "block") {
        fallingBlockInfo.style.display = "none";
        dropGameInfo.style.display = "none";
        flappyBirdInfo.style.display = "none";
        jumpGameinfo.style.display = "block";
    } else {
        jumpGameinfo.style.display = "block";
    }
    
    setTimeout(function(){
        jumpGameinfo.style.display = "none";
    }, 5000)
})



falling_blocks_game.addEventListener("mouseover", function() {
    
    if(jumpGameinfo.style.display == "block" || dropGameInfo.style.display == "block" || flappyBirdInfo.style.display == "block"){
        jumpGameinfo.style.display = "none";
        dropGameInfo.style.display = "none";
        flappyBirdInfo.style.display = "none";
        fallingBlockInfo.style.display = "block";
    } else {
        fallingBlockInfo.style.display = "block";
    }
    
    setTimeout(function() {
        fallingBlockInfo.style.display = "none";
    }, 5000)

    
})



dropGame.addEventListener("mouseover", function() {
    if(jumpGameinfo.style.display == "block" || fallingBlockInfo.style.display == "block" || flappyBirdInfo.style.display == "block") {
        jumpGameinfo.style.display = "none";
        fallingBlockInfo.style.display = "none";
        flappyBirdInfo.style.display = "none";
        dropGameInfo.style.display = "block";
    } else {
        dropGameInfo.style.display = "block";
    }
    setTimeout(function() {
        dropGameInfo.style.display = "none";
    }, 5000)

})

// var flappyBird = document.getElementById("flappyBird");
// var flappyBirdInfo = document.getElementById("flappyGameInfo")

flappyBird.addEventListener("mouseover", function() {
    if(jumpGameinfo.style.display == "block" || fallingBlockInfo.style.display == "block" || dropGameInfo.style.display == "block") {
        jumpGameinfo.style.display = "none";
        fallingBlockInfo.style.display = "none";
        dropGameInfo.style.display = "none";
        flappyBirdInfo.style.display = "block";
    } else {
        flappyBirdInfo.style.display = "block";
    }

    setTimeout(function(){
        flappyBirdInfo.style.display = "none";
    }, 5000)
})
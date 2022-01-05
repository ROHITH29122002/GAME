var character=document.getElementById("character");
var block=document.getElementById('block');
document.querySelector('.game-container').onclick = function jump(){
    if( character.classList != "animate"){
        character.classList.add('animate');
        setTimeout(() => {
            character.classList.remove('animate');
        },500);
    }
};


setInterval(() => {
    var charactertop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if( blockleft>10 && blockleft<30 && charactertop>424){
        block.style.animation="none";
        block.style.display="none";
        alert("GAME OVER");
    }
}, 10);

document.querySelector('#restart-button').onclick=function (){
    location.reload();
};
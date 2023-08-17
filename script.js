var timer = 60;
var score = 0;
var hitrn;

function increaseScore(){
score += 10;
document.querySelector("#scoreval").textContent= score;
}

function makeBubble(){
    var clutter = "";



for(var i = 1; i<=176; i++){
    var rn = Math.floor(Math.random()*30)
        clutter  += `<div class="bubbles">${rn}</div>`
}

document.querySelector("#pbtm").innerHTML=clutter;
};
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function runTimer(){
    var timerint =setInterval(function(){
    if(timer>0){ timer-- ;
    document.querySelector("#timeval").textContent=timer;}
    else{
        clearInterval(timerint);
        document.querySelector("#pbtm").innerHTML=`<h1>GAME OVER</h1>`
    }
    },1000)
}
document.querySelector("#pbtm").addEventListener("click",function(dets){
        var clickedNum= Number(dets.target.textContent);
        if(clickedNum === hitrn){
            increaseScore();
            makeBubble();
            getNewHit();
        }
        else{
            makeBubble();
            getNewHit();
        }
})

getNewHit();
runTimer();
makeBubble();
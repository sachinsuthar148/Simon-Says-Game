let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2= document.querySelector('h2');
let a= document.querySelector('a');

document.addEventListener("click",function(){
    if(started==false)
    {
        console.log("game is started");
        started=true;
        a.style.display="none";
        levelUp();
    }
});



function levelUp()
{
    userseq=[];
    level++;
    h2.innerText=`level ${level}`

    let randomIndex=Math.floor(Math.random()*3);
    let randcomColor=btns[randomIndex];
    let randomBtn= document.querySelector(`.${randcomColor}`);
    // console.log(randomIndex);
    // console.log(randcomColor);
    // console.log(randomBtn);

    gameseq.push(randcomColor);
    console.log(gameseq);
    gameFlash(randomBtn);
}


function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    },250);

}


function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);

}

function checkAns(idx){
    //console.log("current level is ",level);
    // let idx=level-1;
    if( userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp,1000);
        }
        // console.log("same value");
    }else{
        h2.innerHTML=`game over! Your score was <b>${level}</b>..<br> press any key to continue`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout( function (){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor=btn.getAttribute("id");

    // console.log(userColor);
    userseq.push(userColor);
    console.log(userseq)
    checkAns(userseq.length-1);
}

let allBtns= document.querySelectorAll('.btn');
for(btn of allBtns)
{
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
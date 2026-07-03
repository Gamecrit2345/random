const player=document.querySelector(".player");

let x=150;

document.addEventListener("keydown",(e)=>{

if(e.key==="ArrowRight"){

x+=6;

}

if(e.key==="ArrowLeft"){

x-=6;

}

player.style.left=x+"px";

});

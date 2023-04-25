const turnid=document.querySelector(".game-info #turnid");
let game=document.getElementById('game');
let container=document.getElementById('container');
let about=document.getElementById('about');
let help=document.getElementById('help');
let winning=document.getElementById('winning');
let playerTurn=document.getElementById('playerTurn');
let getinfo=document.getElementById('getinfo');
let home=document.getElementById('home');
let player1=document.getElementById('player1');
let player2=document.getElementById('player2');
let winningStatus=document.getElementById('winningStatus');
let turn='X';

const box1=document.getElementById('box-1');
const box2=document.getElementById('box-2');
const box3=document.getElementById('box-3');
const box4=document.getElementById('box-4');
const box5=document.getElementById('box-5');
const box6=document.getElementById('box-6');
const box7=document.getElementById('box-7');
const box8=document.getElementById('box-8');
const box9=document.getElementById('box-9');
let check=false;

function checkWin(){
  check=(((box1.innerText!='') && (box1.innerText==box2.innerText) && (box1.innerText==box3.innerText)) || ((box4.innerText!='') && (box4.innerText==box5.innerText) && (box4.innerText==box6.innerText))  || ((box1.innerText!='') && (box1.innerText==box4.innerText) && (box1.innerText==box7.innerText)) || ((box1.innerText!='') && (box1.innerText==box5.innerText) && (box1.innerText==box9.innerText)) || ((box3.innerText!='') && (box3.innerText==box5.innerText) && (box3.innerText==box7.innerText)) || ((box3.innerText!='') && (box3.innerText==box6.innerText) && (box3.innerText==box9.innerText)) || ((box2.innerText!='') && (box2.innerText==box5.innerText) && (box2.innerText==box8.innerText)) || ((box7.innerText!='') && (box7.innerText==box8.innerText) && (box7.innerText==box9.innerText)));
}

function submitinfo(){
  if(player1.value=='' || player2.value==''){
      msg.style.display='inline-block';
      return;
  }
  playerTurn.innerHTML=`
   <span>X - ${player1.value} </span>
   <span>0 - ${player2.value}</span>
   `
   container.style.display='flex';
   about.style.display='block';
   help.style.display='block';
   container.style.justifyContent='center';
   container.style.flexWrap='wrap';
   getinfo.style.display='none';
}
function getInfo(){
  container.style.display='none';
  about.style.display='none';
   help.style.display='none';
   playerTurn.style.display='none';
   getinfo.style.display='block';
}
console.log(box1.innerText);
function changeTurn(){
    return turn==='X'?'0':'X';
}

function gotohome(){
   getinfo.style.display='block';
   container.style.display='none';
   about.style.display='none';
   help.style.display='none';
}


let count=0;
const boxes=document.getElementsByClassName('boxes');
Array.from(boxes).forEach( element =>{
    let boxtext=element.querySelector('.box-text');
    element.addEventListener("click", ()=>{
      if(boxtext.innerText==''){
          boxtext.innerText=String(turn);
          count++;
          turn=changeTurn();
          if(turn=='X'){
             turnid.style.color='red';
             turnid.innerHTML=`Turn of ${turn}`;
          }
          else{
            turnid.style.color='blue';
            turnid.innerHTML=`Turn of ${turn}`;
          }
          if(count>=5){
              checkWin();
              if(check){
                turn=changeTurn();
                if(turn=='X'){
                  winningStatus.innerHTML=`${player1.value} is Winner`;
                  window.speechSynthesis.speak(new SpeechSynthesisUtterance(`${player1.value} is Winner`));
                }
                else{
                  winningStatus.innerHTML=`${player2.value} is Winner`;
                  window.speechSynthesis.speak(new SpeechSynthesisUtterance(`${player2.value} is Winner`));
                }
                game.style.display='none';
                winning.style.display='flex';
                winning.style.flexDirection ='column';
                winning.style.alignItems='center';
                let image=document.querySelector(".winning img");
                image.src='https://thumbs.dreamstime.com/b/winner-star-image-hi-res-rendered-artwork-could-be-used-any-graphic-design-46858837.jpg';
              }
          }
          if(count==9 && !check){
                winningStatus.innerHTML=`Match is tied`;
                window.speechSynthesis.speak(new SpeechSynthesisUtterance('Match is tied'));
                game.style.display='none';
                let image=document.querySelector(".winning img");
                image.src='https://i.stack.imgur.com/gGJEY.png';
                winning.style.display='flex';
                winning.style.alignItems='center';
                winning.style.flexDirection ='column';
          }
       }
    });
});

function Reset(){
    Array.from(boxes).forEach( element =>{
        let boxtext=element.querySelector('.box-text');
        boxtext.innerText='';
    });
    turn='X';
    turnid.innerHTML=`Turn of ${turn}`;
    check=false;
    count=0;
    game.style.display='grid';
    winning.style.display='none';
}

function myFunction() {
    var x = document.getElementById("menu");
    var y=document.getElementById("section");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}
let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".Reset");
let turno = true;//playerX,playerY
let newgame=document.querySelector(".msg-container")
let Newgamebtn=document.querySelector(".new-button");
let msg=document.querySelector("#msg");

const winpatters=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if (turno){
            box.innerText = "O";
            turno=false;
        }
        else{
            box.innerText = "X";
            turno=true;
            
        }
        box.disabled=true; 
        checkwinner(); 
    });
});
const disableBoxes=()=>{
    for(let box of boxes) {
        box.disabled=true;}
};

const enableBoxes=()=>{
    for(let box of boxes) {
        box.disabled=false;
    box.innerText = "";}
};
const showWinner=(winner)=>{
    msg.innerText = `congratulations winner: ${winner}`;
    newgame.classList.remove("hide");    }       
const checkwinner=()=>{
            for(pattern of winpatters){
                let postion1=boxes[pattern[0]].innerText;
                let postion2=boxes[pattern[1]].innerText;
                let postion3=boxes[pattern[2]].innerText;
            if(postion1!='' && postion2!='' && postion3!=''){
            if(postion1==postion2 && postion2==postion3){
                console.log("winner",postion1);
                showWinner(postion1);
                disableBoxes();

                
            }
        }

        }};

const resetgame=()=>{
    turno=true;
    enableBoxes();
    newgame.classList.add("hide");
}

Newgamebtn.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);
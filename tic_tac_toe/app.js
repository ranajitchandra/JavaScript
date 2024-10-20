let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".resetbtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let new_game = document.querySelector(".new_game");
let trun = true;
const winpartten = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
let c =0;
boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        
        if(trun){
            box.innerText = "0";
            trun = false;
        }else{
            box.innerText = "X";
            trun = true;
        }
        box.disabled = true;
        chechwinner();
        
    });
});

const disabledBox = () => {
    for(box of boxes){
        box.disabled = true;
    }
}
const enableBox = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
const resetgame = () =>{
    enableBox();
    msgContainer.classList.add("hide");
    trun = true;

}
const showWinner = (winner) =>{
    msg.innerText=`Winner is ${winner}`;
    msgContainer.classList.remove("hide")
    disabledBox()
}

const chechwinner = () => {
    for(pattern of winpartten){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner", pos1val)
                showWinner(pos1val);
            }
        }

    }
}

resetbtn.addEventListener("click", resetgame)
new_game.addEventListener("click", resetgame)








let btn = document.querySelectorAll(".box");
let Reset = document.querySelector("#reset");
let winner = document.querySelector("#name");
let my = document.querySelector(".my");
let newgame = document.querySelector(".box1");
let container = document.querySelector(".container");


let trun = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [6, 7, 8],
];

const resetGame = () =>{
    trun = true;
    enable();
    my.classList.add("my");
};

btn.forEach((box) => {
    box.addEventListener("click", () =>{
        if (trun) {
            box.innerText = "X";
            trun = false;
        }
       else{
        box.innerText = "O";
        trun = true;
       }
        checkwinner();
    });
});

const disable = () => {
    for(let box of btn){
        box.disabled = true;
    }
}

const enable = () => {
    for(let box of btn){
        box.disabled = false;
        box.innerText = "";
    }
}


const showWinner = (winners) => {
    winner.innerText = `congratulations, you win ${winners}`;
    my.classList.remove("my");
     disable();
}



let checkwinner = () => {
    for(let pattern of winPatterns) {
        let pas1val = btn[pattern[0]].innerText;
        let pas2val = btn[pattern[1]].innerText;
        let pas3val = btn[pattern[2]].innerText;

        if (pas1val !== "" && pas2val !== "" && pas3val !== "") {
            if (pas1val === pas2val && pas2val === pas3val) {   
                showWinner(pas1val);
            }
          
        }
    }
}

newgame.addEventListener("click",resetGame);
Reset.addEventListener("click", resetGame);
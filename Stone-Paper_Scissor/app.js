let stone = document.querySelector(".stone");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let  myChoice = "";
let arr = ["stone","paper","scissor"];
let computerChoice = getComputerChoice();
let score = document.querySelector(".score");
let myWinCount  = 0;
let computerWinCount = 0;

let a = ()=>{
    score.innerHTML= `You : ${myWinCount}    and    Computer :  ${computerWinCount} `;
}
console.log (score.innertext);

function getComputerChoice(){
    let randomIndex = Math.floor(Math.random() * arr.length);

    return arr[randomIndex];
}

stone.onmouseover =()=>{
    myChoice = "stone";
    playGame();
    // console.log("my choice = ",myChoice);
}

paper.onmouseover =()=>{
    myChoice = "paper";
    playGame();
    // console.log("my choice = ",myChoice);
}

scissor.onmouseover =()=>{
    myChoice = "scissor";
    playGame();
    // console.log("my choice = ",myChoice);
}



function playGame() {
    let computerChoice = getComputerChoice();
    console.log("Your choice:", myChoice);
    console.log("Computer's choice:", computerChoice);

    // Game logic
    if (myChoice === "stone") {
        if (computerChoice === "paper") {
            computerWinCount++;
            a();

        } else if (computerChoice === "scissor") {
            myWinCount++;
            a();
        } else {
            console.log("It's a draw! Both chose stone.");
        }
    } else if (myChoice === "paper") {
        if (computerChoice === "scissor") {
            computerWinCount++;
            a();
        } else if (computerChoice === "stone") {
            myWinCount++;
            a();
        } else {
            console.log("It's a draw! Both chose paper.");
        }
    } else if (myChoice === "scissor") {
        if (computerChoice === "stone") {
            computerWinCount++;
            a();
        } else if (computerChoice === "paper") {
            myWinCount++; 
            console.log(computerWinCount,myWinCount);
            a();
        } else {
            console.log("It's a draw! Both chose scissor.");
        }
    }
}
a();
console.log(computerWinCount,myWinCount);
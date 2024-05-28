let humanScore=0,computerScore=0;

function getComputerChoice(){
    c=Math.floor(Math.random()*3)+1;
    return c;
}
function getHumanChoice(){
    let a=prompt("Enter your choice: Rock, Paper or Scissors").toLowerCase();
    if(a=='rock'){
        b=1;
    }
    else if(a=='paper'){
        b=2;
    }
    else if(a=='scissors'){
        b=3;
    }
    else{
        console.log("Please give another choice");
        b=0;
    }
    return b;
}
function playRound(humanChoice,computerChoice){
    if (humanChoice == computerChoice){
        console.log("Tie");
    }
    else if((humanChoice==1 && computerChoice==2) || (humanChoice==2 && computerChoice==3) || (humanChoice==3 && computerChoice==1)){
        console.log("You Lose this round.");
        computerScore++;
    }
    else if((humanChoice==2 && computerChoice==1) || (humanChoice==3 && computerChoice==2) || (humanChoice==1 && computerChoice==3)){
        console.log("You Win this round.");
        humanScore++;
    }
    else{

    }
}

function five(){
    while ((humanScore+computerScore)<5){
        playRound(getHumanChoice(),getComputerChoice());
    }
    if (humanScore>=3){
        console.log("YOU WIN !!");
    }
    else{
        console.log("YOU LOSE !!");
    }
}

five();


items = ["rock", "paper", "scissors"]

function computerSelection(){
    return items[Math.floor(Math.random() * items.length)]
}

function playerSelection(item){
    item = item.toLowerCase()
    if (item == 'rock' || item == 'paper' || item == 'scissors'){
        return item;
    }else{
        console.log("Please enter a valid input");
    }
    
}

let winMessage = "Congratulations you've won!"
let lostMessage = "Oh no you've lost"

function play(item){

    let playerChoice = playerSelection(item)
    let computerChoice = computerSelection()

    if (computerChoice == 'rock' && playerChoice == 'paper'){
        console.log(winMessage);
    }else if(computerChoice == 'paper' && playerChoice == 'scissors' ){
        console.log(winMessage);
    }else if(computerChoice == 'scissors' && playerChoice == 'rock') {
        console.log(winMessage);
    }else if(computerChoice == 'paper' && playerChoice == 'rock'){
        console.log(lostMessage);
    }else if(computerChoice == 'rock' && playerChoice == 'scissors'){
        console.log(lostMessage);
    }else if(computerChoice == 'rock' && playerChoice == 'scissors'){
        console.log(lostMessage);
    }else if(computerChoice == playerChoice){
        console.log("Draw!");
    }
}
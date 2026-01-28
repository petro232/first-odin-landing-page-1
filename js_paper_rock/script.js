let choice=["rock","paper","scissors"]

function getcomputerchoice(grap){
    let rand = Math.floor(Math.random() * 3  )
     
        return grap[rand]
         
}

function getHumanChoice(){
    let human_pick= prompt("pick your move : ")
    if (human_pick !== null ){
        return human_pick.toLowerCase()
    }
}

function playGame(){
    let computer_scoor = 0
    let human_scoor = 0

    function playRound(humanChoice, computerChoice){
    console.log(`You picked: ${humanChoice}, Computer picked: ${computerChoice}`)
    if (humanChoice === computerChoice){
        console.log("draw round")
    }
    else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper"){
        console.log("human won")
        human_scoor +=1
    }
    else if (humanChoice === "rock" && computerChoice == "paper" || humanChoice === "paper" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "rock"){
        console.log("computer won")
        computer_scoor += 1
    }   
}
    for ( let i=0 ; i < 5 ; i++){
        let human_pick =getHumanChoice()
        let computer_pick =getcomputerchoice(choice)
        playRound(human_pick,computer_pick)
    } if (human_scoor > computer_scoor){
        console.log(`human won by: ${human_scoor} to ${computer_scoor} `)
    }
    else if (human_scoor === computer_scoor){
        console.log(`draw: human : ${human_scoor} to  computer: ${computer_scoor} `)
    }
    else {
        console.log(`computer won by: ${computer_scoor} to ${human_scoor} `)
    }

}

 playGame();
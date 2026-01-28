let choice=["rock","paper","scissors"]
 let computer_scoor = 0
let human_scoor = 0


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
 
    function playRound(humanChoice, computerChoice){
    console.log(`You picked: ${humanChoice}, Computer picked: ${computerChoice}`)
    if (humanChoice === computerChoice){
        
        document.querySelector("#results").textContent = "draw round"
        human_scoor += 1
        computer_scoor += 1
        document.querySelector("#score").textContent = `\nhumanscore ${human_scoor} : computerscore : ${computer_scoor}`
    }
    else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper"){
        // console.log(` ${humanChoice} beats  ${computerChoice}`)
        document.querySelector("#results").textContent = ` ${humanChoice} beats  ${computerChoice}`
        human_scoor +=1
        document.querySelector("#score").textContent = `\nhumanscore ${human_scoor} : computerscore : ${computer_scoor}`
    }
    else if (humanChoice === "rock" && computerChoice == "paper" || humanChoice === "paper" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "rock"){
        // console.log(`  ${humanChoice} loses to  ${computerChoice}`)
        document.querySelector("#results").textContent = `${humanChoice} loses to  ${computerChoice}`
        computer_scoor += 1
        document.querySelector("#score").textContent = `\nhumanscore ${human_scoor} : computerscore : ${computer_scoor}`

        if (human_scoor === 5) {
        document.querySelector("#score").textContent += "\nHuman wins the game!"
        btn_rock.disabled = true
        btn_paper.disabled = true
        btn_sissors.disabled = true
}
        else if (computer_scoor === 5) {
        document.querySelector("#score").textContent += "\nComputer wins the game!"
        btn_rock.disabled = true
        btn_paper.disabled = true
        btn_sissors.disabled = true
}
    }   
}






 
 
let btn_rock = document.querySelector("#rock")
let btn_paper = document.querySelector("#paper")
let btn_sissors = document.querySelector("#scissors")
let computer_pick = getcomputerchoice (choice)
 
btn_rock.addEventListener("click", function(){
    let computer_pick = getcomputerchoice(choice)
    playRound("rock", computer_pick)
})

btn_paper.addEventListener("click", function(){
    let computer_pick = getcomputerchoice(choice)
    playRound("paper", computer_pick)
})

btn_sissors.addEventListener("click", function(){
    let computer_pick = getcomputerchoice(choice)
    playRound("scissors", computer_pick)
})

 
 
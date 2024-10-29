let previousText;
let wins = 0 
let losses = 0 
let ties = 0;

document.addEventListener("click", (event) => {
    if(event.target.matches("button")){
        let playerChoice = idToChoice(event.target.id);
        winLossTie(playerChoice, computerChoice());
    }
});

function computerChoice(){
    return Math.floor(Math.random() * (3)) + 1;
}

function idToChoice(choiceId){
    if(choiceId == "rock")
        return 1;
    if(choiceId == "paper")
        return 2;

    return 3;
}

function winLossTie(playerChoice, computerChoice){
    if(playerChoice == computerChoice){
        document.getElementById("ties").textContent = ++ties;
    }
    
    else if((playerChoice == 1 && computerChoice == 3) || 
            (playerChoice == 2 && computerChoice == 1) ||
            (playerChoice == 3 && computerChoice == 2)){
                
                document.getElementById("wins").textContent = ++wins;
    }
    
    else
        document.getElementById("losses").textContent = ++losses;
}

// function amountEach(choices){
//     counter1 = 0;
//     counter2 = 0;
//     counter3 = 0;

//     for(let i=0; i<choices.length; i++){
//         if(choices[i] == 1)
//             counter1++;
        
//         else if(choices[i] == 2)
//             counter2++;

//         else
//             counter3++;

//     }

//     console.log(counter1);
//     console.log(counter2);
//     console.log(counter3);
// }
// MAKE THE COMPUTER CHOOSE
        function computerPlay(){
            let randomNumberForGame = Math.random()*3;
            console.log(randomNumberForGame);
            if (randomNumberForGame > 2){
                return "rock";
            } else if (randomNumberForGame > 1){
                return "paper";
            } else{
                return "scissors";
            }
        }
// MAKE THE PLAYER CHOOSE
        function playerSelection(){
            let playerSelected = prompt("Rock, Paper, or Scissors?");
            playerSelected = playerSelected.toLowerCase()
            return playerSelected;
        }
// COMPARE THE CHOICES AND SEE WHO WON THE ROUND
        function playRound(playerselection, computerselection){
            if (playerselection ==="paper" && computerselection === "scissors"){
                return "computer";
            } else if (playerselection ==="paper" && computerselection ==="rock"){
                return "player";
            } else if (playerselection === "rock" && computerselection === "paper"){
                return "computer";
            } else if (playerselection === "rock" && computerselection === "scissors"){
                return "player";
            } else if (playerselection === "scissors" && computerselection === "paper"){
                return "player";
            } else if (playerselection === "scissors" && computerselection === "rock"){
                return "computer";
            } else {
                return "tie";
            }

        }
// PLAY THE GAME TIL SOMEONE SCORES 5 POINTS

// start game/func on-click/button
// WHILE LOOP UNTIL HUMAN OR COMP SCORE UNDER 5
//      round starts on choice/button click
//      select your weapon
//      computer selects weapon
//      evaluate results, winner gets 1 point, tie = 0
//      return winner
// congratulate winner


        function game(){



        }


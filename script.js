let playerScore = 0;
let computerScore = 0;


// MAKE THE COMPUTER CHOOSE
        function computerPlay(){
            let randomNumberForGame = Math.random()*3;
            if (randomNumberForGame > 2){
                return "rock";
            } else if (randomNumberForGame > 1){
                return "paper";
            } else{
                return "scissors";
            }
        }
// PLAY THE ROUND
        function playRound(playerselection){
            let computerselection = computerPlay();
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
// RESET THE SCORE COUNTER ON GAME STARTUP
        function game(){
            playerScore = 0;
            document.getElementById("playerScore").innerHTML = playerScore;
            computerScore = 0;
            document.getElementById("botScore").innerHTML = computerScore;
            document.getElementById("symbolTitle").classList.remove("hidden");
            document.getElementById("symbolCont").classList.remove("hidden");
            document.getElementById("mainScoreCont").classList.remove("hidden");
            document.getElementById("buttonCont").classList.add("hidden");
            document.getElementById("winCont").classList.add("hidden");
            document.getElementById("loseCont").classList.add("hidden");



        }
// INCREASE THE SCORE FOR THE WINNER
        function wonTheRound(winner){
            if (winner == "player"){
                playerScore++;
                document.getElementById("playerScore").innerHTML = playerScore;
                playerScoreUp();
            }else if(winner == "computer"){
                computerScore++;
                document.getElementById("botScore").innerHTML = computerScore;
                computerScoreUp();
            }else{
                scoreTie();
        }
    }
// CHECK THE SCORE FOR WINNERS
    function scoreChecker(){
        if (playerScore > 4){
            document.getElementById("symbolTitle").classList.add("hidden");
            document.getElementById("symbolCont").classList.add("hidden");
            document.getElementById("winCont").classList.remove("hidden");
            document.getElementById("buttonCont").classList.remove("hidden");
        }else if (computerScore >4){
            document.getElementById("symbolTitle").classList.add("hidden");
            document.getElementById("symbolCont").classList.add("hidden");
            document.getElementById("loseCont").classList.remove("hidden");
            document.getElementById("buttonCont").classList.remove("hidden");
        }
    }
// SCORE CHANGE EFFECTS
function playerScoreUp(){
    let score = document.getElementById("playerScore");
    score.classList.add("playerScoreUp");
    setTimeout(function(){ score.classList.remove("playerScoreUp"); }, 500);
}
function computerScoreUp(){
    let score = document.getElementById("botScore");
    score.classList.add("botScoreUp");
    setTimeout(function(){ score.classList.remove("botScoreUp"); }, 500);
} 
function scoreTie(){
    let score1 = document.getElementById("botScore");
    let score2 = document.getElementById("playerScore");
    score1.classList.add("tie");
    score2.classList.add("tie");
    setTimeout(function(){ score1.classList.remove("tie"); score2.classList.remove("tie"); }, 500);
} 

// MAIN FUNC THAT GETS CALLED ON PLAY CLICK
    function playWith(item){
        let winner = playRound(item);
        wonTheRound(winner);
        scoreChecker();
    }


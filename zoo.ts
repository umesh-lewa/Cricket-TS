class Team{
    totalScore:number;
    players: Player[] = [];
    tempPlayer: Player;

    constructor(){

    }

    insertPlayers(teamType:string){
		for (let index = 0; index < 10; index++) {
			this.players.push(new Player("Team"+teamType+"Player"+index+1,0));
        }
    }
       
    addPlayerScore(currentPlayerName:string,currentBallScore:number){
        for(let i = 0 ; i < this.players.length ; i++){
            if(this.players[i].playerName == currentPlayerName){
                this.players[i].playerScore += currentBallScore;
            }
        }
    }

    updateTotalScoreinBoard(){
        let teamScoreBoard = document.getElementById("");
        teamScoreBoard.innerHTML = this.getCurrentScore();
    }

    getCurrentScore(){
        for(let i = 0 ; i < 10 ; i++){
            this.totalScore += this.players[i].playerScore;
        }

        return this.totalScore;
    }
    
    
}

class Player{
    playerName:string;
    playerScore:number;

    constructor(name:string,score:number){
        this.playerName = name;
        this.playerScore = score;
    }
}

function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function playOneBall(){
    let currentBallScore =  getRandomInteger(1,6);

    if(currentBallScore == 0){

    }

    if(currentTeamSwitch=="A"){
        teamA.addPlayerScore("",currentBallScore);
        teamA.updateTotalScoreinBoard();
    }else{
        teamB.addPlayerScore("",currentBallScore);
        teamB.updateTotalScoreinBoard();
    }
}

let currentTeamSwitch = "A";
let teamA = new Team();
let teamB = new Team();

let totalOversA = 10;
let totalOversB = 10;
let teamACurrentPlayer = "TeamAPlayer1";
let teamBCurrentPlayer = "TeamBPlayer1";

function resetGame(){

    teamA = new Team();
    teamB = new Team();    

    teamA.insertPlayers("A");
    teamB.insertPlayers("B");

    totalOversA = 10;
    totalOversB = 10;

    teamA.totalScore = 0;
    teamB.totalScore = 0;

    teamACurrentPlayer = "TeamAPlayer1";
    teamBCurrentPlayer = "TeamBPlayer1";
    let hitButon = document.getElementById("HitButton");
    hitButon.addEventListener("click",function(){
        playOneBall();
    });

}
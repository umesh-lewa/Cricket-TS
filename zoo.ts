class Team {
    totalScore: number;
    players: Player[] = [];
    tempPlayer: Player;
    tempScore: number;
    maxScoreOFAnyPlayer: number = 0;
    maxScoreOFAnyPlayerName: string;

    constructor() {

    }

    insertPlayers(teamType: string) {
        for (let index = 0; index < 10; index++) {
            this.players.push(new Player("Team" + teamType + "Player" + (+index + 1), 0));
        }
    }

    addPlayerScore(currentPlayerName: string, currentBallScore: number, currentBallNuber: number) {
        for (let i = 0; i < this.players.length; i++) {
            console.log("iterating players to add the current ball score");
            console.log(this.players[i]);
            console.log(this.players[i].playerName);
            console.log(this.players[i].playerScore);
            if (this.players[i].playerName == currentPlayerName) {
                console.log("addPlayerScore : matched player : " + this.players[i].playerName);
                console.log("currentBallScore : " + currentBallScore);
                this.players[i].playerScore = (+this.players[i].playerScore + +currentBallScore);
                console.log("adding incremented score : " + (+this.players[i].playerScore + +currentBallScore));
                console.log(currentPlayerName + "Ball" + currentBallNuber);
                let x = document.getElementById(currentPlayerName + "Ball" + currentBallNuber);
                x.innerHTML = currentBallScore.toString();
                if(currentBallNuber == 6){
                    let totalPayerScore = document.getElementById(currentPlayerName+"Total");
                    totalPayerScore.innerHTML = this.players[i].playerScore.toString();
                }
            }
        }
    }

    addTotalPlayerScoreForZero(currentPlayerName: string, currentBallScore: number, currentBallNuber: number){
        for (let i = 0; i < this.players.length; i++) {
            //console.log("iterating players to add the current ball score");
            //console.log(this.players[i]);
            //console.log(this.players[i].playerName);
            //console.log(this.players[i].playerScore);
            if (this.players[i].playerName == currentPlayerName) {
                console.log("addPlayerScore : matched player : " + this.players[i].playerName);
                console.log("currentBallScore : " + currentBallScore);
                this.players[i].playerScore = (+this.players[i].playerScore + +currentBallScore);
                console.log("adding incremented score : " + (+this.players[i].playerScore + +currentBallScore));
                console.log(currentPlayerName + "Ball" + currentBallNuber);
                //let x = document.getElementById(currentPlayerName + "Ball" + currentBallNuber);
                //x.innerHTML = currentBallScore.toString();
                let totalPayerScore = document.getElementById(currentPlayerName+"Total");
                totalPayerScore.innerHTML = this.players[i].playerScore.toString();
            }
        }
    }

    updateCurrentPlayerScoreInTable(currentPlayer: string, score: number) {

    }

    updateTotalScoreinBoard(team: string) {
        let teamScoreBoard = document.getElementById(team);
        teamScoreBoard.innerHTML = this.getCurrentScore().toString();
        console.log("updateTotalScoreinBoard : " + this.getCurrentScore().toString());
        //teamScoreBoard.innerHTML = this.().toString();
    }

    getCurrentScore() {
        this.tempScore = 0;
        this.totalScore = 0;
        for (let i = 0; i < 10; i++) {
            this.tempScore = (+this.tempScore + +this.players[i].playerScore);
            this.totalScore = (+this.totalScore + +this.players[i].playerScore);
            console.log("getCurrentScore : adding value :" + (+this.totalScore + +this.players[i].playerScore));
        }

        return this.totalScore;
    }

    getManOfTheMatch() {
        this.maxScoreOFAnyPlayer = 0;
        for (let i = 0; i < 10; i++) {
            if (this.players[i].playerScore > this.maxScoreOFAnyPlayer) {
                this.maxScoreOFAnyPlayer = this.players[i].playerScore;
            }
        }

        for (let i = 0; i < this.players.length; i++) {
            if (this.players[i].playerScore == this.maxScoreOFAnyPlayer) {
                this.maxScoreOFAnyPlayerName = this.players[i].playerName;
                console.log("maxScoreOFAnyPlayerName : " + this.maxScoreOFAnyPlayerName);
            }
        }

        let x = document.getElementById("ManOfTheMatch");
        x.innerHTML = this.maxScoreOFAnyPlayerName + "<br>" + "Score : " +this.maxScoreOFAnyPlayer;

        console.log("this.maxScoreOFAnyPlayerName : " + this.maxScoreOFAnyPlayerName);
    }


}

class Player {
    playerName: string;
    playerScore: number;

    constructor(name: string, score: number) {
        this.playerName = name;
        this.playerScore = score;
    }
}

function getRandomInteger(min, max) {
    /*
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    */
    //return Math.floor(Math.random() * 6) + 1;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function playOneBallTeamA() {
    let currentBallScore = getRandomInteger(0, 6);

    if (currentBallScore == 0) {

        teamA.addTotalPlayerScoreForZero(teamACurrentPlayer, currentBallScore, teamACurrentPlayerBallCount);

        teamACurrentPlayerNumber++;
        teamACurrentPlayerBallCount = 1;

        let tempCurPlayer = teamACurrentPlayer.split("");
        let tempCurPlayerNum = tempCurPlayer.pop();
        console.log("tempCurPlayerNum : " + tempCurPlayerNum);
        tempCurPlayerNum = (+tempCurPlayerNum + 1).toString();
        tempCurPlayer.push(tempCurPlayerNum);
        console.log("tempCurPlayerNum : " + tempCurPlayerNum);
        let teamANextPlayer = tempCurPlayer.join("");
        console.log("teamANextPlayer : " + teamANextPlayer);

        teamACurrentPlayer = teamANextPlayer;
        console.log("teamACurrentPlayer : " + teamACurrentPlayer);

        hitButonTeamA.disabled = true;
        hitButonTeamB.disabled = false;

        return;
    }

    if (teamACurrentPlayerBallCount == 7) {
        teamACurrentPlayerNumber++;
        teamACurrentPlayerBallCount = 1;

        //let totalPayerScore = document.getElementById(teamACurrentPlayer+"Total");
        //totalPayerScore.innerHTML ="";

        let tempCurPlayer = teamACurrentPlayer.split("");
        let tempCurPlayerNum = tempCurPlayer.pop();
        console.log("tempCurPlayerNum : " + tempCurPlayerNum);
        tempCurPlayerNum = (+tempCurPlayerNum + 1).toString();
        tempCurPlayer.push(tempCurPlayerNum);
        console.log("tempCurPlayerNum : " + tempCurPlayerNum);
        let teamANextPlayer = tempCurPlayer.join("");
        console.log("teamANextPlayer : " + teamANextPlayer);

        teamACurrentPlayer = teamANextPlayer;
        console.log("teamACurrentPlayer : " + teamACurrentPlayer);

        return;
    }

    teamA.addPlayerScore(teamACurrentPlayer, currentBallScore, teamACurrentPlayerBallCount);
    teamACurrentPlayerBallCount++;
    teamA.updateTotalScoreinBoard("TeamAScoreBoard");
    //hitButonTeamA.setAttribute("disabled","true");
    hitButonTeamA.disabled = true;
    //hitButonTeamB.setAttribute("disabled","false");
    hitButonTeamB.disabled = false;
}

function playOneBallTeamB() {
    let currentBallScore = getRandomInteger(0, 6);

    if (currentBallScore == 0) {

        teamB.addTotalPlayerScoreForZero(teamBCurrentPlayer, currentBallScore, teamBCurrentPlayerBallCount);

        if(teamBCurrentPlayer.indexOf("Player10") != -1){
            console.log("**************** Team B Player 10 has hit 0 Ball ****************");
            hitButonTeamB.disabled = false;
            hitButonTeamA.disabled = false;
            generateResult();
        }
        
        teamBCurrentPlayerNumber++;
        teamBCurrentPlayerBallCount = 1;
        let tempCurPlayer = teamBCurrentPlayer.split("");
        let tempCurPlayerNum = tempCurPlayer.pop();
        console.log("tempCurPlayerNum : " + tempCurPlayerNum);
        tempCurPlayerNum = (+tempCurPlayerNum + 1).toString();
        tempCurPlayer.push(tempCurPlayerNum);
        console.log("tempCurPlayerNum : " + tempCurPlayerNum);
        let teamBNextPlayer = tempCurPlayer.join("");
        console.log("teamBNextPlayer : " + teamBNextPlayer);

        teamBCurrentPlayer = teamBNextPlayer;
        console.log("teamBCurrentPlayer : " + teamBCurrentPlayer);

        hitButonTeamB.disabled = true;
        hitButonTeamA.disabled = false;

        

        return;
    }

    if (teamBCurrentPlayerBallCount == 7) {
        teamBCurrentPlayerNumber++;
        teamBCurrentPlayerBallCount = 1;
        let tempCurPlayer = teamBCurrentPlayer.split("");
        let tempCurPlayerNum = tempCurPlayer.pop();
        console.log("tempCurPlayerNum : " + tempCurPlayerNum);
        tempCurPlayerNum = (+tempCurPlayerNum + 1).toString();
        tempCurPlayer.push(tempCurPlayerNum);
        console.log("tempCurPlayerNum : " + tempCurPlayerNum);
        let teamBNextPlayer = tempCurPlayer.join("");
        console.log("teamBNextPlayer : " + teamBNextPlayer);

        teamBCurrentPlayer = teamBNextPlayer;
        console.log("teamBCurrentPlayer : " + teamBCurrentPlayer);

        if (teamBCurrentPlayer == "TeamBPlayer11") {

            hitButonTeamB.disabled = false;
            hitButonTeamA.disabled = false;
            generateResult();
        }

        return;
    }

    teamB.addPlayerScore(teamBCurrentPlayer, currentBallScore, teamBCurrentPlayerBallCount);
    teamBCurrentPlayerBallCount++;

    //teamB.updateCurrentPlayerScoreInTable();
    teamB.updateTotalScoreinBoard("TeamBScoreBoard");
    //hitButonTeamB.setAttribute("disabled","true");
    hitButonTeamB.disabled = true;
    //hitButonTeamA.setAttribute("disabled","false");
    hitButonTeamA.disabled = false;
}

function generateResult() {
    let teamATotal = teamA.getCurrentScore();
    let teamBTotal = teamB.getCurrentScore();
    let winnerTeam = "";

    if (+teamATotal > +teamBTotal) {
        winnerTeam = "Team 1";
        teamA.getManOfTheMatch();
    } else if (+teamBTotal > +teamATotal) {
        winnerTeam = "Team 2";
        teamB.getManOfTheMatch();
    } else {
        winnerTeam = "Draw";
    }

    let matchWonByDiv = document.getElementById("MatchWonBy");
    matchWonByDiv.innerHTML = winnerTeam;

    hitButonTeamB.disabled = true;
    hitButonTeamA.disabled = true;

    //let manOfTheMatchDiv = document.getElementById("ManOfTheMatch");
    //manOfTheMatchDiv.innerHTML = "";
}


let hitButonTeamA = <HTMLInputElement>document.getElementById("HitBallTButtonTeamA");
hitButonTeamA.addEventListener("click", function () {
    playOneBallTeamA();
});
let hitButonTeamB = <HTMLInputElement>document.getElementById("HitBallTButtonTeamB");
hitButonTeamB.addEventListener("click", function () {
    playOneBallTeamB();
});
hitButonTeamB.disabled = true;

let generateResultButton = <HTMLInputElement>document.getElementById("GenerateResult");
generateResultButton.addEventListener("click", function () {
    generateResult();
});

let currentTeamSwitch = "A";
let teamA = new Team();
let teamB = new Team();
teamA.insertPlayers("A");
teamB.insertPlayers("B");

let totalOversA = 10;
let totalOversB = 10;
let teamACurrentPlayer = "TeamAPlayer1";
let teamACurrentPlayerNumber = 1;
let teamACurrentPlayerBallCount = 1;
let teamBCurrentPlayer = "TeamBPlayer1";
let teamBCurrentPlayerNumber = 1;
let teamBCurrentPlayerBallCount = 1;

function resetGame() {

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

}
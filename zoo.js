var Team = /** @class */ (function () {
    function Team() {
        this.players = [];
        this.maxScoreOFAnyPlayer = 0;
    }
    Team.prototype.insertPlayers = function (teamType) {
        for (var index = 0; index < 10; index++) {
            this.players.push(new Player("Team" + teamType + "Player" + (+index + 1), 0));
        }
    };
    Team.prototype.addPlayerScore = function (currentPlayerName, currentBallScore, currentBallNuber) {
        for (var i = 0; i < this.players.length; i++) {
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
                var x = document.getElementById(currentPlayerName + "Ball" + currentBallNuber);
                x.innerHTML = currentBallScore.toString();
                if (currentBallNuber == 6) {
                    var totalPayerScore = document.getElementById(currentPlayerName + "Total");
                    totalPayerScore.innerHTML = this.players[i].playerScore.toString();
                }
            }
        }
    };
    Team.prototype.addTotalPlayerScoreForZero = function (currentPlayerName, currentBallScore, currentBallNuber) {
        for (var i = 0; i < this.players.length; i++) {
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
                var totalPayerScore = document.getElementById(currentPlayerName + "Total");
                totalPayerScore.innerHTML = this.players[i].playerScore.toString();
            }
        }
    };
    Team.prototype.updateCurrentPlayerScoreInTable = function (currentPlayer, score) {
    };
    Team.prototype.updateTotalScoreinBoard = function (team) {
        var teamScoreBoard = document.getElementById(team);
        teamScoreBoard.innerHTML = this.getCurrentScore().toString();
        console.log("updateTotalScoreinBoard : " + this.getCurrentScore().toString());
        //teamScoreBoard.innerHTML = this.().toString();
    };
    Team.prototype.getCurrentScore = function () {
        this.tempScore = 0;
        this.totalScore = 0;
        for (var i = 0; i < 10; i++) {
            this.tempScore = (+this.tempScore + +this.players[i].playerScore);
            this.totalScore = (+this.totalScore + +this.players[i].playerScore);
            console.log("getCurrentScore : adding value :" + (+this.totalScore + +this.players[i].playerScore));
        }
        return this.totalScore;
    };
    Team.prototype.getManOfTheMatch = function () {
        this.maxScoreOFAnyPlayer = 0;
        for (var i = 0; i < 10; i++) {
            if (this.players[i].playerScore > this.maxScoreOFAnyPlayer) {
                this.maxScoreOFAnyPlayer = this.players[i].playerScore;
            }
        }
        for (var i = 0; i < this.players.length; i++) {
            if (this.players[i].playerScore == this.maxScoreOFAnyPlayer) {
                this.maxScoreOFAnyPlayerName = this.players[i].playerName;
                console.log("maxScoreOFAnyPlayerName : " + this.maxScoreOFAnyPlayerName);
            }
        }
        var x = document.getElementById("ManOfTheMatch");
        x.innerHTML = this.maxScoreOFAnyPlayerName + "<br>" + "Score : " + this.maxScoreOFAnyPlayer;
        console.log("this.maxScoreOFAnyPlayerName : " + this.maxScoreOFAnyPlayerName);
    };
    return Team;
}());
var Player = /** @class */ (function () {
    function Player(name, score) {
        this.playerName = name;
        this.playerScore = score;
    }
    return Player;
}());
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
    var currentBallScore = getRandomInteger(0, 6);
    if (currentBallScore == 0) {
        teamA.addTotalPlayerScoreForZero(teamACurrentPlayer, currentBallScore, teamACurrentPlayerBallCount);
        teamACurrentPlayerNumber++;
        teamACurrentPlayerBallCount = 1;
        var tempCurPlayer = teamACurrentPlayer.split("");
        var tempCurPlayerNum = tempCurPlayer.pop();
        console.log("tempCurPlayerNum : " + tempCurPlayerNum);
        tempCurPlayerNum = (+tempCurPlayerNum + 1).toString();
        tempCurPlayer.push(tempCurPlayerNum);
        console.log("tempCurPlayerNum : " + tempCurPlayerNum);
        var teamANextPlayer = tempCurPlayer.join("");
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
        var tempCurPlayer = teamACurrentPlayer.split("");
        var tempCurPlayerNum = tempCurPlayer.pop();
        console.log("tempCurPlayerNum : " + tempCurPlayerNum);
        tempCurPlayerNum = (+tempCurPlayerNum + 1).toString();
        tempCurPlayer.push(tempCurPlayerNum);
        console.log("tempCurPlayerNum : " + tempCurPlayerNum);
        var teamANextPlayer = tempCurPlayer.join("");
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
    var currentBallScore = getRandomInteger(0, 6);
    if (currentBallScore == 0) {
        teamB.addTotalPlayerScoreForZero(teamBCurrentPlayer, currentBallScore, teamBCurrentPlayerBallCount);
        if (teamBCurrentPlayer.indexOf("Player10") != -1) {
            console.log("**************** Team B Player 10 has hit 0 Ball ****************");
            hitButonTeamB.disabled = false;
            hitButonTeamA.disabled = false;
            generateResult();
        }
        teamBCurrentPlayerNumber++;
        teamBCurrentPlayerBallCount = 1;
        var tempCurPlayer = teamBCurrentPlayer.split("");
        var tempCurPlayerNum = tempCurPlayer.pop();
        console.log("tempCurPlayerNum : " + tempCurPlayerNum);
        tempCurPlayerNum = (+tempCurPlayerNum + 1).toString();
        tempCurPlayer.push(tempCurPlayerNum);
        console.log("tempCurPlayerNum : " + tempCurPlayerNum);
        var teamBNextPlayer = tempCurPlayer.join("");
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
        var tempCurPlayer = teamBCurrentPlayer.split("");
        var tempCurPlayerNum = tempCurPlayer.pop();
        console.log("tempCurPlayerNum : " + tempCurPlayerNum);
        tempCurPlayerNum = (+tempCurPlayerNum + 1).toString();
        tempCurPlayer.push(tempCurPlayerNum);
        console.log("tempCurPlayerNum : " + tempCurPlayerNum);
        var teamBNextPlayer = tempCurPlayer.join("");
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
    var teamATotal = teamA.getCurrentScore();
    var teamBTotal = teamB.getCurrentScore();
    var winnerTeam = "";
    if (+teamATotal > +teamBTotal) {
        winnerTeam = "Team 1";
        teamA.getManOfTheMatch();
    }
    else if (+teamBTotal > +teamATotal) {
        winnerTeam = "Team 2";
        teamB.getManOfTheMatch();
    }
    else {
        winnerTeam = "Draw";
    }
    var matchWonByDiv = document.getElementById("MatchWonBy");
    matchWonByDiv.innerHTML = winnerTeam;
    hitButonTeamB.disabled = true;
    hitButonTeamA.disabled = true;
    //let manOfTheMatchDiv = document.getElementById("ManOfTheMatch");
    //manOfTheMatchDiv.innerHTML = "";
}
var hitButonTeamA = document.getElementById("HitBallTButtonTeamA");
hitButonTeamA.addEventListener("click", function () {
    playOneBallTeamA();
});
var hitButonTeamB = document.getElementById("HitBallTButtonTeamB");
hitButonTeamB.addEventListener("click", function () {
    playOneBallTeamB();
});
hitButonTeamB.disabled = true;
var generateResultButton = document.getElementById("GenerateResult");
generateResultButton.addEventListener("click", function () {
    generateResult();
});
var currentTeamSwitch = "A";
var teamA = new Team();
var teamB = new Team();
teamA.insertPlayers("A");
teamB.insertPlayers("B");
var totalOversA = 10;
var totalOversB = 10;
var teamACurrentPlayer = "TeamAPlayer1";
var teamACurrentPlayerNumber = 1;
var teamACurrentPlayerBallCount = 1;
var teamBCurrentPlayer = "TeamBPlayer1";
var teamBCurrentPlayerNumber = 1;
var teamBCurrentPlayerBallCount = 1;
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

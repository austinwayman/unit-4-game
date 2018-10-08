var wins = 0;
var losses = 0;
var totalScore = 0;

var randNumb = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var totalScoreText = document.getElementById("totalScore-text");



// gem values
var redGem = Math.floor(Math.random() * 12) + 1;
    console.log("Red gem: " + redGem);
    $("#gem1").html("<img src=" + "assets/images/redcrystal.jpeg" + " value=" + redGem + ">");

var blueGem = Math.floor(Math.random() * 12) + 1;
    console.log("Blue gem: " + blueGem);
    $("#gem2").html("<img src=" + "assets/images/bluecrystal.png" + " value=" + blueGem + ">");

var whiteGem = Math.floor(Math.random() * 12) + 1;
    console.log("White gem: " + whiteGem);
    $("#gem3").html("<img src=" + "assets/images/whitecrystal.png" + " value=" + whiteGem + ">");

var yellowGem = Math.floor(Math.random() * 12) + 1;
    console.log("Yellow gem: " + yellowGem);
    $("#gem4").html("<img src=" + "assets/images/yellowcrystal.png" + " value=" + yellowGem + ">");



//    Random number total
var randomTotalText = Math.floor(Math.random() * 120) + 12;
console.log("randomTotal: " + randomTotalText);
$("#randomTotal").html(randomTotalText);



//   text on page
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
totalScoreText.textContent = "Your Total Score Is: " + totalScore;

$(document).ready(function () {

    //    Random number total
    var compPick = Math.floor(Math.random() * 108) + 12;
    console.log("compPick: " + compPick);
    $("#randomNumber").html(compPick);



    // var winsText = document.getElementById("wins-text");
    // var lossesText = document.getElementById("losses-text");
    // var totalScoreText = document.getElementById("totalScore-text");



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


    var wins = 0;
    console.log("wins: " + wins);

    var losses = 0;
    console.log("losses: " + losses);

    var score = 0;
    console.log("score: " + score);


    function reset() {
        compPick = Math.floor(Math.random() * 108) + 12;
        console.log("compPick: " + compPick);
        $(".randomNumber").html(compPick);

        score = 0;
        $(".scoreDisplay").html(score);

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

        $("img").on("click", function () {
            var newScore = score += parseInt($(this).attr("value"));
            console.log("New Score: " + newScore);
            $(".scoreDisplay").html(newScore);

            if (newScore === compPick) {
                wins++;
                $(".wins").html("Wins: " + wins);
                console.log("Wins: " + wins);
                reset();
            }

            else if (newScore > compPick) {
                losses++;
                $(".losses").html("Losses: " + losses);
                console.log("Losses: " + losses);
                reset();
            }
        });
    }
    $("img").on("click", function () {
        var newScore = score += parseInt($(this).attr("value"));
        console.log("New Score: " + newScore);
        $(".scoreDisplay").html(newScore);

        if (newScore === compPick) {
            wins++;
            $(".wins").html("Wins: " + wins);
            console.log("Wins: " + wins);
            reset();
        }

        else if (newScore > compPick) {
            losses++;
            $(".losses").html("Losses: " + losses);
            console.log("Losses: " + losses);
            reset();
        }
    });





    //   text on page
    // winsText.textContent = "Wins: " + wins;
    // lossesText.textContent = "Losses: " + losses;
    // totalScoreText.textContent = "Your Total Score Is: " + totalScore;

});

// next steps:
// 1. capture gem clicks to create the sum inside the totalScore.
// 2. create an if function that will recognize that the total is => the randomTotal
// 3. create an if function that will add 1 to win if guessed correctly or add 1 to loss if the total goes over the randomTotal.
// 4. create a function that will reset all numbers (gems and total) when guessed correctly or goes over randomTotal
// 5. add a "you lose!" when the person loses
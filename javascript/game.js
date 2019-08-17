//Variables
//counter for wins
var winCounter = 0;

//counter for loses
var lossCounter = 0;

//score counter
var counter = 0;

//Number for user to match
var randomNumber;

//crystal numbers
var crystalNumber;



//Crystal buttons
$("#purpleCrystal").on("click", function () {
    counter = counter + crystalNumber[0];
    // $("#crystalNumber").text(crystalNumber);
    checkScore();
    updateHTML()
    
});

$("#pinkCrystal").on("click", function(){
    counter = counter + crystalNumber[1];
    checkScore();
    updateHTML()
    
});

$("#greenCrystal").on("click", function(){
    counter = counter + crystalNumber[2];
    checkScore();
    updateHTML()
    
});

$("#greyCrystal").on("click", function (){
    counter = counter + crystalNumber[3];
    checkScore();
    updateHTML()
    
});

//function to start game
    function initializeGame() {

    counter = 0;

//create random number for score
    randomNumber = Math.floor((Math.random() * 120) + 19);
    console.log(randomNumber);
    $("#randomNumber").text(randomNumber);

//create random number for each crystal
    crystalNumber = [Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) +1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1)];
    console.log(crystalNumber);
    $("#crystalNumber").text(counter);
};
    
    


//check to see if payer equals or goes above random number
function checkScore () {
    if (counter === randomNumber) {
        $("#winsLosses").text("You won!");
        winCounter += 1;
        initializeGame()
    } 
    else if (counter > randomNumber) {
        $("#winsLosses").text("You lost!");
        lossCounter = lossCounter + 1;
        initializeGame()
    }
};

//print to html updated counters
function updateHTML() {
    document.getElementById("crystalNumber").innerHTML = counter;
    document.getElementById("winCounter").innerHTML = winCounter;
    document.getElementById("lossCounter").innerHTML = lossCounter;
};

//start game
initializeGame();

//Print to html
updateHTML();

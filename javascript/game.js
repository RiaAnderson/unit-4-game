//start game
var winCounter =[];
var loseCounter = [];

//create random number for score
var randomNumber = Math.floor((Math.random() * 120) +19);
    console.log(randomNumber);

//create random number for each crystal
var crystalNumber = Math.floor ((Math.random() * 12) +1);
    console.log(crystalNumber);

//Crystal button
$("#oneCrystal").on("click", function(){
    alert("test");
    console.log();
})
//counter for numbers added from crystal clicks

//check to see if payer matches random number

//counter for wins

//check to see if payer goes above random number

//counter for loses

//restart the game after each lose or win
//start game

var loseCounter = [];

//create random number for score
function randomNumber (){
    var randomNumber = Math.floor((Math.random() * 120) +19);
    console.log(randomNumber);
    $("#randomNumber").text(randomNumber);
};

randomNumber ();

// //Crystal button
// $("#oneCrystal").on("click", function(){
//     //create random number for each crystal
// var crystalNumber = Math.floor ((Math.random() * 12) +1);
// console.log(crystalNumber);
// $("#crystalNumber").text(crystalNumber);
// })

//counter for numbers added from crystal clicks
//counter +=crystalValue;
//check to see if payer matches random number

//counter for wins
var winCounter = 0;
//Crystal button
var counter = 0;
$("#oneCrystal").on("click", function(){
    //create random number for each crystal
var crystalNumber = Math.floor ((Math.random() * 12) +1);
console.log(crystalNumber);
    //add crystal total together
    counter += crystalNumber;
    $("#crystalNumber").text(counter);
})

//check to see if payer goes above random number

//counter for loses

//restart the game after each lose or win
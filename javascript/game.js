//start game





randomNumber();

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
    checkScore();
});

$("#pinkCrystal").on("click", function(){
    counter = counter + crystalNumber[1];
    checkScore();
});

$("#greenCrystal").on("click", function(){
    counter = counter + crystalNumber[2];
    checkScore();
});

$("#greyCrystal").on("click", function (){
    counter = counter + crystalNumber[3];
    checkScore();
});

    //create random number for each crystal
    // crystalNumber = Math.floor((Math.random() * 12) + 1);
    // console.log(crystalNumber);

    //create random number for score
function randomNumber() {
    randomNumber = Math.floor((Math.random() * 120) + 19);
    console.log(randomNumber);
    $("#randomNumber").text(randomNumber);
};

function crystalNumber(){
    crystalNumber = [Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) +1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1)]

    console.log(crystalNumber);

}

    counter += crystalNumber;
    $("#crystalNumber").text(counter);


    //check to see if payer equals or goes above random number
    function checkScore () {
    if (counter === randomNumber) {
        $("#winsLosses").text("You won!");
        winCounter += 1;
    } 
    else if (counter >= randomNumber) {
        $("#winsLosses").text("You lost!")
        alert("test");
        lossCounter = lossCounter + 1;
    }
};


//restart the game after each lose or win
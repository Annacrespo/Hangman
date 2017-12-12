/******************** HANGMAN ********************/
let wins = [];
let losses = [];
let guessed = [];
let guessesLeft = 12;
// global variables, objects, calls display 
//starts _ _ _ _ 
//wins displayed
//display each letter of word seperately with gaps
//check of the guessed letters match random word
//don't repeat any letters
//letters only not numbers


document.onkeyup = (e) => {
    // if (event.keyCode >= 65 && event.keyCode <= 90) { guessed.push(e.key); } else
    // { }

    const letters = /^[A-Za-z]+$/;
    if (e.key.match(letters)) {
        guessed.push(e.key);
    }
    //characters only cant repeat letters already guessed
    console.log(guessed);
    let lastGuess = guessed[guessed.length - 1];
    $("#guessed").append(`${lastGuess} `);
    if (guessed.length >= 12) {
        guessedWrong();
        gamePlay();
    }
    // const wordCheck = (e) => {
    //     let userGuess = e.key;
    //     //check if guessed words match random word if match add win reset guessed
    //     if (userGuess === randomWord) {
    //         wins++
    //         console.log(guessed === randomWord);
    //     }
    //     guessesLeftReset();
    // }
    // wordCheck();
}

const guessedWrong = () => {
    losses++;
    guessesLeft--;
    guessed = [];
    $("#losses").append("| ");
    if (losses === 6) {
        alert("LOSER");
        losses = [];
        $("#losses").html("");
    }
    guessesLeftReset();
}

const guessesLeftReset = () => {
    $("#guessesLeft").html(`${guessesLeft}`)
    if (guessesLeft === 0) {
        guessesLeft = 12;
        $("#guessesLeft").html(12);
    }
    $("#guessed").empty();
}
//initialize game function
const gamePlay = () => {

    function generateWord() {
        const wordBank = ["cow", "monkey", "zebra", "giraffe"];
        console.log(wordBank.length);
        let wordIndex = Math.floor(Math.random() * wordBank.length);
        let randomWord = wordBank[wordIndex];
        let lettersRandomWord = randomWord.split("");
        let blanks = lettersRandomWord.length;
        let blanksAndSuccesses = [];
        //populate blanks
        for (var i = 0; i<blanks; i++) {
            blanksAndSuccesses.push("_");
        }
        document.getElementById("currentWord").innerHTML = blanksAndSuccesses.join(" ");
        $("#currentWord").html(`<h2>${blanksAndSuccesses}</h2>`);
    }

    generateWord();
}

const gameReset = () => {
    wins = [];
    losses = [];
    guessed = [];
    guessesLeftReset();
    gamePlay();
}
gamePlay();

/* let userGuess = event.key;


if (userGuess === computerChoice) {
    wins++;
    reset();
} else if ((userGuess !== computerChoice) && (guesses === 0)) {
    losses++;
    reset();
}
else {
    guesses--;
    
} 
// 

if (userGuess !== computerChoice && (!guessed.includes(userGuess))) {
    guessed.push(userGuess);
}

*/
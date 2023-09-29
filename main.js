let rightNumber = Math.floor(Math.random() * 10)  
// console.log(rightNumber);

let attempts = 3

let guessInput = document.getElementById("guessInput")
let submitNumber = document.getElementById ("guessSubmit")
let msg = document.getElementById("massage")
let attemptsLeft = document.getElementById("attempts")


submitNumber.addEventListener("click", () => {
    let guessNumber = parseInt(guessInput.value)
    guessInput.value = " "

    attemptsLeft.innerHTML = `<span>Attempts Left: ${attempts-1}</span>`
    
    if(isNaN(guessNumber) || guessNumber < 1 || guessNumber > 9){
        // console.log("not match");
        msg.textContent = "Please enter a valid number between 1 and 9."
        return;
    }
    
    attempts --;

    if (guessNumber === rightNumber){
        msg.textContent = `Congratulations! You guessed the correct number (${rightNumber})!`
        guessInput.disabled = true;
        submitNumber.disabled = true;

    }
    else{
        msg.textContent =  `Wrong guess! The correct ans  is ${(guessNumber < rightNumber ) ? 'greater' : 'smaller'}.`;

        if (attempts === 0) {
            msg.textContent = ` You've run out of attempts!. The correct number was ${rightNumber}.`;
            guessInput.disabled = true;
            guessSubmit.disabled = true;
        }
    }
    // console.log(guessNumber);
})
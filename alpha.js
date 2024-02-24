
function continueGame() {
    const alphabetRand = getRandomAlphabet()
   
    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText = alphabetRand
    setBackgroundColor(alphabetRand);

}

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}
// for pressing individual key in the keyboard 

function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    console.log( 'player pressed', playerPressed)


    
    // key player is expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    
}


document.addEventListener('keyup', handleKeyboardKeyUpEvent)




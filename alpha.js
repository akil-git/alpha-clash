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

    // EXPECTED PRESS

    const currentAlpha = document.getElementById('current-alphabet')
    const presentAlphabet = currentAlpha.innerText
    const expectedAlphabet = presentAlphabet.toLowerCase()
    
    console.log(playerPressed, expectedAlphabet);

    //  CHECKING matched 

    if (playerPressed == expectedAlphabet) {
        console.log("you have gained a point");
        continueGame()
        RemoveBackgroundColor(expectedAlphabet)
        
    }
    else{
        console.log('you lose a life');
    }


    
   

    
}


document.addEventListener('keyup', handleKeyboardKeyUpEvent)




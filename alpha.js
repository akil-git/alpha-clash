function continueGame() {
    const alphabetRand = getRandomAlphabet()
    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText = alphabetRand
    setBackgroundColor(alphabetRand);

}
function play() {
    // clear the screen portion 
    // new portion 
    setElementValue('current-score',5)
    setElementValue('rest-score',0)
    hideElementById('home-screen');
    hideElementById('score')
    showElementById('play-ground');
    continueGame();
}
 const audio = new Audio()
// for pressing individual key in the keyboard 
function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    console.log( 'player pressed', playerPressed)
    if (playerPressed === 'Escape') {
        gameover()
    }

    // EXPECTED PRESS

    const currentAlpha = document.getElementById('current-alphabet')
    const presentAlphabet = currentAlpha.innerText
    const expectedAlphabet = presentAlphabet.toLowerCase()
    
    console.log(playerPressed, expectedAlphabet);

    //  CHECKING matched 

    if (playerPressed == expectedAlphabet) {
        console.log("you have gained a point");
        audio.src= "../audio/right.mp3";
        audio.play();
        continueGame()
        RemoveBackgroundColor(expectedAlphabet)

        // update score 
        // get the current score 
        const scoreELement = document.getElementById('rest-score')
        const scoreELementText = scoreELement.innerText
        const Element = parseInt(scoreELementText)
        const newScore = Element + 1 
        scoreELement.innerText = newScore
        
    }
    else{
        console.log('you lose a life');
        audio.src ="../audio/wrong2.mp3";
        audio.play();
        const getTheCurrentLife = document.getElementById('current-score')
        const CurrentLife = getTheCurrentLife.innerText
        const life = parseInt(CurrentLife)
        const lifeScore = life - 1 
        getTheCurrentLife.innerText = lifeScore
        if (lifeScore === 0) {
            gameover()
        }

    }


    
   

    
}
function gameover(){
    hideElementById('play-ground')
    showElementById('score')
    // update final score 
    const lastScore = getTextElementValueById('rest-score')
    

    setElementValue('game-end-score',lastScore)

    const currentAlphabet =  textElementById('current-alphabet')
    RemoveBackgroundColor(currentAlphabet)
   
    
}


document.addEventListener('keyup', handleKeyboardKeyUpEvent)





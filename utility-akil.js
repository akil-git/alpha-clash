function hideElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}

function showElementById(elementId){
   const element = document.getElementById(elementId)
   element.classList.remove('hidden');
}

function setBackgroundColor(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('bg-orange-400')
}
function RemoveBackgroundColor(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('bg-orange-400')
}

function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('')
    // console.log(alphabetType)

    // get a random number from 0 -25
    const randomNumber = Math.random() * 25
    const index = Math.round(randomNumber);
    
    const alphabet = alphabets[index]
    // console.log(index,alphabet);
    return alphabet
} 

function setElementValue(elementId,value){
    const element = document.getElementById(elementId)
    element.innerText = value ;
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function textElementById(elementId){
    const element = document.getElementById(elementId)
    const text = element.innerText
    return text
}
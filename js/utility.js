// hide the element
function hideElementById(elementId){
    const element  = document.getElementById(elementId);
    element.classList.add('hidden');
}
// show the element
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
// setkeyboard background color
function setkeyboardBackgroundById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

// keyboard background remove color
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    // get a random index btwn 0-25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    // console.log(index);

    const alphabet = alphabets[index];
    // console.log(index,alphabet);
    return alphabet;

}
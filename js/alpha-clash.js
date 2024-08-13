
function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet is' , alphabet);
    // set random alphabet show in the screen
    const currentAlphabet = document.getElementById('show-letter');
    currentAlphabet.innerText = alphabet;
    // set kybord background color
    setkeyboardBackgroundById(alphabet);
}

function play(){
    // hide home screen and show the play ground screen
    hideElementById('home-screen');
    
    showElementById('play-ground');
    continueGame();
}

function keyboardBtnPress(event){
   const playerPressed = event.key;
   console.log('player pressed' , playerPressed);
   // get the expected to press
   const currentAlphabetElement = document.getElementById('show-letter');
   const currentAlphabet = currentAlphabetElement.innerText;
   const expectedAlphabet = currentAlphabet.toLowerCase();
   console.log(playerPressed,expectedAlphabet); 
 
    // check right or wrong key pressed
    if(playerPressed === expectedAlphabet){
        console.log('point paiso mia');

        // score update
        // get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScore);
        // increase the score
        const newScore = currentScore +1;
        // show the update score
        currentScoreElement.innerText = newScore;

        // console.log('thik chapso', expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
        // removeBackgroundColorById(expectedAlphabet);
    }
    else{
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        // lose the life
        const newLife = currentLife -1;
        //show the update life
        currentLifeElement.innerText = newLife;
    }

}
// capture keyboard key press
document.addEventListener('keyup' , keyboardBtnPress)
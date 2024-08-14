
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
    hideElementById('final-score');
    //reset life and point
    setTExtElementValuebyId('current-life', 3);
    setTExtElementValuebyId('current-score', 0);
    
    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // show lastscore
    const lastScore = getTextElementValueById('current-score')
    console.log(lastScore);
    setTExtElementValuebyId('last-score',lastScore);
    
    //clear the keyboard background
     const currentAlphabet = getElementTextById('show-letter');
    //  console.log(currentAlphabet)
     removeBackgroundColorById(currentAlphabet);
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

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTExtElementValuebyId('current-score', updatedScore);

        // score update
        // get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
       


        // increase the score
        // const newScore = currentScore +1;
        // // show the update score
        // currentScoreElement.innerText = newScore;

        // console.log('thik chapso', expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
        // removeBackgroundColorById(expectedAlphabet);
    }
    else{

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife -1;
        setTExtElementValuebyId('current-life' , updatedLife);

        if (updatedLife === 0){
            gameOver();
        }
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // lose the life
        // const newLife = currentLife -1;
        // //show the update life
        // currentLifeElement.innerText = newLife;
    }

}
// capture keyboard key press
document.addEventListener('keyup' , keyboardBtnPress)
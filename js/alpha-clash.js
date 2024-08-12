// function play(){
//     // hide homeSection
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
    
//     // display playground
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden')
// }


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

//    check matched or not
if(playerPressed === expectedAlphabet){
    console.log('you got a point')
}
else{
    console.log('you missed')
}

}
// capture keyboard key press
document.addEventListener('keyup' , keyboardBtnPress)
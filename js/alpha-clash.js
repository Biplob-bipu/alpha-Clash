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
    console.log('your random alphabet is' , alphabet)
}

function play(){
    // hide home screen and show the play ground screen
    hideElementById('home-screen');
    
    showElementById('play-ground');
    continueGame();
}
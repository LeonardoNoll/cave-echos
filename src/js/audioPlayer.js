"use strict";
let caveSound = new Audio('https://github.com/LeonardoNoll/cave-echos/blob/main/src/assets/sounds/Cave1.mp3');
const playButton = document.getElementById('play');
if (playButton) {
    playButton.addEventListener('click', () => {
        caveSound.play();
        console.log('Audio is playing');
    });
}
;
//# sourceMappingURL=audioPlayer.js.map
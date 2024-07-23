"use strict";
const BASE_TIME = 40000;
const playButton = document.getElementById('play');
const volume = document.getElementById('volume');
const interval = document.getElementById('interval');
const caveSounds = [];
for (let i = 1; i <= 19; i++) {
    caveSounds.push(new Audio(`src/assets/sounds/Cave${i}.mp3`));
}
let volumeValue = 1;
let intervalValue = 0;
let timeoutIDs = [];
volume.addEventListener('input', changeVolume);
interval.addEventListener('input', changeInterval);
if (playButton) {
    playButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * caveSounds.length);
        const caveSound = caveSounds[randomIndex];
        caveSound.play();
    });
}
;
function playAtRandomInterval() {
    const randomIndex = Math.floor(Math.random() * caveSounds.length);
    const caveSound = caveSounds[randomIndex];
    caveSound.play();
    const ponderedInterval = BASE_TIME + (intervalValue * (2360000 / 10));
    const randomTime = Math.floor(Math.random() * ponderedInterval) + ponderedInterval;
    console.log("play in " + randomTime);
    timeoutIDs.push(setTimeout(playAtRandomInterval, randomTime));
}
function changeVolume() {
    volumeValue = Number(volume.value) / 10;
    caveSounds.forEach((caveSound) => {
        caveSound.volume = volumeValue;
    });
}
function changeInterval() {
    intervalValue = Number(interval.value);
    console.log(intervalValue);
    timeoutIDs.forEach((timeoutID) => {
        console.log("clearing " + timeoutID);
        clearTimeout(timeoutID);
        timeoutIDs = timeoutIDs.filter((id) => id !== timeoutID);
    });
    console.log(timeoutIDs);
    timeoutIDs.push(setTimeout(playAtRandomInterval, 3000));
}
changeVolume();
changeInterval();
// playAtRandomInterval();
//# sourceMappingURL=audioPlayer.js.map
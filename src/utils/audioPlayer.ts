const BASE_TIME: number = 40000;
const playButton = document.getElementById('play');
const caveSounds: HTMLAudioElement[] = [];
for (let i = 1; i <= 19; i++) {
    caveSounds.push(new Audio(`src/assets/sounds/Cave${i}.mp3`));
}

let volumeValue: number = 1;
let intervalValue: number = 0;
let timeoutIDs: number[] = [];


if (playButton) {
    playButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * caveSounds.length);
    const caveSound = caveSounds[randomIndex];
    caveSound.play();
    })
};

function playAtRandomInterval(): void {
    const randomIndex = Math.floor(Math.random() * caveSounds.length);
    const caveSound = caveSounds[randomIndex];
    caveSound.play();

    const ponderedInterval: number = BASE_TIME + (intervalValue * (2360000 / 10));
    const randomTime: number = Math.floor(Math.random() * ponderedInterval) + ponderedInterval;
    console.log("play in " + randomTime);
    timeoutIDs.push(setTimeout(playAtRandomInterval, randomTime));
}

function changeVolume(): void {
    volumeValue = Number(volume.value) / 10;
    caveSounds.forEach((caveSound) => {
        caveSound.volume = volumeValue;
    });
}

function changeInterval(): void {
    intervalValue = Number(interval.value);
    console.log(intervalValue);
    
    timeoutIDs.forEach((timeoutID) => {
        console.log("clearing " + timeoutID);
        clearTimeout(timeoutID);
        timeoutIDs = timeoutIDs.filter((id) => id !== timeoutID);
    });

    console.log(timeoutIDs);
    timeoutIDs.push(setTimeout(playAtRandomInterval,3000));
}

changeVolume();
changeInterval();
// playAtRandomInterval();

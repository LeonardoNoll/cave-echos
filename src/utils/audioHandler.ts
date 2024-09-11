export default class audioHandler {
    private audios: HTMLAudioElement[] = [];
    private BASE_TIME: number;
    private timeOutIDs: NodeJS.Timeout[] = [];
    volume: number;
    interval: number;
    
    constructor(BASE_TIME: number, volume: number, interval: number) {
        this.BASE_TIME = BASE_TIME;
        this.volume = volume;
        this.interval = interval;
    }

    newAudio(src: string): HTMLAudioElement {
        const audio = new Audio(src);
        this.audios.push(audio);
        return audio;
    }

    addAudio(audio: HTMLAudioElement): HTMLAudioElement {
        this.audios.push(audio);
        return audio;
    }

    playRandomSound(): void {
        const randomIndex = Math.floor(Math.random() * this.audios.length);
        const audio = this.audios[randomIndex];
        audio.play();
    }

    playAtRandomInterval(): void {
        const randomIndex = Math.floor(Math.random() * this.audios.length);
        const audio = this.audios[randomIndex];
        audio.play();

        const ponderedInterval: number = this.BASE_TIME + (this.interval * (2360000 / 10));
        const randomTime: number = Math.floor(Math.random() * ponderedInterval) + ponderedInterval;
        this.timeOutIDs.push(setTimeout(this.playAtRandomInterval, randomTime));
    }

    setVolume(volume: number): void {
        this.volume = volume;
        this.audios.forEach((audio) => {
            audio.volume = volume/10;
            
        });
        console.log(this.volume)
    }

    setInterval(interval: number): void {
        this.interval = interval;
        this.timeOutIDs.forEach((timeOutID) => {
            clearTimeout(timeOutID);
            this.timeOutIDs = this.timeOutIDs.filter((id) => id !== timeOutID);
        });
        this.timeOutIDs.push(setTimeout(this.playAtRandomInterval, 3000));
    }

}
import { useEffect, useRef } from "react";
import { sounds } from "../utils/sounds";

const BASE_TIME: number = 40000;

const useRandomAudioPlayer = (volume: number, interval: number) => {
  const caveSounds = useRef<HTMLAudioElement[]>([]);
  const timeoutIDs = useRef<number[]>([]);

  // Initialize the audio files
  useEffect(() => {
    sounds.forEach((sound) => {
      caveSounds.current.push(new Audio(sound));
    });
  }, []);

  // Update volume when it changes
  useEffect(() => {
    caveSounds.current.forEach((caveSound) => {
      caveSound.volume = volume / 10; // Volume is passed as a value between 0 and 10
    });
  }, [volume]);

  // Update interval when it changes
  useEffect(() => {
    // Clear existing timeouts
    timeoutIDs.current.forEach((timeoutID) => {
      clearTimeout(timeoutID);
    });
    timeoutIDs.current = [];

    // If interval is greater than 0, start playing at random intervals
    if (interval > -1) {
      const playAtRandomInterval = () => {
        const randomIndex = Math.floor(
          Math.random() * caveSounds.current.length,
        );
        const caveSound = caveSounds.current[randomIndex];
        caveSound.volume = volume / 10;
        caveSound.play();

        const ponderedInterval: number = BASE_TIME + interval * (2360000 / 10);
        const randomTime: number =
          Math.floor(Math.random() * ponderedInterval) + ponderedInterval;
        console.log("play in " + randomTime);

        const timeoutID = setTimeout(playAtRandomInterval, randomTime);
        timeoutIDs.current.push(timeoutID);
      };

      // Start the first playback after 3 seconds
      const timeoutID = setTimeout(playAtRandomInterval, 3000);
      timeoutIDs.current.push(timeoutID);
    }
  }, [interval, volume]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      timeoutIDs.current.forEach((timeoutID) => {
        clearTimeout(timeoutID);
      });
    };
  }, []);

  // Function to play a random audio
  const playRandomAudio = () => {
    const randomIndex = Math.floor(Math.random() * caveSounds.current.length);
    const caveSound = caveSounds.current[randomIndex];
    caveSound.volume = volume / 10;
    caveSound.play();
  };

  return {
    // Expoem função para o componente
    playRandomAudio,
  };
};

export default useRandomAudioPlayer;

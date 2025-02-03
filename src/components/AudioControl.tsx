import { useState } from "react";
import useRandomAudioPlayer from "../hooks/useRandomAudioPlayer";

const AudioControl = () => {
  const [volume, setVolume] = useState<number>(2);
  const [interval, setInterval] = useState<number>(2);

  const { playRandomAudio } = useRandomAudioPlayer(volume, interval);

  return (
    <div className="mt-6 text-xl bg-[#252525] p-4 grid grid-cols-2 gap-2">
      <label htmlFor="volume">Volume</label>
      <input
        type="range"
        id="volume"
        name="volume"
        min="0"
        max="10"
        className="minecraft-range"
        value={volume}
        onChange={(e) => setVolume(parseInt(e.target.value))}
      />
      <label htmlFor="interval">Sound interval</label>
      <input
        type="range"
        id="interval"
        name="interval"
        min="0"
        max="10"
        className="minecraft-range"
        value={interval}
        onChange={(e) => setInterval(parseInt(e.target.value))}
      />
      <button
        className="p-3 bg-green-700 col-span-2 w-fit mx-auto my-auto shadow-transparent hover:shadow-outer-white"
        id="play"
        onClick={playRandomAudio}
      >
        play sound
      </button>
    </div>
  );
};

export default AudioControl;

'use client'

//! Usefull link: https://dev.to/iamludal/custom-reack-hooks-useaudio-565j

import { useState, useEffect, useRef } from 'react'
import useAudio from '@/hooks/useAudio'
import audioHandler from '@/utils/audioHandler' 
import sounds from '@/utils/sounds.json'






const Options = () => {
  const [volumeValue, setVolumeValue] = useState([5])
  const [frequencyValue, setFrequencyValue] = useState([5])

  const audioPlayer = new audioHandler(3000, volumeValue[0], frequencyValue[0])
  //audioPlayer.addAudio(audio)

  const player = new audioHandler(3000, 5, 5)
  const audios = sounds.caveSrc.map((src: string) => audioPlayer.newAudio(src))

  return (
    <div className="w-full max-w-sm mx-auto space-y-6 p-6 bg-white rounded-lg shadow">
      <div className="space-y-2">
        <label htmlFor="volume" className="block text-sm font-medium text-gray-700">
          Volume: {volumeValue}
        </label>
        <input
          type="range"
          id="volume"
          min={0}
          max={10}
          value={volumeValue.toString()}
          onChange={(e) => {
            const volume = parseInt(e.target.value)
            audioPlayer.setVolume(volume)
            return setVolumeValue([volume])}
          }
          className="w-full h-2 bg-gray-200 rounded-lg"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="frequency" className="block text-sm font-medium text-gray-700">
          Frequency: {frequencyValue}
        </label>
        <input
          type="range"
          id="frequency"
          min={0}
          max={10}
          value={frequencyValue.toString()}
          onChange={(e) => {
            audioPlayer.playRandomSound()
            return setFrequencyValue([parseInt(e.target.value)])}
          }
          className="w-full h-2 bg-gray-200 rounded-lg"
        />
      </div>
    </div>
  )
}

export default Options
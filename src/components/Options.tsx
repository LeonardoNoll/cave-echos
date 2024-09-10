'use client'

import { useState, useEffect } from 'react'
import audioHandler from '@/utils/audioHandler'


const Options = () => {
  const [volumeValue, setVolumeValue] = useState([5])
  const [frequencyValue, setFrequencyValue] = useState([5])
  const [audioPlayer, setAudioPlayer] = useState<audioHandler | null>(null)

  useEffect(() => {
    // Verifique se o código está sendo executado no lado do cliente
    if (typeof window !== 'undefined') {
      const player = new audioHandler(40000, volumeValue[0], frequencyValue[0])
      player.newAudio('../assets/sounds/Cave1.mp3')
      setAudioPlayer(player)
    }
  }, [volumeValue, frequencyValue])

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
          onChange={(e) => setVolumeValue([parseInt(e.target.value)])}
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
          onChange={(e) => setFrequencyValue([parseInt(e.target.value)])}
          className="w-full h-2 bg-gray-200 rounded-lg"
        />
      </div>
    </div>
  )
}

export default Options
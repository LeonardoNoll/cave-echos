'use client'

import { useState } from 'react'

function Volume() {
    const [volumeValue, setVolumeValue] = useState([5])

    return (
        <div className="space-y-2">
            <label htmlFor="volume" className="block text-sm font-medium text-gray-700">
            Volume: {volumeValue}
            </label>
            <input
            type="range"
            id="volume"
            min={0}
            max={10}
            value={(volumeValue).toString()}
            onChange={(e) => setVolumeValue([Number(e.target.value)])}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
      </div>  )
}

export default Volume
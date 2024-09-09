'use client'

import { useState } from "react"

function Frequency() {
    const [frequencyValue, setFrequencyValue] = useState([5])

    
    return (
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
            onChange={(e) => setFrequencyValue([Number(e.target.value)])} 
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
      </div>
  )
}

export default Frequency
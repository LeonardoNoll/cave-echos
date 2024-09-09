"use client"

import { useState } from "react"


const Options = () => {
  const [slider1Value, setSlider1Value] = useState([50])
  const [slider2Value, setSlider2Value] = useState([75])

  return (
    <div className="w-full max-w-sm mx-auto space-y-6 p-6 bg-white rounded-lg shadow">
      <div className="space-y-2">
        <label htmlFor="slider1" className="block text-sm font-medium text-gray-700">
          Slider 1: {slider1Value}
        </label>
        <input
          type="range"
          id="slider1"
          min={0}
          max={100}
          value={(slider1Value).toString()}
          onChange={(e) => setSlider1Value(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="slider2" className="block text-sm font-medium text-gray-700">
          Slider 2: {slider2Value}
        </label>
        <input
          type="range"
          id="slider2"
          min={0}
          max={100}
          value={slider2Value}
          onChange={(e) => setSlider2Value(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>
    </div>
  )
}

export default Options
import Volume from "./Volume"
import Frequency from "./Frequency"

const Options = () => {

  return (
    <div className="w-full max-w-sm mx-auto space-y-6 p-6 bg-white rounded-lg shadow">
      <Volume />
      <Frequency />
    </div>
  )
}

export default Options
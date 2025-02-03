import { useEffect } from "react";
import AudioControl from "./components/AudioControl";

function App() {
  useEffect(() => {
    document.title = "Cave Echos";
  }, []);
  return (
    <main className="text-white font-minecraft-4 flex flex-col mx-auto mt-16 w-fit">
      <div className="text-center">
        <h1 className="text-5xl">Cave Echos</h1>
        <h3 className="text-2xl italic">
          for when you need minecraft cave noises to keep you awake
        </h3>
      </div>
      <AudioControl />
    </main>
  );
}
export default App;

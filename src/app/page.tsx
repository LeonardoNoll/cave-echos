import Image from "next/image";
import Header from "../components/Header";
import Options from "../components/Options";

export default function Home() {
  return (
    <main className="text-white font-minecraft mx-auto mt-16 w-fit h-fit flex flex-col gap-10 justify-center items-center">
      <Header />
      <Options />
      <button type="button" className="flex p-6 bg-green-600">Play</button>
    </main>
  );
}

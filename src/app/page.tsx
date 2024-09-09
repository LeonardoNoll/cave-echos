import Image from "next/image";
import Header from "../components/Header";
import Options from "../components/Options";

export default function Home() {
  return (
    <main className="text-white font-minecraft mx-auto mt-16 w-fit h-fit">
      <Header />
      <Options />
    </main>
  );
}

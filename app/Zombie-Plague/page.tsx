import GameButton from "../components/GameButton";
import Image from "next/image";

export default function Zombie_Pleague() {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1300px] w-full">
        <div role="main">
          <section id="Game" aria-label="Game area">
            <div className="relative flex justify-center">
              <div
                className="relative bg-white rounded-lg my-8 w-full border-4 border-blue-200 bg-white/90 shadow-2xl m-4 max-w-5xl p-4"
                style={{ zIndex: 1 }}
              >
                <GameButton />
              </div>
            </div>
          </section>
          <div className="h-100 flex justify-evenly items-center border-t-2">
            <div className="">
              <h1 className="font-extrabold text-4xl text-black">
                ZOMBIE PLEAGUE
              </h1>
            </div>
            <div className="flex w-1/2 flex-col gap-4 items-center">
              <h1 className="text-black">
                Enter a thrilling action game where zombies have taken over.
                Embark on dangerous missions to fight back and wipe out the
                undead threat!
              </h1>
              <a
                href="#Game"
                className="rounded px-4 py-2 bg-white text-black inline-block text-center font-extrabold hover:bg-gray-200"
              >
                Spil Her
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

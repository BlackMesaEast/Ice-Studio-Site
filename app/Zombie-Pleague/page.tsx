import GameButton from "../components/GameButton";
import Image from "next/image";

export default function TopDownShooter() {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1300px] w-full">
        <div role="main">
          <section id="Game" aria-label="Game area">
            <div className="relative flex justify-center bg-zinc-900">
              <Image
                src="/topdownshooter.png"
                alt=""
                fill
                className="absolute inset-0 w-full h-full object-cover opacity-40"
                style={{ zIndex: 0 }}
                priority
              />
              <div
                className="relative bg-white rounded-lg my-8 w-full bg-zinc-800 max-w-5xl p-4"
                style={{ zIndex: 1 }}
              >
                <GameButton />
              </div>
            </div>
          </section>
          <div className="h-100 flex justify-evenly items-center bg-[#292a15]">
            <div className="">
              <h1 className="font-extrabold text-4xl text-white">
                ZOMBIE PLEAGUE
              </h1>
            </div>
            <div className="flex w-1/2 flex-col gap-4 items-center">
              <h1 className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                velit nam rerum aut nemo quod, aliquid, nostrum provident
                ratione aliquam laudantium et! Assumenda obcaecati nostrum
                explicabo quod culpa nobis libero!
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

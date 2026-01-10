import React from "react";

export default function TopDownShooter() {
  return (
    <div>
      <div role="main">
        <div className="flex justify-center">
          <img
            src="/topdownshooter.png"
            role="img"
            alt=""
            className="h-auto w-full"
          />
        </div>
        <div className="h-100 flex justify-evenly items-center bg-[#43450c]">
          <div className="">
            <h1 className="font-extrabold text-4xl text-white">
              ZOMBIE PLEAGUE
            </h1>
          </div>
          <div>
            <h1 className="text-white">Spillet er mega awesome</h1>
            <a
              href="#Game"
              className="border rounded px-4 py-2 bg-green-500 hover:bg-green-700 text-white inline-block text-center"
            >
              Spil Her
            </a>
          </div>
        </div>
        <section id="Game">
          <div className="flex justify-center bg-zinc-900" role="application">
            <div className="bg-white rounded-lg my-8 w-full bg-zinc-800 max-w-5xl p-4">
              <iframe
                src="/TopDownShooterWebGL/index.html"
                className="w-full h-[675px] rounded-lg"
                title="Zombie Plague WebGL"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

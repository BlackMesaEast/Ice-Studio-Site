import React from "react";
import Image from "next/image";

export default function Silent_Citadel() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="max-w-[1300px] w-full flex flex-col items-center">
        <div className="border-4 border-blue-200 w-full max-w-[800px] h-auto rounded-4xl shadow-2xl m-4 bg-white/90 backdrop-blur">
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-extrabold text-4xl pt-8 text-blue-800">
              Silent Citadel
            </h1>
            <span className="text-blue-500 text-lg font-medium tracking-wide">
              A Top-Down Adventure Game
            </span>
          </div>
          <div className="flex flex-col md:flex-row justify-evenly p-2 gap-4">
            <div className="w-3/4">
              <Image
                src="/topdownshooter.png"
                alt=""
                height={0}
                width={0}
                sizes="100vw"
                className="rounded-2xl w-full h-auto max-w-[400px]"
              ></Image>
            </div>
            <div className="w-full md:w-2/3 text-center text-lg md:text-2xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
              sed qui provident voluptas? Deserunt, sed veritatis et doloremque,
              nisi illum ducimus enim alias mollitia quidem omnis, aliquam ipsa
              expedita aspernatur.
            </div>
          </div>
          <div className="flex justify-center m-4">
            <a
              href="https://ueth9mbwkzsexgqb.public.blob.vercel-storage.com/Game.zip"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold text-lg shadow-lg hover:scale-105 hover:from-blue-700 hover:to-blue-500 transition-all flex flex-col items-center"
            >
              <span>Silent Citadel</span>
              <span className="text-sm font-normal opacity-80">
                version 1.2
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

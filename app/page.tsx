import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full flex justify-center px-2 ">
      <div className="max-w-[1300px] w-full flex flex-col">
        <div className="relative w-full max-w-[1300px] h-[500px] flex justify-center items-center  overflow-hidden">
          <img
            src="/IceStudioLogo.svg"
            alt="Ice Studio Logo"
            className="absolute inset-0 w-full h-full opacity-50 pointer-events-none select-none"
          />
          <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-blue-700 mb-8 tracking-tight drop-shadow-lg">
              Ice Studio
            </h1>
          </div>
        </div>
        <div className="h-auto flex flex-col md:flex-row justify-evenly items-center py-6 gap-4">
          <div className="w-full md:w-1/2">
            <p className="font-extrabold text-2xl md:text-4xl p-4 text-center text-blue-700">
              About Us
            </p>
          </div>
          <div role="main" className="w-full md:w-1/2">
            <p className="text-base md:text-xl p-4 text-center">
              We are passionate developers inspired to create unique and
              engaging games. Our mission is to bring creative ideas to life and
              share our love for game development and story writing with the
              world.
            </p>
          </div>
        </div>
        <div>
          <h1 className="font-extrabold text-blue-700">Games that we made:</h1>
        </div>
        <div className="border-t-2 border-b-2 h-auto flex flex-col md:flex-row justify-evenly items-center py-6  gap-4">
          <div className="w-full md:w-1/2 flex justify-center">
            <p className="p-4 text-base md:text-xl text-center">
              Silent Citadel is a co-op top-down shooter where you and your team
              explore a mysterious space station, battle enemies, and complete
              challenging missions together.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="rounded-xl  flex items-center justify-center">
              <Image
                src="/IceStudioLogo.svg"
                alt=""
                width={360}
                height={200}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="h-auto flex flex-col md:flex-row justify-evenly items-center py-6 gap-4">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="rounded-xl flex items-center justify-center">
              <Image
                src="/topdownshooter.png"
                alt=""
                width={360}
                height={200}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <p className="p-4 text-base md:text-xl text-center">
              Enter a thrilling action game where zombies have taken over.
              Embark on dangerous missions to fight back and wipe out the undead
              threat!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

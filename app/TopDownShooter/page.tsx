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
          </div>
        </div>
      </div>
    </div>
  );
}

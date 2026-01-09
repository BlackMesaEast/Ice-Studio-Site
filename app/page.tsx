import React from "react";

export default function page() {
  return (
    <div className="min-h-screen w-screen column">
      <div className="flex border h-15">
        <button className="border w-20">test</button>
        <button className="border w-50">test1</button>
        <button className="border w-50">test2</button>
        <button className="border w-50">test3</button>
        <button className="border w-60">test4</button>
      </div>
      <div className="flex justify-center">
        <img src="/topdownshooter.png" alt="" className="h-auto w-[100%]" />
      </div>
      <div className="border h-100 flex justify-evenly items-center">
        <div className="">
          <h1 className="font-extrabold text-4xl">ZOMBIE PLEAGUE</h1>
        </div>
        <div>
          <h1>Spillet er mega awesome</h1>
        </div>
      </div>
    </div>
  );
}

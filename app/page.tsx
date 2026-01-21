import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full flex justify-center px-2">
      <div className="max-w-[1300px] w-full flex flex-col">
        <div className="relative w-full max-w-[1300px] h-[500px] flex justify-center items-center bg-white overflow-hidden">
          <img
            src="/IceStudioLogo.svg"
            alt="Ice Studio Logo"
            className="absolute inset-0 w-full h-full opacity-50 pointer-events-none select-none"
          />
          <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-blue-700 mb-8 tracking-tight drop-shadow-lg">
              Ice Studio
            </h1>
            <p className="text-base md:text-xl text-gray-700 max-w-2xl text-center mb-10 bg-white/80 rounded-lg p-4 md:p-6 shadow">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, urna eu tincidunt consectetur, nisi nisl aliquam eros, a
              facilisis enim sapien eu justo. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Etiam at risus et justo dignissim congue.
              Donec congue lacinia dui, a porttitor lectus condimentum laoreet.
            </p>
            <button className="px-6 md:px-8 py-3 md:py-4 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-800 transition text-base md:text-lg font-semibold">
              Learn More
            </button>
          </div>
        </div>
        <div className="h-auto flex flex-col md:flex-row justify-evenly items-center py-6 gap-4">
          <div className="w-full md:w-1/2">
            <p className="font-extrabold text-2xl md:text-4xl p-4 text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-base md:text-xl p-4 text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              quas, eos beatae atque saepe, perspiciatis velit corporis nobis
              facilis, error odio quos odit dolore quidem hic veniam? Quaerat,
              dolorum commodi.
            </p>
          </div>
        </div>
        <div className="border h-auto flex flex-col md:flex-row justify-evenly items-center py-6  gap-4">
          <div className="w-full md:w-1/2 flex justify-center">
            <p className="p-4 text-base md:text-xl text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              maiores exercitationem. Molestias eius iste rerum voluptatem
              eveniet quos voluptatibus amet deleniti sapiente, magnam, voluptas
              odit? Eius porro hic magnam dolore?
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="rounded-xl bg-white flex items-center justify-center">
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
        <div className="border h-auto flex flex-col md:flex-row justify-evenly items-center py-6 gap-4">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="rounded-xl bg-white flex items-center justify-center">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              maiores exercitationem. Molestias eius iste rerum voluptatem
              eveniet quos voluptatibus amet deleniti sapiente, magnam, voluptas
              odit? Eius porro hic magnam dolore?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

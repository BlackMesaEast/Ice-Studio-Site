import GameButton from "../components/GameButton";

export default function TopDownShooter() {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1300] w-full">
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

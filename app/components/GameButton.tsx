"use client";
import React, { useState } from "react";

export default function GameButton() {
  const [showIframe, setShowIframe] = useState(false);

  return showIframe ? (
    <iframe
      src="/TopDownShooterWebGL/index.html"
      className="w-full h-[675px] rounded-lg"
      title="Zombie Plague WebGL"
      allowFullScreen
    ></iframe>
  ) : (
    <div className="flex justify-center items-center h-[675px]">
      <button
        onClick={() => setShowIframe(true)}
        className="bg-white rounded p-2 hover:bg-gray-200 text-xl font-bold"
      >
        Start Game
      </button>
    </div>
  );
}
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
</section>;

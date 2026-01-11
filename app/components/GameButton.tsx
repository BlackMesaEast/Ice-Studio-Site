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

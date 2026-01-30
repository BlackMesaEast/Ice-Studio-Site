import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1300px] w-full h-40 bg-black">
        <ul className="text-white flex justify-center space-x-8">
          <li className="flex flex-col items-center">
            <Link href="/Contact" className="font-bold">
              Contact
            </Link>
            <span className="text-xs opacity-70">info@example.com</span>
          </li>
          <li className="flex flex-col items-center">
            <Link href="#" className="font-bold">
              About
            </Link>
            <span className="text-xs opacity-70">Our Story</span>
          </li>
          <li className="flex flex-col items-center">
            <Link href="#" className="font-bold">
              Upcoming Game
            </Link>
            <span className="text-xs opacity-70">Coming Soon</span>
          </li>
          <li className="flex flex-col items-center">
            <Link href="#" className="font-bold">
              Games
            </Link>
            <span className="text-xs opacity-70">See All</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

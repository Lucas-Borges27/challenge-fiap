"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
    <div className="bg-[#eeeeee] h-14 w-full flex items-center justify-between px-4">
      <Link href="/">
        <img
          id="logoViaMobilidade"
          src="/images/LogoCCR.png"
          alt="Logo"
          className="w-[181px] h-[26px] m-5"
        />
      </Link>
      <div className="relative inline-block ml-auto">
        <span
          id="burguer"
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-8 h-8 text-[#8B2119] block text-center p-4 cursor-pointer ml-2 mb-5"
        >
          ☰
        </span>
        <menu
          className={`absolute top-2 right-6 z-50 bg-gray-100 rounded-lg p-5 transition-all duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="list-none p-0">
            <li>
              <a href="/" className="block w-full max-w-[300px] mx-auto my-1 rounded-lg p-2 text-center bg-white text-black border-2 border-black transition-all duration-200 hover:shadow-lg hover:transform hover:-translate-y-1">
                Rotas
              </a>
            </li>
            <li>
              <a href="/status" className="block w-full max-w-[300px] mx-auto my-1 rounded-lg p-2 text-center bg-white text-black border-2 border-black transition-all duration-200 hover:shadow-lg hover:transform hover:-translate-y-1">
                Status
              </a>
            </li>
            <li>
              <a href="/suporte" className="block w-full max-w-[300px] mx-auto my-1 rounded-lg p-2 text-center bg-white text-black border-2 border-black transition-all duration-200 hover:shadow-lg hover:transform hover:-translate-y-1">
                Suporte
              </a>
            </li>
            <li>
              <a href="/chatMobi" className="block w-full max-w-[300px] mx-auto my-1 rounded-lg p-2 text-center bg-white text-black border-2 border-black transition-all duration-200 hover:shadow-lg hover:transform hover:-translate-y-1">
                ChatMobi
              </a>
            </li>
            <li>
              <a href="/desenvolvedores" className="block w-full max-w-[300px] mx-auto my-1 rounded-lg p-2 text-center bg-white text-black border-2 border-black transition-all duration-200 hover:shadow-lg hover:transform hover:-translate-y-1">
                Devs
              </a>
            </li>
          </ul>
        </menu>
      </div>
    </div>
  </header>
);
};

export default Header;
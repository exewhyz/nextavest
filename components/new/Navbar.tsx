"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold text-blue-600">Crowdvest</Link>

        <div className="hidden md:flex space-x-8 text-gray-700">
          <Link href="#about">About</Link>
          <Link href="#properties">Properties</Link>
          <Link href="#contact">Contact</Link>
        </div>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="flex flex-col p-4 space-y-3">
            <Link href="#about" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="#properties" onClick={() => setIsOpen(false)}>Properties</Link>
            <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

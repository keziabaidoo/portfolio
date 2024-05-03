import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
   <header className="bg-[#021227] max-w-screen-xl	mx-auto px-4 py-6">
    <nav className="">
      <ul style={{fontFamily:'Roboto Mono, monospace'}} class="flex justify-around font-semibold text-[#cccccc]">
       <li className=""><a href="#skills" className="transition-all hover:text-[#247032]">Skills</a></li>
        <li className=""><a href="#projects" className="transition-all hover:text-[#247032]">Projects</a></li>
        <li className=""><a href="#contact" className="transition-all hover:text-[#247032]">Contact</a></li>
      </ul>
    </nav>
  </header>
    </>
  );
}

export default Navbar;

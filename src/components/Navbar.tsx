"use client";

import { Download } from "lucide-react";
import { useState } from "react";
const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Portfolio", id: "portfolio" },
  { name: "Contact", id: "contact" },]

export default function Navbar() {
  const [open, setOpen] = useState(false);
    const [active, setActive] = useState("home");

  return (
    <nav className="w-full bg-black text-white px-6 py-4 flex items-center justify-between fixed top-0 left-0 z-50 ">
      
      {/* Left - Name */}
      <h1 className="text-xl font-bold  primary-gradient-text">ASIF ALI</h1>

      {/* Center - Desktop Menu */}
    <div className="hidden md:flex gap-8 absolute left-1/2 transform -translate-x-1/2">
  {navItems.map((item) => (
 <a
  key={item.id}
  href={`#${item.id}`}
  onClick={() => setActive(item.id)}
  className={`relative pb-2 group ${
    active === item.id ? "primary-gradient-text" : "text-white"
  }`}
>
  {item.name}

  <span
    className={`absolute left-0 bottom-0 w-full h-[2px] primary-gradient-bg 
    transform origin-left transition-transform duration-500 ease-in-out
    ${
      active === item.id
        ? "scale-x-100"
        : "scale-x-0 group-hover:scale-x-100"
    }`}
  />
</a>
  ))}
</div>

      {/* Right - Resume Button */}
      <div className="hidden md:block">
     <a
  href="/resume.pdf"
  download
  className="flex items-center gap-2 px-4 py-2 rounded primary-gradient-bg text-white hover:opacity-90 transition"
>
  <Download size={16} />
  resume
</a>
      </div>

      {/* Mobile Button */}
      <button
        className="md:hidden"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
     {open && (
  <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center gap-6 py-6 md:hidden">
    {navItems.map((item) => (
      <a
        key={item.id}
        href={`#${item.id}`}
        onClick={() => {
          setActive(item.id);
          setOpen(false);
        }}
        className={`text-lg transition ${
          active === item.id
            ? "primary-gradient-text"
            : "text-white"
        }`}
      >
        {item.name}
      </a>
    ))}

    {/* Resume Button (Mobile) */}
  <a
  href="/resume.pdf"
  download
  className="flex items-center gap-2 px-4 py-2 rounded primary-gradient-bg hover:opacity-90 transition"
>
  <Download size={16} />
  Resume
</a>
  </div>
)}
    </nav>
  );
}
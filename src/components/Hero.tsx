"use client";

import Image from "next/image";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 gap-10">
      
      {/* LEFT SIDE */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        
        <h1 className="text-4xl md:text-6xl font-bold">
          Full Stack Developer
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
          <TypeAnimation
            sequence={[
              "Aspiring Software Engineer",
              1500,
              "Passionate Problem Solver",
              1500,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </h2>

        {/* LINKS */}
        <div className="flex justify-center md:justify-start gap-4 pt-4">
          
          <a
            href="https://linkedin.com/in/yourname"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
            href="mailto:yourmail@gmail.com"
            className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-red-500 hover:text-white transition"
          >
            <FaEnvelope />
            Gmail
          </a>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          
          <Image
            src="/me.jpg" // put your image in public folder
            alt="profile"
            fill
            className="rounded-full object-cover shadow-lg"
          />

        </div>
      </div>

    </section>
  );
}
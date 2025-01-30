"use client";

import Header from "@/components/Header";
import { FaTelegram, FaGithub } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import ThemeToogle from "@/components/ThemeToogle";
import Footer from "@/components/Footer";
import Terminal from "@/components/terminal/terminal";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen animate-fade-in flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between px-6 md:px-20 xl:px-32 pt-24">
        {/* Left Column */}
        <div className="flex flex-col lg:max-w-[50%] mb-16 lg:mb-0">
          <h1 className="text-5xl font-bold md:text-7xl">
            Hi, <br /> I am{" "}
            <span className="bg-gradient-to-r from-cyan-200 to-violet-600 bg-clip-text text-transparent">
              Tr3ble
            </span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-600 dark:text-gray-400 mt-4">
            <TypeAnimation
              sequence={[
                "i am a Full-Stack Developer",
                1000,
                "i am a JavaScript Developer",
                1000,
                "and TypeScript also",
                1000,
                "i write code :3",
                1000,
                "love building things <3",
                1000,
              ]}
              repeat={Infinity}
              wrapper="span"
              speed={1}
              style={{ display: "inline-block" }}
            />
          </h2>
          <div className="flex space-x-4 mt-5">
            <a
              href="https://github.com/y9tr3ble"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:opacity-70 transition-opacity"
            >
              <FaGithub />
            </a>
            <a
              href="https://t.me/tr3ble"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:opacity-70 transition-opacity"
            >
              <FaTelegram />
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-[45%]">
          <Terminal />
        </div>
      </main>
      <ThemeToogle />
      <Footer />
    </>
  );
}
"use client";

import Header from "@/components/Header";
import { FaTelegram, FaGithub } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import ThemeToogle from "@/components/ThemeToogle";
import Footer from "@/components/Footer";
import Terminal from "@/components/terminal/terminal";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1 min-h-screen animate-fade-in flex flex-col lg:flex-row items-start justify-center lg:justify-between px-2 sm:px-4 md:px-20 xl:px-32 pt-20 lg:pt-36">
        {/* Left Column */}
        <div className="flex flex-col w-full lg:max-w-[50%] mb-12 lg:mb-0 lg:mr-14">
          <h1 className="text-3xl font-bold md:text-6xl lg:mt-10 ml-1 sm:ml-0">
            Hi, <br /> I am{" "}
            <span className="bg-linear-to-r from-cyan-200 to-violet-600 bg-clip-text text-transparent">
              Tr3ble
            </span>
          </h1>
          <h2 className="text-lg md:text-4xl font-bold text-gray-600 dark:text-gray-400 mt-4 ml-1 sm:ml-0">
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
              style={{ 
                display: "inline-block",
                whiteSpace: "pre",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "95vw",
                lineHeight: "1.2em",
                minHeight: "1.2em" 
              }}
            />
          </h2>
          <div className="flex space-x-4 mt-5 ml-1 sm:ml-0">
            <a
              href="https://github.com/y9tr3ble"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl md:text-4xl hover:opacity-70 transition-opacity"
            >
              <FaGithub />
            </a>
            <a
              href="https://t.me/tr3ble"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl md:text-4xl hover:opacity-70 transition-opacity"
            >
              <FaTelegram />
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-[45%] mt-8 lg:mt-0 min-h-[320px] -mr-3 sm:mr-0 overflow-hidden">
          <Terminal />
        </div>
      </main>
      <ThemeToogle />
      <Footer />
    </div>
  );
}
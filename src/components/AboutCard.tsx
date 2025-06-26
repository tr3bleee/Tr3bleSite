"use client";

import { translations } from "@/lib/translations";
import { useLanguage } from "@/lib/useLanguage";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { FaReact, FaTelegram } from "react-icons/fa";
import { HiGlobeAlt, HiMoon, HiSun } from "react-icons/hi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

interface SkillTagProps {
  icon?: string | IconType;
  imageSrc?: string | IconType;
  text: string;
}

function SkillTag({ icon, imageSrc, text }: SkillTagProps) {
  return (
    <div
      className="flex gap-1.5 sm:gap-2.5 items-center px-2.5 sm:px-3.5 py-1 sm:py-1.5 ring-2 rounded-xl bg-neutral-50/50 ring-neutral-300 dark:bg-neutral-900/30 dark:ring-neutral-600 hover:shadow-md hover:shadow-neutral-200/20 dark:hover:shadow-neutral-900/30 transition-all duration-300 ease-out hover:scale-[102%] backdrop-blur-sm hover:ring-neutral-400 dark:hover:ring-neutral-500"
      role="listitem"
      aria-label={`${text} technology`}
    >
      <div
        className="p-1 sm:p-1.5 rounded-xl bg-neutral-100/80 dark:bg-neutral-800/50 shrink-0"
        aria-hidden="true"
      >
        {icon && typeof icon === "string" && (
          <p className="font-zed-icons text-neutral-600 dark:text-neutral-300 text-sm sm:text-[16px]">
            {icon}
          </p>
        )}
        {icon && typeof icon !== "string" && (
          <div className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-[16px]">
            {React.createElement(icon)}
          </div>
        )}
        {imageSrc && typeof imageSrc === "string" && (
          <Image
            src={imageSrc}
            alt={`${text} logo`}
            width={16}
            height={16}
            className="size-3.5 sm:size-4"
          />
        )}
        {imageSrc && typeof imageSrc !== "string" && (
          <div className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-[16px]">
            {React.createElement(imageSrc as IconType)}
          </div>
        )}
      </div>
      <span className="font-raleway text-[11px] sm:text-[13px] font-semibold text-neutral-700 dark:text-neutral-200 truncate">
        {text}
      </span>
    </div>
  );
}

export default function AboutCard() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].about;

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");

    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <article
      className="grid gap-4 sm:gap-5 md:gap-6 p-4 sm:p-6 md:p-7 lg:p-8 items-start rounded-xl ring-2 ring-neutral-300 backdrop-blur-md bg-white/60 dark:bg-neutral-900/60 dark:ring-neutral-600 hover:shadow-lg hover:shadow-neutral-200/20 dark:hover:shadow-neutral-900/30 transition-all duration-300 ease-out hover:scale-[101%] lg:col-span-3 hover:ring-neutral-400 dark:hover:ring-neutral-500 max-w-full overflow-hidden"
      role="banner"
      aria-labelledby="developer-intro"
      itemScope
      itemType="https://schema.org/Person"
    >
      <header className="flex items-center justify-between min-w-0 flex-1">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
          <div className="p-2 sm:p-2.5 rounded-xl bg-slate-200/50 dark:bg-neutral-800/90 shrink-0">
            <p
              className="font-zed text-neutral-500 dark:text-neutral-400 text-[11px] sm:text-[13px] whitespace-nowrap"
              role="presentation"
            >
              {t.title}
            </p>
          </div>
          <div
            className="hidden sm:block h-4 w-[1px] bg-neutral-300 dark:bg-neutral-600"
            role="presentation"
          />
          <div
            className="hidden sm:flex items-center gap-1.5"
            role="presentation"
            aria-label="Window controls decoration"
          >
            <div className="size-1.5 rounded-full bg-red-400" />
            <div className="size-1.5 rounded-full bg-yellow-400" />
            <div className="size-1.5 rounded-full bg-green-400" />
          </div>
        </div>
        <nav
          className="flex items-center gap-1 sm:gap-2 md:gap-3 shrink-0"
          role="navigation"
          aria-label="Theme and language controls"
        >
          <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
            <button
              className="flex items-center justify-center p-1.5 sm:p-2 md:p-2.5 lg:p-3 rounded-lg bg-neutral-100/60 dark:bg-neutral-800/60 hover:bg-neutral-200/80 dark:hover:bg-neutral-700/80 transition-all duration-200 ease-out hover:scale-105"
              onClick={() => window.toggleTheme()}
              title={theme === "dark" ? t.lightTheme : t.darkTheme}
              aria-label={theme === "dark" ? t.lightTheme : t.darkTheme}
              type="button"
            >
              {theme === "dark" ? (
                <HiSun
                  className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base md:text-lg"
                  aria-hidden="true"
                />
              ) : (
                <HiMoon
                  className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base md:text-lg"
                  aria-hidden="true"
                />
              )}
            </button>
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center p-1.5 sm:p-2 md:p-2.5 lg:p-3 rounded-lg bg-neutral-100/60 dark:bg-neutral-800/60 hover:bg-neutral-200/80 dark:hover:bg-neutral-700/80 transition-all duration-200 ease-out hover:scale-105"
              title={
                language === "en"
                  ? "Переключить на русский"
                  : "Switch to English"
              }
              aria-label={
                language === "en"
                  ? "Switch to Russian language"
                  : "Switch to English language"
              }
              type="button"
            >
              <HiGlobeAlt
                className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base md:text-lg"
                aria-hidden="true"
              />
            </button>
          </div>
          <div
            className="flex items-center text-neutral-400 dark:text-neutral-500 text-[9px] sm:text-[10px] md:text-[11px] font-mono whitespace-nowrap"
            role="status"
            aria-label="Online status"
          >
            online
          </div>
        </nav>
      </header>

      <section
        className="grid md:flex gap-4 sm:gap-5 md:gap-6 items-center min-w-0"
        role="region"
        aria-labelledby="developer-intro"
      >
        <div className="grid gap-3 sm:gap-4 md:gap-5 relative min-w-0">
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 min-w-0">
            <Image
              src="/images/profile.jpg"
              alt="Professional photo of Tr3ble, Full-Stack TypeScript Developer"
              width={56}
              height={56}
              className="rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 shrink-0"
              itemProp="image"
              priority
            />
            <h1
              id="developer-intro"
              className="font-onest text-neutral-700 dark:text-neutral-200 font-semibold text-base sm:text-lg md:text-xl lg:text-2xl min-w-0 break-words"
              itemProp="name"
            >
              {t.greeting}{" "}
              <span
                className="gradient-text font-onest break-all"
                itemProp="alternateName"
              >
                @tr3ble
              </span>
            </h1>
          </div>

          {/* Skills tags with semantic markup */}
          <div
            className="flex md:hidden flex-wrap gap-2"
            role="list"
            aria-label="Core technologies"
          >
            <SkillTag icon={SiTypescript} text="TypeScript" />
            <SkillTag icon={FaReact} text="React" />
            <SkillTag imageSrc={RiNextjsFill} text="Next" />
            <SkillTag imageSrc={RiTailwindCssFill} text="Tailwind" />
          </div>
          <div
            className="hidden md:flex lg:hidden flex-wrap gap-2.5"
            role="list"
            aria-label="Core technologies"
          >
            <SkillTag icon={SiTypescript} text="TypeScript" />
            <SkillTag icon={FaReact} text="React" />
            <SkillTag imageSrc={RiNextjsFill} text="Next" />
            <SkillTag imageSrc={RiTailwindCssFill} text="Tailwind" />
          </div>
          <div
            className="hidden lg:flex flex-wrap gap-3"
            role="list"
            aria-label="Core technologies"
          >
            <SkillTag icon={SiTypescript} text="TypeScript" />
            <SkillTag icon={FaReact} text="React" />
            <SkillTag imageSrc={RiNextjsFill} text="Next" />
            <SkillTag imageSrc={RiTailwindCssFill} text="Tailwind" />
          </div>
        </div>
      </section>

      <p
        className="font-raleway text-neutral-500 dark:text-neutral-400 font-medium"
        itemProp="description"
        role="text"
      >
        {t.description}
      </p>

      <footer className="flex justify-start">
        <a
          href="https://t.me/tr3ble"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2.5 md:gap-3 items-center px-5 md:px-6 py-2.5 md:py-3 ring-2 rounded-xl bg-neutral-50/50 ring-neutral-300 dark:bg-neutral-900/30 dark:ring-neutral-600 hover:shadow-md hover:shadow-neutral-200/20 dark:hover:shadow-neutral-900/30 transition-all duration-300 ease-out hover:scale-[98%] backdrop-blur-sm hover:ring-neutral-400 dark:hover:ring-neutral-500"
          aria-label={`${t.contactMe} via Telegram`}
          itemProp="contactPoint"
          itemScope
          itemType="https://schema.org/ContactPoint"
        >
          <meta itemProp="contactType" content="professional" />
          <meta itemProp="url" content="https://t.me/tr3ble" />
          <FaTelegram
            className="text-neutral-600 dark:text-neutral-300 text-base md:text-lg"
            aria-hidden="true"
          />
          <span className="font-raleway font-medium text-neutral-600 dark:text-neutral-300 text-sm md:text-base">
            {t.contactMe}
          </span>
        </a>
      </footer>

      {/* Hidden structured data */}
      <div className="sr-only">
        <span itemProp="jobTitle">Full-Stack TypeScript Developer</span>
        <span
          itemProp="worksFor"
          itemScope
          itemType="https://schema.org/Organization"
        >
          <span itemProp="name">Freelance</span>
        </span>
        <div
          itemProp="knowsAbout"
          itemScope
          itemType="https://schema.org/Thing"
        >
          <span itemProp="name">TypeScript</span>
        </div>
        <div
          itemProp="knowsAbout"
          itemScope
          itemType="https://schema.org/Thing"
        >
          <span itemProp="name">React</span>
        </div>
        <div
          itemProp="knowsAbout"
          itemScope
          itemType="https://schema.org/Thing"
        >
          <span itemProp="name">Next.js</span>
        </div>
        <div
          itemProp="knowsAbout"
          itemScope
          itemType="https://schema.org/Thing"
        >
          <span itemProp="name">Node.js</span>
        </div>
        <span itemProp="url">https://tr3ble.dev</span>
      </div>
    </article>
  );
}

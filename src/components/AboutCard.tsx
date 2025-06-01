"use client";

import { translations } from "@/lib/translations";
import { useLanguage } from "@/lib/useLanguage";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { IconType } from "react-icons";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

interface SkillTagProps {
    icon?: string | IconType;
    imageSrc?: string | IconType;
    text: string;
}

function SkillTag({icon, imageSrc, text}: SkillTagProps) {
    return (
        <div className="flex gap-2.5 items-center px-3.5 py-1.5 ring-2 rounded-xl bg-neutral-50/50 ring-neutral-300 dark:bg-neutral-900/30 dark:ring-neutral-600 hover:shadow-md hover:shadow-neutral-200/20 dark:hover:shadow-neutral-900/30 transition-all duration-300 ease-out hover:scale-[102%] backdrop-blur-sm hover:ring-neutral-400 dark:hover:ring-neutral-500">
            <div className="p-1.5 rounded-lg bg-neutral-100/80 dark:bg-neutral-800/50">
                {icon && typeof icon === 'string' && <p className="font-zed-icons text-neutral-600 dark:text-neutral-300 text-[16px]">{icon}</p>}
                {icon && typeof icon !== 'string' && (
                    <div className="text-neutral-600 dark:text-neutral-300 text-[16px]">
                        {React.createElement(icon)}
                    </div>
                )}
                {imageSrc && typeof imageSrc === 'string' && (
                    <Image
                        src={imageSrc}
                        alt={text}
                        width={16}
                        height={16}
                        className="size-4"
                    />
                )}
                {imageSrc && typeof imageSrc !== 'string' && (
                    <div className="text-neutral-600 dark:text-neutral-300 text-[16px]">
                        {React.createElement(imageSrc as IconType)}
                    </div>
                )}
            </div>
            <p className="font-raleway text-[13px] font-semibold text-neutral-700 dark:text-neutral-200">{text}</p>
        </div>
    );
}

export default function AboutCard() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const {language, toggleLanguage} = useLanguage();
    const t = translations[language].about;

    useEffect(() => {
        const isDark = document.documentElement.classList.contains('dark');
        setTheme(isDark ? 'dark' : 'light');

        const observer = new MutationObserver(() => {
            const isDark = document.documentElement.classList.contains('dark');
            setTheme(isDark ? 'dark' : 'light');
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div
            className="grid gap-6 p-7 md:p-8 items-start rounded-xl ring-2 ring-neutral-300 backdrop-blur-md bg-white/60 dark:bg-neutral-900/60 dark:ring-neutral-600 hover:shadow-lg hover:shadow-neutral-200/20 dark:hover:shadow-neutral-900/30 transition-all duration-300 ease-out hover:scale-[101%] lg:col-span-3 hover:ring-neutral-400 dark:hover:ring-neutral-500">
            
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-neutral-100/60 dark:bg-neutral-800/40">
                        <p className="font-zed text-neutral-500 dark:text-neutral-400 text-[13px]">{t.title}</p>
                    </div>
                    <div className="hidden sm:block h-4 w-[1px] bg-neutral-300 dark:bg-neutral-600"/>
                    <div className="hidden sm:flex items-center gap-1.5">
                        <div className="size-1.5 rounded-full bg-emerald-400"/>
                        <div className="size-1.5 rounded-full bg-yellow-400"/>
                        <div className="size-1.5 rounded-full bg-red-400"/>
                    </div>
                </div>
                <div className="text-neutral-400 dark:text-neutral-500 text-[11px] font-mono">
                    online
                </div>
            </div>

            <div className="grid md:flex gap-6 items-center">
                <div className="grid gap-5 relative">
                    <div className="flex items-center gap-4">
                        <Image
                            src="/images/profile.jpg"
                            alt="Profile"
                            width={56}
                            height={56}
                            className="rounded-full"
                        />
                        <h1 className="font-onest text-neutral-700 dark:text-neutral-200 font-semibold text-xl sm:text-2xl">
                            {t.greeting} <span className="gradient-text font-onest">@tr3ble</span>
                        </h1>
                    </div>
                    <div className="hidden md:flex flex-wrap gap-3">
                        <SkillTag icon={SiTypescript} text="TypeScript"/>
                        <SkillTag icon={FaReact} text="React"/>
                        <SkillTag imageSrc={RiNextjsFill} text="Next"/>
                        <SkillTag imageSrc={RiTailwindCssFill} text="Tailwind"/>
                    </div>
                </div>
            </div>
            
            <p className="font-raleway text-neutral-500 dark:text-neutral-400 font-medium">
                {t.description}
            </p>
            
            <div className="grid lg:flex gap-4 md:gap-4 w-full">
                <button
                    className="flex gap-4 items-center px-6 py-2 ring-2 rounded-xl bg-neutral-50/50 ring-neutral-300 dark:bg-neutral-900/30 dark:ring-neutral-600 hover:shadow-md hover:shadow-neutral-200/20 dark:hover:shadow-neutral-900/30 transition-all duration-300 ease-out hover:scale-[98%] backdrop-blur-sm hover:ring-neutral-400 dark:hover:ring-neutral-500"
                    onClick={() => window.open('https://t.me/tr3ble', '_blank')}
                >
                    <p className="font-raleway font-medium text-neutral-600 dark:text-neutral-300">{t.contactMe}</p>
                </button>
                <button
                    className="flex gap-4 items-center px-6 py-2 ring-2 rounded-xl bg-neutral-50/50 ring-neutral-300 dark:bg-neutral-900/30 dark:ring-neutral-600 hover:shadow-md hover:shadow-neutral-200/20 dark:hover:shadow-neutral-900/30 transition-all duration-300 ease-out hover:scale-[98%] backdrop-blur-sm hover:ring-neutral-400 dark:hover:ring-neutral-500"
                    onClick={() => window.toggleTheme()}
                >
                    <p className="font-raleway font-medium text-neutral-600 dark:text-neutral-300">
                        {theme === 'dark' ? t.lightTheme : t.darkTheme}
                    </p>
                </button>
                <button
                    onClick={toggleLanguage}
                    className="flex gap-4 items-center px-6 py-2 ring-2 rounded-xl bg-neutral-50/50 ring-neutral-300 dark:bg-neutral-900/30 dark:ring-neutral-600 hover:shadow-md hover:shadow-neutral-200/20 dark:hover:shadow-neutral-900/30 transition-all duration-300 ease-out hover:scale-[98%] backdrop-blur-sm hover:ring-neutral-400 dark:hover:ring-neutral-500"
                >
                    <p className="font-raleway font-medium text-neutral-600 dark:text-neutral-300">{language === 'en' ? 'RU' : 'EN'}</p>
                </button>
            </div>
        </div>
    );
}







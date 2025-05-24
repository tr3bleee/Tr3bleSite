"use client";

import React from 'react';
import Image from 'next/image';
import {useEffect, useState} from 'react';
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import {IconType} from "react-icons";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import {useLanguage} from "@/lib/useLanguage";
import {translations} from "@/lib/translations";

interface SkillTagProps {
    icon?: string | IconType;
    imageSrc?: string | IconType;
    text: string;
}

function SkillTag({icon, imageSrc, text}: SkillTagProps) {
    return (
        <div
            className="flex gap-3 items-center px-4 py-1.5 ring-2 rounded-full ring-neutral-200/60 dark:ring-neutral-800/90">
            {icon && typeof icon === 'string' && <p className="font-zed-icons text-neutral-500 dark:text-neutral-300">{icon}</p>}
            {icon && typeof icon !== 'string' && (
                <div className="text-neutral-500 dark:text-neutral-300 text-[20px]">
                    {React.createElement(icon)}
                </div>
            )}
            {imageSrc && typeof imageSrc === 'string' && (
                <Image
                    src={imageSrc}
                    alt={text}
                    width={20}
                    height={20}
                    className="size-5"
                />
            )}
            {imageSrc && typeof imageSrc !== 'string' && (
                <div className="text-neutral-500 dark:text-neutral-300 text-[20px]">
                    {React.createElement(imageSrc as IconType)}
                </div>
            )}
            <p className="font-raleway text-[14px] font-medium text-neutral-500 dark:text-neutral-300">{text}</p>
        </div>
    );
}

export default function AboutCard() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const {language, toggleLanguage} = useLanguage();
    const t = translations[language].about;

    useEffect(() => {
        // Check the current theme
        const isDark = document.documentElement.classList.contains('dark');
        setTheme(isDark ? 'dark' : 'light');

        // Listen for theme changes
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
            className="grid items-start rounded-xl ring-2 ring-neutral-200 dark:bg-neutral-900/20 dark:ring-neutral-800/40 hover:shadow-xl smooth hover:scale-[101%] gap-6 p-7 md:p-8 lg:col-span-3">
            <div className="flex gap-4 items-center">
                <p className="font-zed text-neutral-500 dark:text-neutral-400 text-[14px]">{t.title}</p>
            </div>

            <div className="grid md:flex gap-6 items-center">
                <div className="grid gap-5 relative">
                    <div className="ellipsis-animation absolute -top-8 left-36">
                        <div className="size-24 rounded-full blur-[60px] opacity-20 bg-purple-500"/>
                    </div>

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
                    <div className="hidden md:flex flex-wrap gap-4">
                        <SkillTag icon={SiTypescript} text="TypeScript"/>
                        <SkillTag icon={FaReact} text="React"/>
                        <SkillTag imageSrc={RiNextjsFill} text="Next"/>
                        <SkillTag imageSrc={RiTailwindCssFill} text="Tailwind"/>
                    </div>
                </div>
            </div>
            <p className="font-raleway text-neutral-500 dark:text-neutral-300/80 font-medium py-2">
                {t.description}
            </p>
            <div className="grid lg:flex gap-4 md:gap-4 w-full">
                <button
                    className="flex gap-4 items-center px-6 py-2 ring-2 rounded-xl bg-neutral-100/20 ring-neutral-200/40 dark:bg-neutral-900/20 dark:ring-neutral-800/40 hover:scale-[98%] active:scale-[96%] smooth"
                    onClick={() => window.open('https://t.me/tr3ble', '_blank')}
                >
                    <p className="font-raleway font-medium text-neutral-600 dark:text-neutral-300">{t.contactMe}</p>
                </button>
                <button
                    className="flex gap-4 items-center text-neutral-600 dark:text-neutral-300 px-6 py-2 ring-2 rounded-xl bg-neutral-100/20 ring-neutral-200/40 dark:bg-neutral-900/20 dark:ring-neutral-800/40 hover:scale-[98%] active:scale-[96%] smooth"
                    onClick={() => window.toggleTheme()}
                >
                    <p className="font-raleway font-medium">
                        {theme === 'dark' ? t.lightTheme : t.darkTheme}
                    </p>
                </button>
                <button
                    onClick={toggleLanguage}
                    className="flex gap-4 items-center px-6 py-2 ring-2 rounded-xl bg-neutral-100/20 ring-neutral-200/40 dark:bg-neutral-900/20 dark:ring-neutral-800/40 hover:scale-[98%] active:scale-[96%] smooth"
                >
                    <p className="font-raleway font-medium text-neutral-600 dark:text-neutral-300">{language === 'en' ? 'RU' : 'EN'}</p>
                </button>
            </div>
        </div>
    );
}







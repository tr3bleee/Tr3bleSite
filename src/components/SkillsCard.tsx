"use client";

import { translations } from "@/lib/translations";
import { useLanguage } from "@/lib/useLanguage";
import { useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import { SiDocker, SiNestjs, SiNextdotjs as SiNextJs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';

interface SkillItemProps {
    name: string,
    status: string,
    statusColor: string,
    icon: IconType,
    href?: string
}

function SkillItem({name, status, statusColor, icon: Icon, href}: SkillItemProps) {
    return (
        <li role="listitem">
            <a
                href={href || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 md:p-5 ring-2 w-full rounded-2xl bg-neutral-50/50 ring-neutral-300 dark:bg-neutral-900/30 dark:ring-neutral-600 hover:shadow-lg hover:shadow-neutral-200/20 dark:hover:shadow-neutral-900/30 transition-all duration-300 ease-out hover:scale-[102%] backdrop-blur-sm hover:ring-neutral-400 dark:hover:ring-neutral-500 block"
                aria-label={`Learn more about ${name} technology`}
                itemProp="knowsAbout"
                itemScope
                itemType="https://schema.org/Thing"
            >
                <meta itemProp="name" content={name} />
                <meta itemProp="url" content={href} />
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5 md:gap-3">
                        <div className="p-2 md:p-2.5 rounded-2xl bg-neutral-100/80 dark:bg-neutral-800/50 group-hover:bg-neutral-200/80 dark:group-hover:bg-neutral-700/60 transition-colors duration-300" aria-hidden="true">
                            <Icon className="text-neutral-600 dark:text-neutral-300 text-[18px] md:text-[20px] transition-transform group-hover:scale-110"/>
                        </div>
                        <span className="font-raleway font-semibold text-neutral-700 dark:text-neutral-200 leading-tight text-sm md:text-base" itemProp="name">{name}</span>
                    </div>
                    <div 
                        className="size-1.5 md:size-2 rounded-full flex-shrink-0" 
                        style={{backgroundColor: statusColor}}
                        role="status"
                        aria-label="Proficiency level: Expert"
                        title="Expert level proficiency"
                    />
                </div>
            </a>
        </li>
    );
}

export default function SkillsCard() {
    const {language} = useLanguage();
    const [currentLanguage, setCurrentLanguage] = useState(language);
    
    useEffect(() => {
        setCurrentLanguage(language);
    }, [language]);
    
    const t = translations[currentLanguage].skills;

    return (
        <section
            key={currentLanguage}
            className="grid gap-6 md:gap-7 p-6 md:p-7 lg:p-8 items-start rounded-2xl ring-2 ring-neutral-300 backdrop-blur-md bg-white/60 dark:bg-neutral-900/60 dark:ring-neutral-600 hover:shadow-lg hover:shadow-neutral-200/20 dark:hover:shadow-neutral-900/30 transition-all duration-300 ease-out group hover:ring-neutral-400 dark:hover:ring-neutral-500"
            aria-labelledby="skills-title"
            role="region"
            itemScope
            itemType="https://schema.org/ItemList"
        >
            <header className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-slate-200/50 dark:bg-neutral-800/90">
                        <p className="font-zed text-neutral-500 dark:text-neutral-400 text-[13px]" role="presentation">{t.title}</p>
                    </div>
                    <div className="hidden sm:block h-4 w-[1px] bg-neutral-300 dark:bg-neutral-600" role="presentation"/>
                    <div className="hidden sm:flex items-center gap-1.5" role="presentation" aria-label="Window controls decoration">
                        <div className="size-1.5 rounded-full bg-red-400"/>
                        <div className="size-1.5 rounded-full bg-yellow-400"/>
                        <div className="size-1.5 rounded-full bg-green-400"/>
                    </div>
                </div>
                <div className="text-neutral-400 dark:text-neutral-500 text-[11px] font-mono" role="status">
                    <span itemProp="numberOfItems">6</span> {t.itemsCount}
                </div>
            </header>

            <div>
                <h2 id="skills-title" className="font-raleway text-neutral-700 dark:text-neutral-200 font-bold text-xl md:text-2xl mb-2" itemProp="name">{t.heading}</h2>
                <p className="font-raleway text-neutral-500 dark:text-neutral-400 text-sm" itemProp="description">{t.description}</p>
            </div>
            
            <ul 
                className="grid gap-4 md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full list-none m-0 p-0" 
                role="list" 
                aria-label="Technical skills and technologies"
                itemProp="itemListElement"
            >
                <SkillItem name="TypeScript" status="" statusColor="#10b981" icon={SiTypescript}
                           href="https://www.typescriptlang.org/"/>
                <SkillItem name="Next.js" status="" statusColor="#10b981" icon={SiNextJs}
                           href="https://nextjs.org/"/>
                <SkillItem name="NestJS" status="" statusColor="#10b981" icon={SiNestjs}
                           href="https://nestjs.com/"/>
                <SkillItem name="React" status="" statusColor="#10b981" icon={SiReact}
                           href="https://react.dev/"/>
                <SkillItem name="Tailwind" status="" statusColor="#10b981" icon={SiTailwindcss}
                           href="https://tailwindcss.com/"/>
                <SkillItem name="Docker" status="" statusColor="#10b981" icon={SiDocker}
                           href="https://www.docker.com/"/>
            </ul>
            
            {/* Hidden structured data for better SEO */}
            <div className="sr-only">
                <span itemProp="itemListOrder">Unordered</span>
                <div itemProp="mainEntity" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Tr3ble</span>
                    <span itemProp="jobTitle">Full-Stack TypeScript Developer</span>
                </div>
            </div>
        </section>
    );
}


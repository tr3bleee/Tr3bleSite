import Link from 'next/link';
import {IconType} from 'react-icons';
import {SiTypescript, SiNextdotjs as SiNextJs, SiNestjs, SiReact, SiTailwindcss, SiDocker} from 'react-icons/si';

interface SkillItemProps {
    name: string,
    status: string,
    statusColor: string,
    icon: IconType,
    href?: string
}

function SkillItem({name, status, statusColor, icon: Icon, href}: SkillItemProps) {
    return (
        <Link
            href={href || ""}
            target="_blank"
            rel="noopener noreferrer"
            className="grid gap-3 items-center p-[18px] ring-1 w-full rounded-xl bg-neutral-50/50 ring-neutral-200/60 dark:bg-neutral-900/30 dark:ring-neutral-800 hover:shadow-md hover:shadow-neutral-200/20 dark:hover:shadow-neutral-900/30 transition-all duration-200 ease-out hover:scale-[102%] backdrop-blur-sm"
        >
            <div className="flex gap-3 items-center">
                <Icon className="text-neutral-600 dark:text-neutral-300 text-[20px] transition-transform group-hover:scale-110"/>
                <p className="font-raleway font-medium text-neutral-600 dark:text-neutral-300">{name}</p>
            </div>
            <div className="flex gap-4 items-center relative">
                <div className="size-2 rounded-full" style={{backgroundColor: statusColor}}/>
                <p className="font-raleway text-[13px] opacity-80" style={{color: statusColor}}>{status}</p>
            </div>
        </Link>
    );
}

export default function SkillsCard() {
    return (
        <div
            className="grid gap-6 p-6 md:p-7 items-start rounded-xl ring-1 ring-neutral-200/80 backdrop-blur-sm bg-white/50 dark:bg-neutral-900/20 dark:ring-neutral-800/40 hover:shadow-lg hover:shadow-neutral-200/20 dark:hover:shadow-neutral-900/30 transition-all duration-300 ease-out hover:scale-[100.5%]">
            <div className="flex gap-4 items-center">
                <p className="font-zed text-neutral-500 dark:text-neutral-400 text-[14px]">skills.md</p>
            </div>

            <div className="grid items-start relative">
                <div className="absolute -top-8 right-0">
                    <div className="size-32 rounded-full blur-[100px] opacity-20 bg-gradient-to-r from-emerald-400 to-cyan-400"/>
                </div>
                <h1 className="font-raleway text-neutral-700 dark:text-neutral-200 font-semibold text-xl">🚀 Core Stack</h1>
            </div>
            <div className="flex w-full">
                <div className="grid gap-5 lg:grid-cols-3 w-full">
                    <SkillItem name="TypeScript" status="Active" statusColor="#10b981" icon={SiTypescript}
                               href="https://www.typescriptlang.org/"/>
                    <SkillItem name="Next.js" status="Active" statusColor="#10b981" icon={SiNextJs}
                               href="https://nextjs.org/"/>
                    <SkillItem name="NestJS" status="Active" statusColor="#10b981" icon={SiNestjs}
                               href="https://nestjs.com/"/>
                    <SkillItem name="React" status="Active" statusColor="#10b981" icon={SiReact}
                               href="https://react.dev/"/>
                    <SkillItem name="Tailwind CSS" status="Active" statusColor="#10b981" icon={SiTailwindcss}
                               href="https://tailwindcss.com/"/>
                    <SkillItem name="Docker" status="Active" statusColor="#10b981" icon={SiDocker}
                               href="https://www.docker.com/"/>
                </div>
            </div>
        </div>
    );
}


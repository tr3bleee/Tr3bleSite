import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFastify,
  SiPrisma,
  SiJavascript,
  SiNestjs,
  SiPython,
  SiKotlin,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaJava } from "react-icons/fa";

export default function TechStack() {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
        Tech Stack
      </h2>

      <TooltipProvider>
        <div className="flex flex-wrap gap-5">
          {[
            { icon: SiJavascript, name: "JavaScript" },
            { icon: SiTypescript, name: "TypeScript" },
            { icon: SiReact, name: "React" },
            { icon: SiNextdotjs, name: "Next.js" },
            { icon: SiTailwindcss, name: "Tailwind CSS" },
            { icon: SiFastify, name: "Fastify" },
            { icon: SiNestjs, name: "NestJS" },
            { icon: SiPrisma, name: "Prisma" },
          ].map((tech, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <div className="text-gray-600 transition-all duration-200 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 hover:scale-110">
                  <tech.icon size={28} />
                </div>
              </TooltipTrigger>
              <TooltipContent className="border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  {tech.name}
                </p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>

        <div className="space-y-3 pt-3">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Also familiar with
          </h3>
          <div className="flex flex-wrap gap-5">
            {[
              { icon: SiPython, name: "Python" },
              { icon: SiKotlin, name: "Kotlin" },
              { icon: FaJava, name: "Java" },
            ].map((tech, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <div className="text-gray-600 transition-all duration-200 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 hover:scale-110">
                    <tech.icon size={28} />
                  </div>
                </TooltipTrigger>
                <TooltipContent className="border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {tech.name}
                  </p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </TooltipProvider>
    </div>
  );
}
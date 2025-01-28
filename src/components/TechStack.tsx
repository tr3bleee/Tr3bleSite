import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFastify,
  SiPrisma,
  SiJavascript,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function TechStack() {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
        Tech Stack
      </h2>

      <div className="flex flex-wrap gap-5">
        <TooltipProvider>
          {[
            { icon: SiJavascript, name: "JavaScript" },
            { icon: SiTypescript, name: "TypeScript" },
            { icon: SiReact, name: "React" },
            { icon: SiNextdotjs, name: "Next.js" },
            { icon: SiTailwindcss, name: "Tailwind CSS" },
            { icon: SiFastify, name: "Fastify" },
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
        </TooltipProvider>
      </div>
    </div>
  );
}
